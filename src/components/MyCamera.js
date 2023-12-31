import React ,{useContext}from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/reels.css";
import "./../styles/video-react.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate,useLocation } from "react-router-dom";
import { Player } from "video-react";
import Nav_bar_area from './NavBar';
import Camera from './Camera';
import { ContextApiContext } from '../context/ContextApi';



export default function Reels_page_export() {
  const { contextState } = useContext(ContextApiContext);
  const location = useLocation();


  const navigate = useNavigate();

  const navigateToPath = (path) => {
    navigate(path);
  };
  console.log('contextState cammera',contextState);
  return (
    <section className="">
      {/* <Nav_bar_area contextApi={{contextState}}/> */}
    
      <Camera contextApi={{contextState}} order_id ={location.state?.order_id}  />

        {/* <Row className="reel_box">
          <Col>
          </Col>
          
        </Row>
         */}
        
    </section>
  );
}

