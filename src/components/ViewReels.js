import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/viewreels.css";
import "./../styles/video-react.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,
  faPlay,
   faEye } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate, useLocation } from "react-router-dom";

import { Player } from "video-react";
import Nav_bar_area from "./NavBar";
// import Video from "../../public/videos/pizza2.mp4";
import Pizza1 from "../videos/pizza2.mp4";
import video1 from "../videos/vid1.mp4";
import video2 from "../videos/vid2.mp4";
import video3 from "../videos/vid3.mp4";
import video4 from "../videos/vid4.mp4";
import video5 from "../videos/vid5.mp4";
import video6 from "../videos/vid6.mp4";
import video7 from "../videos/vid7.mp4";
import video8 from "../videos/vid8.mp4";
import video9 from "../videos/vid9.mp4";

import { RWebShare } from "react-web-share";
import { useEffect } from "react";
import VideoThumbnail from 'react-video-thumbnail';

export  function Test(){

  const videos = [
      {
        url:"https://stagging.hatinco.com/reels_proclub_backend/public/camera_videos/1694224551.webm",
        seek:0
      },
      {
        url:"https://dl.dropboxusercontent.com/s/7b21gtvsvicavoh/statue-of-admiral-yi-no-audio.mp4",
        seek:1
      },
      {
        url:"https://dl.dropboxusercontent.com/s/7b21gtvsvicavoh/statue-of-admiral-yi-no-audio.mp4",
        seek:9
      },
      {
        url:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        seek:1
      }
  ];

  return(
    <div>
      {
        videos.map((video)=>{
          return (
            <VideoThumbnail
    // videoUrl="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    videoUrl={video.url}
    thumbnailHandler={(thumbnail) => console.log(thumbnail)}
    // width={120}
    // height={180}
    snapshotAtTime={video.seek}
    />
          )
        })
      }
    {/* <VideoThumbnail
    // videoUrl="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    videoUrl="https://dl.dropboxusercontent.com/s/7b21gtvsvicavoh/statue-of-admiral-yi-no-audio.mp4"
    thumbnailHandler={(thumbnail) => console.log(thumbnail)}
    // width={120}
    // height={180}
    snapshotAtTime={5}
    /> */}
    </div>
  )
}


export default function MyReels_page_export() {
// export  function MyReels_page_export() {
  const navigate = useNavigate();

  const navigateToPath = (path, _obj) => {
    navigate(path, _obj);
  };
  const location = useLocation();

    const [data, setData] = useState([]);

    useEffect(()=>{
      const incomming_data = location.state && location.state.videos_list != null
      ? location.state.videos_list
      : localStorage.getItem("videos_list",[]);
      localStorage.setItem("videos_list",incomming_data);
      setData(incomming_data);
    },[])

  return (
    <div>
      <section className="reeel_back">
        <Container>
          <Row className="">
            <Col>
              <Button className="backbtnsignup" onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faArrowLeft} />{" "}
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="reeel_cover">
        <Container fluid>
          <Row className="">
            <Col className="columnn">
              <div
                className="clickable"
                onClick={() => {
                  navigate("/reelvideo", { video_src: video1 });
                }}
              >
                <div className="vid_thumb">
                  <div className="vid_thumb_img"><FontAwesomeIcon icon={faPlay}  className="play_bt"/>
                    {/* <img src="../images/thumbnails/thumb1.jpg" alt="Profile" /> */}
                    <VideoThumbnail
    // videoUrl="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    videoUrl="https://dl.dropboxusercontent.com/s/7b21gtvsvicavoh/statue-of-admiral-yi-no-audio.mp4"
    thumbnailHandler={(thumbnail) => console.log(thumbnail)}
    // width={120}
    // height={180}
    snapshotAtTime={5}
    />
                  
                  </div>
                </div>
              </div>
            </Col>

            <Col className="columnn">
              <div
                className="clickable"
                onClick={() => {
                  navigate("/reelvideo");
                }}
              >
                <div className="vid_thumb">
                  <div className="vid_thumb_img"><FontAwesomeIcon icon={faPlay}  className="play_bt"/>
                    <img src="../images/thumbnails/thumb2.jpg" alt="Profile" />
                  </div>
                </div>
              </div>
            </Col>
            <Col className="columnn">
              <div
                className="clickable"
                onClick={() => {
                  navigate("/reelvideo");
                }}
              >
                <div className="vid_thumb">
                  <div className="vid_thumb_img"><FontAwesomeIcon icon={faPlay}  className="play_bt"/>
                    <img src="../images/thumbnails/thumb17.jpg" alt="Profile" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="nomargin">
            <Col className="columnn">
              <div
                className="clickable"
                onClick={() => {
                  navigate("/reelvideo");
                }}
              >
                <div className="vid_thumb">
                  <div className="vid_thumb_img"><FontAwesomeIcon icon={faPlay}  className="play_bt"/>
                  <img src="../images/thumbnails/thumb4.jpg" alt="Profile" />
                  </div>
                </div>
              </div>
            </Col>
            <Col className="columnn">
              <div
                className="clickable"
                onClick={() => {
                  navigate("/reelvideo");
                }}
              >
                {/* <video
                  muted
                  id="background-video1"
                  loop
                  autoPlay
                  ratio="16:9"
                  resizeMode="cover" // height="720" width="1280"
                  source
                  src={video5}
                ></video> */}
                <div className="vid_thumb">
                  <div className="vid_thumb_img"><FontAwesomeIcon icon={faPlay}  className="play_bt"/>
                  <img src="../images/thumbnails/thumb5.jpg" alt="Profile" />
                  </div>
                </div>
              </div>
            </Col>
            <Col className="columnn">
              <div
                className="clickable"
                onClick={() => {
                  navigate("/reelvideo");
                }}
              >
                {/* <video
                  muted
                  id="background-video1"
                  loop
                  autoPlay
                  ratio="16:9"
                  resizeMode="cover" // height="720" width="1280"
                  source
                  src={video6}
                ></video> */}
                <div className="vid_thumb">
                  <div className="vid_thumb_img"><FontAwesomeIcon icon={faPlay}  className="play_bt"/>
                  <img src="../images/thumbnails/thumb6.jpg" alt="Profile" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="nomargin ">
            <Col className="columnn">
              <div
                className="clickable"
                onClick={() => {
                  navigate("/reelvideo");
                }}
              >
                {/* <video
                  muted
                  id="background-video1"
                  loop
                  autoPlay
                  ratio="16:9"
                  resizeMode="cover" // height="720" width="1280"
                  source
                  src={video7}
                ></video> */}
                <div className="vid_thumb">
                  <div className="vid_thumb_img"><FontAwesomeIcon icon={faPlay}  className="play_bt"/>
                  <img src="../images/thumbnails/thumb7.jpg" alt="Profile" />
                  </div>
                </div>
              </div>
            </Col>
            <Col className="columnn">
              <div
                className="clickable"
                onClick={() => {
                  navigate("/reelvideo");
                }}
              >
                {/* <video
                  muted
                  id="background-video1"
                  loop
                  autoPlay
                  ratio="16:9"
                  resizeMode="cover" // height="720" width="1280"
                  source
                  src={video8}
                ></video> */}
                <div className="vid_thumb">
                  <div className="vid_thumb_img"><FontAwesomeIcon icon={faPlay}  className="play_bt"/>
                  <img src="../images/thumbnails/thumb8.jpg" alt="Profile" />
                  </div>
                </div>
              </div>
            </Col>
            <Col className="columnn">
              <div
                className="clickable"
                onClick={() => {
                  navigate("/reelvideo");
                }}
              >
                {/* <video
                  muted
                  id="background-video1"
                  loop
                  autoPlay
                  ratio="16:9"
                  resizeMode="cover" // height="720" width="1280"
                  source
                  src={video9}
                ></video> */}
                <div className="vid_thumb">
                  <div className="vid_thumb_img"><FontAwesomeIcon icon={faPlay}  className="play_bt"/>
                  <img src="../images/thumbnails/thumb9.jpg" alt="Profile" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="nomargin ">
            <Col className="columnn">
              <div
                className="clickable"
                onClick={() => {
                  navigate("/reelvideo");
                }}
              >
                {/* <video
                  muted
                  id="background-video1"
                  loop
                  autoPlay
                  ratio="16:9"
                  resizeMode="cover" // height="720" width="1280"
                  source
                  src={video1}
                ></video> */}
                <div className="vid_thumb">
                  <div className="vid_thumb_img"><FontAwesomeIcon icon={faPlay}  className="play_bt"/>
                  <img src="../images/thumbnails/thumb13.jpg" alt="Profile" />
                  </div>
                </div>
              </div>
            </Col>
            <Col className="columnn">
              <div
                className="clickable"
                onClick={() => {
                  navigate("/reelvideo");
                }}
              >
                {/* <video
                  muted
                  id="background-video1"
                  loop
                  autoPlay
                  ratio="16:9"
                  resizeMode="cover" // height="720" width="1280"
                  source
                  src={video9}
                ></video> */}
                <div className="vid_thumb">
                  <div className="vid_thumb_img"><FontAwesomeIcon icon={faPlay}  className="play_bt"/>
                  <img src="../images/thumbnails/thumb11.jpg" alt="Profile" />
                  </div>
                </div>
              </div>
            </Col>
            <Col className="columnn">
              <div
                className="clickable"
                onClick={() => {
                  navigate("/reelvideo");
                }}
              >
                {/* <video
                  muted
                  id="background-video1"
                  loop
                  autoPlay
                  ratio="16:9"
                  resizeMode="cover" // height="720" width="1280"
                  source
                  src={video2}
                ></video> */}
                <div className="vid_thumb">
                  <div className="vid_thumb_img"><FontAwesomeIcon icon={faPlay}  className="play_bt"/>
                  <img src="../images/thumbnails/thumb12.jpg" alt="Profile" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
//push chk
