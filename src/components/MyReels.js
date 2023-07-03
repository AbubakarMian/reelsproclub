import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/myreels.css";
import "./../styles/reels.css";
import "./../styles/video-react.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar ,faEye } from "@fortawesome/free-solid-svg-icons";
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

export default function MyReels_page_export() {
  const navigate = useNavigate();

  const navigateToPath = (path) => {
    navigate(path);
  };
  return (
    <section className="">
      <Container fluid>
        {/* <Row>
          <Col>
            <div className="top_head_mec">REELS</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={()=>navigateToPath('/camera')} className="add_reelbtn"><FontAwesomeIcon icon={faCameraRetro} /> +   Add Reel</Button>
          </Col>
        </Row> */}
        <Row className="reel_box">
          <Col>
            <div className="img_area" >
            <Player
          controls={{position:'center'}}
          position={'center'}
          playsInline={true}
        //   poster="./images/poster.jpg"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          
          autoPlay={true}
          isFullscreen='Expand'
        />
             
            </div>
          </Col>
          <Col>
            <div className="info_area">
                <div className="likes_area">
              <p>
              <FontAwesomeIcon icon={faEye} />(129)<FontAwesomeIcon className="like" icon={faThumbsUp} />
                (112 )   </p>
                </div>
              <Button onClick={()=>{navigate('/reelvideo')}} className="viewbtn">View</Button>
              <Button className="viewbtn btn-danger">Delete</Button>
            </div>
          </Col>
        </Row>
        <Row className="reel_box">
          <Col>
             <div className="img_area">
             <Player
          controls={{position:'center'}}
          position={'center'}
          playsInline={true}
        //   poster="./images/poster.jpg"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          
          autoPlay={true}
          isFullscreen='Expand'
        />
            </div>
          </Col>
          <Col>
          <div className="info_area">
                <div className="likes_area">
              <p>
              <FontAwesomeIcon icon={faEye} />(129)            <FontAwesomeIcon className="like" icon={faThumbsUp} />
                (112 )   </p>
                </div>
              <Button onClick={()=>{navigate('/reelvideo')}} className="viewbtn">View</Button>
              <Button className="viewbtn btn-danger">Delete</Button>
            </div>
          </Col>
        </Row>
        <Row className="reel_box">
          <Col>
             <div className="img_area">
             <Player
          controls={{position:'center'}}
          position={'center'}
          playsInline={true}
        //   poster="./images/poster.jpg"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          
          autoPlay={true}
          isFullscreen='Expand'
        />
            </div>
          </Col>
          <Col>
          <div className="info_area">
                <div className="likes_area">
              <p>
              <FontAwesomeIcon icon={faEye} />(129)            <FontAwesomeIcon className="like" icon={faThumbsUp} />
                (112 )   </p>
                </div>
              <Button onClick={()=>{navigate('/reelvideo')}} className="viewbtn">View</Button>
              <Button className="viewbtn btn-danger">Delete</Button>
            </div>
          </Col>
        </Row>

        <Row className="reel_box">
          <Col>
             <div className="img_area">
             <Player
          controls={{position:'center'}}
          position={'center'}
          playsInline={true}
        //   poster="./images/poster.jpg"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          
          autoPlay={true}
          isFullscreen='Expand'
        />
            </div>
          </Col>
          <Col>
          <div className="info_area">
                <div className="likes_area">
              <p>
              <FontAwesomeIcon icon={faEye} />(129)            <FontAwesomeIcon className="like" icon={faThumbsUp} />
                (112 )   </p>
                </div>
              <Button onClick={()=>{navigate('/reelvideo')}} className="viewbtn">View</Button>
              <Button className="viewbtn btn-danger">Delete</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}