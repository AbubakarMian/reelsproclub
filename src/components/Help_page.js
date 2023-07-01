import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/help_page.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";


export default function Help_page_export() {
  const navigate = useNavigate();

    const navigateToPath = (path) => {
      navigate(path);
    };
  return (
    <section className="">
      <Container fluid>
        <Row>
          <Col>
            <div className="top_head">What do you need help with ?</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <a className="link_dec"  onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/moving-truck.png" />

                <div className="img_box_txt">
                  <p>Moving</p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/plumber (1).png" />
                <div className="img_box_txt">
                  <p>Handyman</p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/conference.png" />
                <div className="img_box_txt">
                  <p>Event Planner</p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/fitness.png" />
                <div className="img_box_txt">
                  <p>Fitness Trainer</p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/driver.png" />
                <div className="img_box_txt">
                  <p>Drivers & Cab</p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/tile (1).png" />
                <div className="img_box_txt">
                  <p>Tile Fixer</p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/doctor-consultation.png" />
                <div className="img_box_txt">
                  <p>Consultant</p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/insecticide.png" />
                <div className="img_box_txt">
                  <p>Pest Control</p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/locksmith.png" />
                <div className="img_box_txt">
                  <p>Lock Master</p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/technician.png" />
                <div className="img_box_txt">
                  <p>Mechanic</p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/cctv-camera.png" />
                <div className="img_box_txt">
                  <p>CCTV</p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/welder.png" />
                <div className="img_box_txt">
                  <p>Welder</p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
        {/* //// nxt///// */}
        <Row>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/cleaning.png" />
                <div className="img_box_txt">
                  <p>Cleaning</p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/air-conditioner.png" />
                <div className="img_box_txt">
                  <p>Ac Serivce</p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/electrician.png" />
                <div className="img_box_txt">
                  <p>Electrician</p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/plumber.png" />
                <div className="img_box_txt">
                  <p>Plumber</p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/carpenter.png" />
                <div className="img_box_txt">
                  <p>Carpenter</p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/painter.png" />
                <div className="img_box_txt">
                  <p>Painter</p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/programmer.png" />
                <div className="img_box_txt">
                  <p>Web Developer</p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/digital-campaign.png" />
                <div className="img_box_txt">
                  <p>Digital Marketing</p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/sewing.png" />
                <div className="img_box_txt">
                  <p>Tailor</p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/delivery.png" />
                <div className="img_box_txt">
                  <p>Pickup Delivery</p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/workers.png" />
                <div className="img_box_txt">
                  <p>Labour</p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/mechanic')} href="">
              <div className="img_box">
                <img src="./images/repairing.png" />
                <div className="img_box_txt">
                  <p>Home&Office Repairs</p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const Login_form = () => {
  return (
    <>
      <Form.Label className="labl" htmlFor="basic-url">
        Email (required*)
      </Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Enter your Email Address"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Form.Label className="labl" htmlFor="basic-url">
        Password (required*)
      </Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
        <Form.Control
          placeholder="Enter Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <div key={`default-checkbox`} className="mb-3">
        <Form.Check // prettier-ignore
          type="checkbox"
          id={`default-checkbox`}
          label={`Remember Me`}
          className="remember"
        />
      </div>
      <Button className="login_btn" variant="primary">
        LOG IN
      </Button>
    </>
  );
};
