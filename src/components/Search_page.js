import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './../styles/search_page.css';
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
import { useNavigate } from "react-router-dom";
import Nav_bar_area from './NavBar';
//------
import {ContextApiContext} from '../context/ContextApi';
import {useContext} from "react";
import Common,{googleTranslate} from '../common/Common';
import Language_arr from "../common/Lang";
//------






export default function Search_Page() {
    const navigate = useNavigate();

    const navigateToPath = (path) => {
      navigate(path);
    };
    //-------
    const context = useContext(ContextApiContext);
    console.log('sear lang',context);
    const lang = context.language.prefix;
    console.log('aaaa',"LOG IN"+lang);
    console.log('aaaa a ',Language_arr["LOG IN"+lang]);
    //-------
    return (
        <section className="bg_body_color">
            <Nav_bar_area />

            <Container fluid>

                <Row>
                    <div className="login_logo"><img
                        src="../images/new1.png"
                    /></div>
                </Row>
                <Row>
                    <Col xsm={1} md={3}></Col>
                    <Col xsm={10} md={6}>
                        <div className="ques">
                            {/* What are you looking for ? */}
                            {Language_arr[" What are you looking for ?"+lang]}
                        </div>
                        <div className="ques_bar">
                            <InputGroup size="lg">
                                <InputGroup.Text id="inputGroup-sizing-lg"><FontAwesomeIcon icon={faMagnifyingGlass} /></InputGroup.Text>
                                <Form.Control
                                    aria-label="Large"
                                    aria-describedby="inputGroup-sizing-sm"
                                />
                            <Button  onClick={()=>navigateToPath('/categories')}  className="" variant="primary">GO</Button>

                            </InputGroup>

                        </div>

                    </Col>
                    <Col xsm={1} md={3}></Col>

                </Row>
                <Row>
                    <Col xsm={1} md={3}></Col>
                    <Col xsm={10} md={6}>
                        <div className="seemore">
                            <a href="#">See more <FontAwesomeIcon icon={faArrowRight} /></a>
                        </div>
                        

                    </Col>
                    <Col xsm={1} md={3}></Col>

                </Row>
                <Row>
                <Col xsm><div className="serch_big_img"> </div></Col>

                
                    
                   
                </Row>


            </Container>
        </section>

    );
}


