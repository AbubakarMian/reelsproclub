import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
export default function WebcamVideo() {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);

  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
    // const navigate = useNavigate();

    // const navigateToPath = (path) => {
    //   navigate(path);
    // };
    // navigate(-1);
  }, [mediaRecorderRef, setCapturing]);

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  const videoConstraints = {
    width: 1280,
  height: 720,
    facingMode: "user",
  };

      const navigate = useNavigate();

    const navigateToPath = (path) => {
      navigate(path);
    };
    // navigate(-1);

  return (
    <div className="Container">
      <Webcam
        height={720}
        width={1280}
        audio={false}
        mirrored={true}
        ref={webcamRef}
        videoConstraints={videoConstraints}
        style={{
          position: "absolute",
            textAlign: "center",
            zindex: 8,
            right:0,
            height: "93vh",
             width: "100%",
             objectFit: "cover",
          }}
      />
      <div className="camerBtns">
      {/* <button onClick={()=>navigate('/myreels')}>
          Back
        </button> */}
        {capturing ? (
          // <button className="stopCapture" onClick={handleStopCaptureClick}>Stop Capture</button>
          <button className="stopCapture" onClick={()=>navigate('/myreels')}> </button>
        ) : (
          <button className="startCapture" onClick={handleStartCaptureClick}> </button>//Start Capture
          // <button className="startCapture" onClick={()=>navigate('/myreels')}> </button>//Start Capture
        )}
        {/* {recordedChunks.length > 0 && (
          <button onClick={handleDownload}>Download</button>
        )} */}
        
      </div>
    </div>
  );
}