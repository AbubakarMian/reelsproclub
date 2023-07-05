import React,{useContext} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './../styles/login.css';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from "react-router-dom";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ContextApiContext from '../context/ContextApiContext';







export default function LogIn() {
    const navigate = useNavigate();

    const navigateToPath = (path) => {
        navigate(path);
    };
    return (
        <section className="bg_img">

            <Container fluid>
                <div className="language_area"><LanguageToggle /></div>

                <Row>
                    <div>
                        <div className="login_logo1">
                            <img
                            src="../images/new1.png"
                        />
                        </div>
                    </div>
                </Row>
                <Row>
                    <Col xsm={1} md={3}></Col>
                    <Col xsm={10} md={6}>
                        <div className="login_area">
                            <Login_form />
                        </div>
                    </Col>
                    <Col xsm={1} md={3}></Col>

                </Row>
                <Row>
                    <Col xsm={1} md={3}></Col>
                    <Col xsm={10} md={6}>
                        <div className="forget">Forgot Password</div>
                    </Col>
                    <Col xsm={1} md={3}></Col>

                    <hr className="line" />
                </Row>
                <Row>
                    <div className="new_Acc">Create New Account</div>

                    <Col xsm={1} md={3}></Col>
                    <Col xsm={10} md={6}>
                        <div className="signup_area">
                            <Button onClick={() => navigateToPath('/signup')} className="login_btn" variant="primary">
                                SIGN UP</Button>
                        </div>

                    </Col>
                    <Col xsm={1} md={3}></Col>
                    <div className="asdsa"></div>
                </Row>
                <Row>
                    <Col md={1}></Col>
                    <Col md={10}>
                        <div className="skip_area">
                            <Button onClick={() => navigateToPath('/search')} className="skip_btn" variant="primary">Skip Now <FontAwesomeIcon icon={faArrowRight} /></Button>
                        </div>
                    </Col>
                    <Col md={1}></Col>
                    <div className="asdsa"></div>
                </Row>


            </Container>
        </section>

    );
}

const Login_form = () => {
    const navigate = useNavigate();

    const navigateToPath = (path) => {
        navigate(path);
    };
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
            <Button onClick={() => navigateToPath('/search')} className="login_btn" variant="primary">LOG IN</Button>

        </>
    );
}


const LanguageToggle = () => {

    // const [checked, setChecked] = useState(false);
    const [radioValue, setLanguageValue] = useState('1');

    const context = useContext(ContextApiContext);
    const languageRadios = context.avalible_languages;

    const change_language =(lang_id)=>{
        setLanguageValue(lang_id);
        console.log('lang_id',lang_id);
        console.log('context',context);
        context.updateContext(lang_id,'language');
    }
    // [
    //     { name: 'English', value: '1' },
    //     { name: 'Russian', value: '2' },
    // ];

    return (
        <>
            <ButtonGroup>
                {languageRadios.map((language, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={idx % 2 ? 'outline-success' : 'outline-danger'}
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



