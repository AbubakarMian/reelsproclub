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
import { faArrowLeft, faEye } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
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

export default function MyReels_page_export() {
  const navigate = useNavigate();

  const navigateToPath = (path, _obj) => {
    navigate(path, _obj);
  };
  return (
    // <Player
    //            style={{background:"red", height:"100vh"}}
    //             playsInline
    //             aspectRatio="16:9" // 16:9
    //             poster="./images/poster.jpg"
    //             src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    //             // width={1320}
    //             // height={"100vh"}
    //             />
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
                <video muted
                  id="background-video1"
                  resizeMode="cover" // height="720" width="1280"  ratio="16:9"
                  //  source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                  source
                  src={video1}
                ></video>
              </div>
            </Col>

            <Col className="columnn">
              <div
                className="clickable"
                onClick={() => {
                  navigate("/reelvideo");
                }}
              >
                <video muted
                  id="background-video1"
                  loop
                  autoPlay // height="720" width="1280"
                  source
                  src={video7}
                ></video>
              </div>
            </Col>
            <Col className="columnn">
              <div
                className="clickable"
                onClick={() => {
                  navigate("/reelvideo");
                }}
              >
                <video muted
                  id="background-video1"
                  loop
                  autoPlay
                  ratio="16:9"
                  resizeMode="cover" // height="720" width="1280"
                  source
                  src={Pizza1}
                >
                  {/* <source src={require(Video)} type="video/mp4"/>         */}
                </video>
                
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
                <video muted
                  id="background-video1"
                  loop
                  autoPlay
                  ratio="16:9"
                  resizeMode="cover" // height="720" width="1280"
                  source
                  src={video2}
                ></video>
              </div>
            </Col>
            <Col className="columnn">
              <div
                className="clickable"
                onClick={() => {
                  navigate("/reelvideo");
                }}
              >
                <video muted
                  id="background-video1"
                  loop
                  autoPlay
                  ratio="16:9"
                  resizeMode="cover" // height="720" width="1280"
                  source
                  src={video3}
                ></video>
              </div>
            </Col>
            <Col className="columnn">
              <div
                className="clickable"
                onClick={() => {
                  navigate("/reelvideo");
                }}
              >
                <video muted
                  id="background-video1"
                  loop
                  autoPlay
                  ratio="16:9"
                  resizeMode="cover" // height="720" width="1280"
                  source
                  src={video4}
                ></video>
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
                <video muted
                  id="background-video1"
                  loop
                  autoPlay
                  ratio="16:9"
                  resizeMode="cover" // height="720" width="1280"
                  source
                  src={video5}
                ></video>
              </div>
            </Col>
            <Col className="columnn">
              <div
                className="clickable"
                onClick={() => {
                  navigate("/reelvideo");
                }}
              >
                <video muted
                  id="background-video1"
                  loop
                  autoPlay
                  ratio="16:9"
                  resizeMode="cover" // height="720" width="1280"
                  source
                  src={video6}
                ></video>
              </div>
            </Col>
            <Col className="columnn">
              <div
                className="clickable"
                onClick={() => {
                  navigate("/reelvideo");
                }}
              >
                <video muted
                  id="background-video1"
                  loop
                  autoPlay
                  ratio="16:9"
                  resizeMode="cover" // height="720" width="1280"
                  source
                  src={video7}
                ></video>
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
                <video muted
                  id="background-video1"
                  loop
                  autoPlay
                  ratio="16:9"
                  resizeMode="cover" // height="720" width="1280"
                  source
                  src={video8}
                ></video>
              </div>
            </Col>
            <Col className="columnn">
              <div
                className="clickable"
                onClick={() => {
                  navigate("/reelvideo");
                }}
              >
                <video muted
                  id="background-video1"
                  loop
                  autoPlay
                  ratio="16:9"
                  resizeMode="cover" // height="720" width="1280"
                  source
                  src={video9}
                ></video>
              </div>
            </Col>
            <Col className="columnn">
              <div
                className="clickable"
                onClick={() => {
                  navigate("/reelvideo");
                }}
              >
                <video muted
                  id="background-video1"
                  loop
                  autoPlay
                  ratio="16:9"
                  resizeMode="cover" // height="720" width="1280"
                  source
                  src={video1}
                ></video>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
//push chk