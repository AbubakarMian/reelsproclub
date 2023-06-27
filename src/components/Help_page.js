import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './../styles/help_page.css';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import InputGroup from 'react-bootstrap/InputGroup';





export default function home_page_style() {
    return (
        <section className="">

            <Container fluid>

                <Row>
                    <Col>

                        <div className="top_head">
                            What do you need help with ?
                        </div>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <a href="#">

                            <div className="img_box">
                                <img
                                    src="./images/moving-truck.png"
                                />

                            <div>
                            Moving
                            </div>
                            </div>
                            
                        </a>

                    </Col>
                    <Col>
                        <a href="#">

                            <div className="img_box">
                                <img
                                    src="./images/plumber (1).png"
                                />
                                <div>
                            Moving
                            </div>
                            </div>
                        </a>

                    </Col>
                    <Col>
                        <a href="#">

                            <div className="img_box">
                                <img
                                    src="./images/conference.png"
                                />
                                <div>
                            Moving
                            </div>
                            </div>
                        </a>

                    </Col>
                   
                </Row>
                <Row>
                    <Col>
                        <a href="#">

                            <div className="img_box">
                                <img
                                    src="./images/fitness.png"
                                />
                                <div>
                            Moving
                            </div>
                            </div>
                        </a>

                    </Col>
                    <Col>
                        <a href="#">

                            <div className="img_box">
                                <img
                                    src="./images/driver.png"
                                />
                                <div>
                            Moving
                            </div>
                            </div>
                        </a>

                    </Col>
                    <Col>
                        <a href="#">

                            <div className="img_box">
                                <img
                                    src="./images/tile (1).png"
                                />
                                <div>
                            Moving
                            </div>
                            </div>
                        </a>

                    </Col>
                   
                </Row>
                <Row>
                    <Col>
                        <a href="#">

                            <div className="img_box">
                                <img
                                    src="./images/doctor-consultation.png"
                                />
                                <div>
                            Moving
                            </div>
                            </div>
                        </a>

                    </Col>
                    <Col>
                        <a href="#">

                            <div className="img_box">
                                <img
                                    src="./images/insecticide.png"
                                />
                            </div>
                        </a>

                    </Col>
                    <Col>
                        <a href="#">

                            <div className="img_box">
                                <img
                                    src="./images/locksmith.png"
                                />
                            </div>
                        </a>

                    </Col>
                   
                </Row>
                <Row>
                    <Col>
                        <a href="#">

                            <div className="img_box">
                                <img
                                    src="./images/technician.png"
                                />
                            </div>
                        </a>

                    </Col>
                    <Col>
                        <a href="#">

                            <div className="img_box">
                                <img
                                    src="./images/cctv-camera.png"
                                />
                            </div>
                        </a>

                    </Col>
                    <Col>
                        <a href="#">

                            <div className="img_box">
                                <img
                                    src="./images/welder.png"
                                />
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
            <Form.Label className="labl" htmlFor="basic-url">Email (required*)</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                    placeholder="Enter your Email Address"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <Form.Label className="labl" htmlFor="basic-url">Password (required*)</Form.Label>
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
                    type='checkbox'
                    id={`default-checkbox`}
                    label={`Remember Me`}
                    className="remember"
                />
            </div>
            <Button className="login_btn" variant="primary">LOG IN</Button>

        </>
    );
}

