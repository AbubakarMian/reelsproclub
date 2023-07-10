import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './../styles/signup.css';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus,
        faArrowLeft,
        faLocationDot }
        from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from "react-router-dom";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav_bar_area from './NavBar';

//------ yaha sa 
import Common,{googleTranslate} from '../common/Common';
import Language_arr from "../common/Lang";
import {ContextApiContext} from '../context/ContextApi';
import {useContext} from "react";
//------yaha tk utthalo 
{/* <Nav_bar_area /> */ }



export default function Signup() {
    const navigate = useNavigate();

    const navigateToPath = (path) => {
        navigate(path);
    };


    // yaha sa 
    const context = useContext(ContextApiContext);
    const lang = context.language.prefix;
    const max_length = 13;
    const get_string_lable =(str_n)=>{
        const str = Language_arr[str_n+lang];
        return str.length < max_length?str :
                          str.substring(0,max_length)+'....'
      }
// yaha tk utthalo 


    return (
        <div>
        <Container>
        <Row>
          <Col>
            <Button className="backbtnsignup" onClick={() => navigate(-1)}><FontAwesomeIcon icon={faArrowLeft} /> </Button>
          </Col>
        </Row>
      </Container>
        <section className="bg_clr">
            
            <h3 className="signup_head">
                {/* Sign Up */}
                {get_string_lable("Sign Up")}
                </h3>

            <Container fluid>
                <Row>
                    <div>
                        <div className="pic_area">
                            <Button onClick={()=>navigateToPath('/camera')} className="add_picbtn">
                                <FontAwesomeIcon icon={faUserPlus} />
                            </Button>
                        </div>
                    </div>
                </Row>

            </Container>
            <Container>
                <div className="form_cover_signup">
                    <Row>
                        <Col>
                            <div className="form_area">
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>
                                            {/* First Name* */}
                                            {get_string_lable("First Name*")}
                                            </Form.Label>
                                        <Form.Control type="text" placeholder="Enter First Name" />
                                    </Form.Group>

                                </Form>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="form_area">
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>
                                            {/* Last Name* */}
                                            {get_string_lable("Last Name*")}
                                            </Form.Label>
                                        <Form.Control type="text" placeholder="Enter Last Name" />
                                    </Form.Group>

                                </Form>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="form_area">
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>
                                            {/* Email* */}
                                            {get_string_lable("Email*")}
                                            </Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </Form.Group>

                                </Form>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="form_area">
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>
                                            {/* Password* */}
                                            {get_string_lable("Password*")}
                                            </Form.Label>
                                        <Form.Control type="password" placeholder="Enter Password" />
                                    </Form.Group>

                                </Form>
                            </div>
                        </Col>
                        <Col>
                            <div className="form_area">
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>
                                            {/* Confirm Password* */}
                                            {get_string_lable("Confirm Password*")}
                                            </Form.Label>
                                        <Form.Control type="password" placeholder="ReEnter Password" />
                                    </Form.Group>

                                </Form>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="form_area">
                                <Form.Label>
                                    {/* Categories* */}
                                    {get_string_lable("Categories*")}

                                    </Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>
                                        {/* Select */}
                                        {get_string_lable("Select")}
                                        </option>
                                    <option value="1">
                                        {/* Category One */}
                                        {get_string_lable("Category One")}

                                    </option>
                                    <option value="2">
                                        {/* Category Two */}
                                        {get_string_lable("Category Two")}

                                    </option>
                                    <option value="3">
                                        {/* Category Three */}
                                        {get_string_lable("Category Three")}

                                    </option>
                                </Form.Select>
                            </div>
                        </Col>
                        <Col>
                            <div className="form_area">
                                <Form.Label>
                                    {/* Skills* */}
                                    {get_string_lable("Skills*")}
                                    </Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>
                                        {/* Select */}
                                        {get_string_lable("Select")}
                                        </option>
                                    <option value="1">
                                        {/* Skill One */}
                                        {get_string_lable("Skill One")}
                                        </option>
                                    <option value="2">
                                        {/* Skill Two */}
                                        {get_string_lable("")}
                                        </option>
                                    <option value="3">
                                        {/* Skill Three */}
                                        {get_string_lable("Skill Three")}
                                        </option>
                                </Form.Select>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="form_area">
                                <Form>
                                    <Form.Group className="mb-3 mob_num" controlId="exampleForm.ControlInput1">
                                        <Form.Label>
                                            {/* Mobile Number* */}
                                            {get_string_lable("Mobile Number*")}


                                        </Form.Label>
                                        <Form.Control type="number" placeholder="Enter Mobile No" />
                                    </Form.Group>

                                </Form>
                            </div>
                        </Col>
                    </Row><Row>
                        <Col>
                            <div className="form_area">
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>
                                            {/* Email address* */}
                                            {get_string_lable("Email address*")}


                                        </Form.Label>
                                        <Button onClick={()=>navigateToPath('/map')} className="loc_btn">
                                            {/* My Location */}
                                            {get_string_lable("My Location")}

                                         <FontAwesomeIcon className="loc_icon" icon={faLocationDot} /></Button>
                                    </Form.Group>

                                </Form>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="form_area">
                                <Form>
                                    <Button onClick={()=>navigateToPath('/search')}className="sub_btn">
                                        {/* Submit */}
                                        {get_string_lable("Submit")}

                                    </Button>

                                </Form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
        </div>

    );
}