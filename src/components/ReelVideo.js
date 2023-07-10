import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/reelsvideo.css";
import "./../styles/video-react.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import { Player, autoPlay, playsInline } from "video-react";
import video6 from "../videos/vid6.mp4";
import { RWebShare } from "react-web-share";


export default function Reels_video(props) {
  const navigate = useNavigate();

  const navigateToPath = (path) => {
    navigate(path);
  };
  return (
    <div className="bg_color">
      <Container>
        <Row>
          <Col>
            <Button className="backbtn" onClick={() => navigate(-1)}><FontAwesomeIcon  icon={faArrowLeft} /> </Button>
          </Col>
        </Row>
      </Container>
      <Container fluid>
          <Row className="">
            <Col className="columnn">
            <div
                className="clickable"
                
              >
                <video
                  id="background-video2"
                  loop
                  autoPlay
                  ratio="16:9"
                  resizeMode="cover" // height="720" width="1280"
                  source
                  
                  src={video6}
                ></video>
              </div>
              <div>
                  <RWebShare
                    data={{
                      text: "Web Share",
                      url: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
                      title: "GfG",
                    }}
                    onClick={() => console.log("shared successfully!")}
                  >
                    <button className="shr_btn"><FontAwesomeIcon icon={faShare} /></button>
                    {/* <button className="shr_btn"><FontAwesomeIcon icon={faShare} /></button> */}
                  </RWebShare>
                </div>
            </Col>
          </Row>
          </Container>
    </div>
  );
}

