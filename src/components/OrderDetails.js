import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/oreder_details.css";
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
import video9 from "../videos/vid9.mp4";

export default function OrderDetails() {
  const navigate = useNavigate();

  const navigateToPath = (path) => {
    navigate(path);
  };
  return (
    <section className="">
      {/* <Nav_bar_area /> */}
      <Container fluid className="myreelarea">
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
        <Row>
          <h2 className="order_hed">ORDERS</h2>
        </Row>
        <div className="gre_card_head">
          <h5>Reels For Restaurants</h5>
          <div className="gre_card">
            <Row className="">
              <Col>
                <div className="prof_img">
                  <img src="../images/profile.png" />
                </div>
              </Col>
              <Col>
                <div>
                  <h5 className="order_btn_area">5 Reels</h5>
                  <Button  onClick={()=>navigateToPath('/order')}  className="order_btn_area">DETAILS</Button>
                </div>
              </Col>
              <Col>
                <div>
                  <h5 className="order_btn_area"> $50</h5>
                  <Button className="order_btn_area btn-success status">ACCEPT</Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="gre_card_head">
          <h5>Make Reels With Garden Background </h5>
          <div className="gre_card">
            <Row className="">
              <Col>
                <div className="prof_img">
                  <img src="../images/profile.png" />
                </div>
              </Col>
              <Col>
                <div>
                  <h5 className="order_btn_area">5 Reels</h5>
                  <Button  onClick={()=>navigateToPath('/order')}  className="order_btn_area">DETAILS</Button>
                </div>
              </Col>
              <Col>
                <div>
                  <h5 className="order_btn_area"> $50</h5>
                  <Button className="order_btn_area btn-danger status">PENDING</Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="gre_card_head">
          <h5>Reels For Houses</h5>
          <div className="gre_card">
            <Row className="">
              <Col>
                <div className="prof_img">
                  <img src="../images/profile.png" />
                </div>
              </Col>
              <Col>
                <div>
                  <h5 className="order_btn_area">5 Reels</h5>
                  <Button  onClick={()=>navigateToPath('/order')}  className="order_btn_area">DETAILS</Button>
                </div>
              </Col>
              <Col>
                <div>
                  <h5 className="order_btn_area"> $50</h5>
                  <Button className="order_btn_area btn-success status">COMPLETED</Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="gre_card_head">
          <h5>Reels For Construction</h5>
          <div className="gre_card">
            <Row className="">
              <Col>
                <div className="prof_img">
                  <img src="../images/profile.png" />
                </div>
              </Col>
              <Col>
                <div>
                  <h5 className="order_btn_area">5 Reels</h5>
                  <Button  onClick={()=>navigateToPath('/order')}  className="order_btn_area">DETAILS</Button>
                </div>
              </Col>
              <Col>
                <div>
                  <h5 className="order_btn_area"> $50</h5>
                  <Button className="order_btn_area btn-success status">COMPLETED</Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
}
