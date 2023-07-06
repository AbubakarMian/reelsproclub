import React ,{useContext}from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './../styles/profile.css';
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
import {ContextApiContext} from '../context/ContextApi';


{/* <Nav_bar_area /> */ }



export default function Profile() {
    const navigate = useNavigate();

    const navigateToPath = (path) => {
        navigate(path);
    };
    return (
        <div>
       
            <Container>
        <Row>
          <Col>
            <Button className="profile-backbtnsignup" onClick={() => navigate(-1)}><FontAwesomeIcon icon={faArrowLeft} /> </Button>
          </Col>
        </Row>
      </Container>
        <section className="bg_color">
        <div className="language_area"><LanguageToggle /></div>

            
            <h3 className="profile_head">Profile</h3>
            <Container fluid>
                <Row>
                    <div>
                        <div className="pic_area">
                        <img
                            src="../images/profile.png"
                        />
                        </div>
                    </div>
                </Row>

            </Container>
            <Container>
                <div className="form_cover_profile">
                    <Row>
                        <Col>
                            <div className="form_area">
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>First Name*</Form.Label>
                                        <Form.Control type="text" placeholder="Enter First Name" value={'Jhon'} readOnly/>
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
                                        <Form.Label>Last Name*</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Last Name"  value={'Michel'} readOnly />
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
                                        <Form.Label>Email*</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" value={'Jhon@mail.com'} readOnly />
                                    </Form.Group>

                                </Form>
                            </div>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            <div className="form_area">
                                {/* <Form.Label>Categories*</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Select Category</option>
                                    <option value="1">Category One</option>
                                    <option value="2">Category Two</option>
                                    <option value="3">Category Three</option>
                                </Form.Select> */}
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Category*</Form.Label>
                                        <Form.Control type="text" placeholder="name@example.com" value={'Category One'} readOnly />
                                    </Form.Group>

                                </Form>
                            </div>
                        </Col>
                        <Col>
                            <div className="form_area">
                                {/* <Form.Label>Skills*</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Select Skill</option>
                                    <option value="1">Skill One</option>
                                    <option value="2">Skill Two</option>
                                    <option value="3">Skill Three</option>
                                </Form.Select> */}
                                 <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Skill*</Form.Label>
                                        <Form.Control type="text" placeholder="name@example.com" value={'Skill One'} readOnly />
                                    </Form.Group>

                                </Form>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="form_area">
                                <Form>
                                    <Form.Group className="mb-3 mob_num" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Mobile Number*</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Mobile No" value={'+123-456-789'} readOnly />
                                    </Form.Group>

                                </Form>
                            </div>
                        </Col>
                    </Row><Row>
                        <Col>
                            <div className="form_area">
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Location*</Form.Label>
                                        <Button onClick={()=>navigateToPath('/map')} className="loc_btn">My Location <FontAwesomeIcon className="loc_icon" icon={faLocationDot} /></Button>
                                    </Form.Group>

                                </Form>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="form_area">
                                <Form>
                                    <Button onClick={()=>navigateToPath('/search')}className="submit_btn">Delete</Button>

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


const LanguageToggle = () => {

    const [checked, setChecked] = useState(false);
    const [radioValue, setLanguageValue] = useState('1');

    const context = useContext(ContextApiContext);
    console.log('ccc',context);
    const languageRadios = context.avalible_languages;

    const change_language = (lang_id)=>{
        setLanguageValue(lang_id);
        console.log('lang_id',lang_id);
        console.log('context',context);
        context.updateContext(lang_id,'language');
        console.log('eeeeeee');
        
        // let t =  googleTranslate('How are you','ru');
        // console.log('translation ',t);
    }

    return (
        <>
            <ButtonGroup>
                {languageRadios.map((language, idx) => (
                    <ToggleButton
                    className="tbtn"
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={idx % 2 ? 'outline-primary' : 'outline-primary'}
                        name="radio"
                        value={language.id}
                        checked={radioValue === language.id}
                        onChange={(e) => change_language(e.currentTarget.value)}
                    >
                        {language.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </>
    );
}

