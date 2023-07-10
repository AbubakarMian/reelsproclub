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
import { faStar, faEye } from "@fortawesome/free-solid-svg-icons";
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

export default function MyReels_page_export() {
  const navigate = useNavigate();

  const navigateToPath = (path) => {
    navigate(path);
  };
  return(
    // <Player
    //            style={{background:"red", height:"100vh"}}
    //             playsInline
    //             aspectRatio="16:9" // 16:9
    //             poster="./images/poster.jpg"
    //             src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    //             // width={1320}
    //             // height={"100vh"}
    //             /> 
    <section>
       <video id="background-video1"  loop autoPlay ratio="16:9" // height="720" width="1280"
                // source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                >
                  <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
              </video>
    </section>
  )
}
