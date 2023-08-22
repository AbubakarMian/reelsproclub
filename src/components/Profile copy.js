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
import { useState,useEffect } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from "react-router-dom";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Constant } from '../common/Constants';

import Common,{googleTranslate} from '../common/Common';
import Language_arr from "../common/Lang";
import {ContextApiContext} from '../context/ContextApi';





export default function Profile() {


    const navigate = useNavigate();
    const navigateToPath = (path) => {
        navigate(path);
    };
    const { contextState, updateContextState } = useContext(ContextApiContext);
    const lang = contextState.language.prefix;
    const max_length = 13;
    const get_string_lable =(str_n)=>{
        console.log('str',str_n);
        const str = Language_arr[str_n+lang];
        return str.length < max_length?str :
                          str.substring(0,max_length)+'....'
    }
    const [getProfile,SetProfile] = useState([]);
    // const [orderslist, setOrderslist] = useState([]);

    //   
    useEffect(() => {
        // Function to fetch categories from the API
        const get_proflie = async () => {
          try {
            let access_token = contextState.user.access_token;
            let user_id = contextState.user.id;
            console.log('user_id',user_id);
            console.log('acces_token',access_token);
            const headers = {
              Accept: 'application/json',
              Authorization: access_token,
              'Authorization-secure': access_token,
              'client-id': 'reelspro-app-mobile',
            };
            console.log('headers',headers);
            const response = await fetch(`${Constant.get_profile}/${user_id}`, {
              method: 'GET',
              headers: headers,
            });
            const data = await response.json();
            console.log('get_proflie', data);
            SetProfile(data.response);
          } catch (error) {
            console.error('Error fetching get_proflie:', error);
          }
        };
    
        get_proflie();
      }, []);






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

            
            <h3 className="profile_head">
                {/* Profile */}
                {get_string_lable("Profile")}
                </h3>
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
                                        <Form.Label>
                                            {/* First Name* */}
                                            {get_string_lable("First Name*")}

                                        </Form.Label>
                                        <Form.Control type="text" placeholder=
                                        // "Enter First Name"
                                        {get_string_lable("Enter First Name")}
                                         value={getProfile.name} readOnly/>
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
                                        <Form.Control type="text" placeholder=
                                        // "Enter Last Name"
                                        {get_string_lable("Enter Last Name")}
                                        value={getProfile.last_name ?? 'khan'} readOnly />
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
                                        <Form.Control type="email" placeholder=
                                        "name@example.com"
                                        // {get_string_lable("name@example.com")}
                                        value={getProfile.email} readOnly />
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
                                        <Form.Label>
                                            {/* Category* */}
                                            {get_string_lable("Category*")}

                                        </Form.Label>
                                        <Form.Control type="text" placeholder=
                                        "name@example.com"
                                        // {get_string_lable("name@example.com")}
                                         value={'Category One'} readOnly />
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
                                        <Form.Label>
                                            {/* Skill* */}
                                            {get_string_lable("Skill*")}

                                        </Form.Label>
                                        <Form.Control type="text" placeholder=
                                        "name@example.com"
                                        // {get_string_lable("name@example.com")}
                                         value={'Skill One'} readOnly />
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
                                        <Form.Label>
                                            Mobile Number*
                                            {/* {get_string_lable("Mobile Number")} */}

                                        </Form.Label>
                                        <Form.Control type="text" placeholder=
                                        "Enter Mobile No"
                                        // {get_string_lable("Enter Mobile No")}
                                        value={getProfile.phone_no} readOnly />
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
                                            Location*
                                            {/* {get_string_lable("Location")} */}

                                        </Form.Label>
                                        <Button onClick={()=>navigateToPath('/map')} className="loc_btn">
                                            My Location
                                            {/* {get_string_lable("My Location")} */}
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
                                    <Button onClick={()=>navigateToPath('/search')}className="submit_btn">
                                        Delete
                                    {/* {get_string_lable("Delete")}</Button> */}
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


const LanguageToggle = () => {

    const [checked, setChecked] = useState(false);
    const [radioValue, setLanguageValue] = useState('1');

    const { contextState, updateContextState } = useContext(ContextApiContext);

    // const context = useContext(ContextApiContext);
    console.log('ccc',contextState);
    const languageRadios = contextState.avalible_languages;

    const change_language = (lang_id)=>{
        // setLanguageValue(lang_id);
        console.log('lang_id',lang_id);
        console.log('contextState',contextState);
        updateContextState(lang_id,'language');
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
                        checked={contextState.language.id === language.id}
                        onChange={(e) => change_language(e.currentTarget.value)}
                    >
                        {language.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </>
    );
}

