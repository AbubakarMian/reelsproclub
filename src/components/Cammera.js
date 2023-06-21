import React, { Component } from "react";
import cx from "classnames";
import Webcam from "react-webcam";
import RecordRTC from "recordrtc";
import "./../styles/cammera.css";

const views = {
  webcam: "webcam",
  gallery: "gallery",
  item: "item"
};

export default class App extends Component {
  webcamRef = React.createRef();
  videoRef = React.createRef();

  state = {
    view: views.webcam,
    images: [],
    videos: [],
    starting: false,
    stopping: false,
    isRecording: false,
    isVertical: window.screen.width < window.screen.height
  };

  goFullscreen = () => {
    document.body.requestFullscreen();
  };

  clearData = () => {
    this.setState({ images: [], videos: [] });
  };

  showGallery = () => {
    this.setState({ view: views.gallery });
  };

  showWebcam = () => {
    this.setState({ view: views.webcam });
  };

  capturePhoto = () => {
    const { images } = this.state;
    const src = this.webcamRef.current.getScreenshot();
    this.setState({ images: [...images, src] });
    this.setState({ captured: true }, () => {
      setTimeout(() => {
        this.setState({ captured: false });
      }, 250);
    });
  };

  startRecording = async () => {
    this.setState({ starting: true });
    if (this.webcamRef.current.stream) {
      const tracks = this.webcamRef.current.stream.getTracks();
      tracks.forEach(track => track.stop());
    }
    if (this.stream) {
      const tracks = this.stream.getTracks();
      tracks.forEach(track => track.stop());
    }
    try {
      const devices = await window.navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(
        device => device.kind === "videoinput"
      );
      const rearCamera = videoDevices.find(
        device => (device.label || "").toUpperCase().indexOf("BACK") >= 0
      );
      console.log("rearCamera =", rearCamera);
      console.log("videoDevices =", videoDevices);
      if (videoDevices) {
        this.stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: window.screen.width,
            height: window.screen.height,
            facingMode: "environment",
            deviceId: {
              exact: rearCamera
                ? rearCamera.id
                : videoDevices[videoDevices.length - 1].id
            }
          },
          audio: true
        });
      }
    } catch (error) {
      try {
        this.stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: window.screen.width,
            height: window.screen.height,
            facingMode: "environment"
          },
          audio: true
        });
      } catch (error) {}
    }
    if (this.stream) {
      this.videoRecorder = RecordRTC(this.stream, {
        type: "video"
      });
      this.videoRecorder.startRecording();
      this.setState({ isRecording: true });
    }
    this.setState({ starting: false });
  };

  stopRecording = () => {
    if (this.videoRecorder) {
      this.setState({ stopping: true });
      window.dispatchEvent(new CustomEvent("stopRecording"));
      this.videoRecorder.stopRecording(url => {
        const { videos } = this.state;
        if (this.stream) {
          const tracks = this.stream.getTracks();
          tracks.forEach(track => track.stop());
        }
        this.setState({
          videos: [...videos, url],
          isRecording: false,
          stopping: false
        });
      });
    } else {
      this.setState({ isRecording: false });
    }
  };

  renderGallery() {
    const { images, videos, isVertical } = this.state;
    return (
      <div
        className={cx("container gallery", {
          vertical: isVertical,
          empty: images.length === 0 && videos.length === 0
        })}
      >
        {images.length === 0 && videos.length === 0 && (
          <span className="empty">No images/videos captured yet</span>
        )}
        {images.length > 0 && (
          <div className="gallery-items">
            <h2>Captured Images</h2>,
            <div className="images">
              {images.map((image, idx) => {
                return (
                  <img key={idx} alt={`captured item ${idx + 1}`} src={image} />
                );
              })}
            </div>
          </div>
        )}
        {videos.length > 0 && (
          <div className="gallery-items">
            <h2>Captured Videos</h2>,
            <div className="videos">
              {videos.map((video, idx) => {
                return (
                  <video className="recorded" key={idx} src={video} controls />
                );
              })}
            </div>
          </div>
        )}
        <div className="actions">
          <button className="action-webcam" onClick={this.showWebcam}>
            <span>&rarr;</span>
          </button>
          <button className="action-clear" onClick={this.clearData}>
            <span>X</span>
          </button>
        </div>
      </div>
    );
  }

  renderWebcam() {
    const {
      captured,
      isRecording,
      isVertical,
      starting,
      stopping
    } = this.state;
    return (
      <div className={cx("container", { captured, vertical: isVertical })}>
        {isRecording && <span className="recording">Recording</span>}
        {isRecording ? (
          <video
            className="stream"
            ref={this.videoRef}
            autoPlay
            src={this.stream}
          />
        ) : (
          <Webcam
            className="webcam"
            audio
            ref={this.webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              width: window.screen.width,
              height: window.screen.height,
              facingMode: "environment"
            }}
            width={window.screen.width}
            height={window.screen.height}
            onClick={this.goFullscreen}
          />
        )}
        <div className="actions">
          <button
            className="action-gallery"
            onClick={this.showGallery}
            disabled={isRecording || starting || stopping}
          >
            <div />
            <div />
            <div />
            <div />
          </button>
          <button
            className="action-photo"
            onClick={this.capturePhoto}
            disabled={isRecording || starting || stopping}
          >
            <div />
          </button>
          {isRecording ? (
            <button
              className="action-stop-video"
              onClick={this.stopRecording}
              disabled={starting || stopping}
            >
              <div />
            </button>
          ) : (
            <button
              className="action-start-video"
              onClick={this.startRecording}
              disabled={starting || stopping}
            >
              <div />
            </button>
          )}
        </div>
      </div>
    );
  }

  render() {
    const { view } = this.state;
    switch (view) {
      case views.gallery:
        return this.renderGallery();

      case views.webcam:
        return this.renderWebcam();

      default:
        return null;
    }
  }
}
