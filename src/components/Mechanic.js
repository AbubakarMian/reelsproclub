import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/help_page.css";
import "./../styles/mechanic.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";

export default function Mechanics_page_export() {
  const navigate = useNavigate();

    const navigateToPath = (path) => {
      navigate(path);
    };
  return (
    <section className="">
      <Container fluid>
        <Row>
          <Col>
            <div className="top_head_mec">Mechanic</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/reels')}href="reels">
              <div className="img_box">
                <img src="./images/prof1.jpg" />

                <div className="img_box_txt">
                  <p>Alex</p>
                  <p>
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/reels')}href="reels">
              <div className="img_box">
                <img src="./images/prof2.jpg" />
                <div className="img_box_txt">
                  <p>Albert</p>
                  <p>
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/reels')}href="reels">
              <div className="img_box">
                <img src="./images/prof3.jpg" />
                <div className="img_box_txt">
                  <p>Jacob</p>
                  <p>
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  </p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/reels')}href="reels">
              <div className="img_box">
                <img src="./images/prof4.jpg" />
                <div className="img_box_txt">
                  <p>Brad</p>
                  <p>
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/reels')}href="reels">
              <div className="img_box">
                <img src="./images/prof5.jpg" />
                <div className="img_box_txt">
                  <p>Smith</p>
                  <p>
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/reels')}href="reels">
              <div className="img_box">
                <img src="./images/prof6.jpg" />
                <div className="img_box_txt">
                  <p>Jhon</p>
                  <p>
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  </p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/reels')}href="reels">
              <div className="img_box">
                <img src="./images/prof7.jpg" />
                <div className="img_box_txt">
                  <p>Michel</p>
                  <p>
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/reels')}href="reels">
              <div className="img_box">
                <img src="./images/prof8.jpg" />
                <div className="img_box_txt">
                  <p>David</p>
                  <p>
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/reels')}href="reels">
              <div className="img_box">
                <img src="./images/prof9.jpg" />
                <div className="img_box_txt">
                  <p>Clark</p>
                  <p>
                  <FontAwesomeIcon icon={faStar} style={{color: "#fbff14",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  </p>
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
