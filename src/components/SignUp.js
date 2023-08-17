import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/signup.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faArrowLeft,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Dropdown from "react-bootstrap/Dropdown";
import Nav_bar_area from "./NavBar";
// import ContextApiContext from '../context/ContextApiContext';
import Common, { googleTranslate } from "../common/Common";
import Language_arr from "../common/Lang";

import { ContextApiContext } from "../context/ContextApi";
import { useContext } from "react";
import { Constant } from '../common/Constants';

// import Common,{googleTranslate} from '../common/Common';

export default function Signup(props) {

  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');



  const navigate = useNavigate();

  const navigateToPath = (path) => {
    navigate(path);
  };
  const [show, setShow] = useState(false);

  const handleCloseUserSelectType = () => setShow(false);
  const handleShowUserSelectType = () => setShow(true);

  const { contextState, updateContextState } = useContext(ContextApiContext);

  // yaha sa
  // const context = useContext(ContextApiContext);
  const lang = contextState.language.prefix;
  const max_length = 13;
  const get_string_lable = (str_n) => {
    const str = Language_arr[str_n + lang];
    return str.length < max_length
      ? str
      : str.substring(0, max_length) + "....";
  };
  // yaha tk utthalo

  const signupApi= async (role,category)=>{
    try {
      let access_token = contextState.user.access_token;
      console.log('acces_token',access_token);
      // let url = data.response.url;
      const headers = {
        Accept: 'application/json',
        Authorization: access_token,
        'Authorization-secure': access_token,
        'client-id': 'reelspro-app-mobile',
      };
      console.log('headers',headers);
      let formData = new FormData();
      formData.append('name',name);
      formData.append('fullname',name +' '+lastname );
      formData.append('email',email);
      formData.append('password',password);
      formData.append('mobile',mobile);
      formData.append('category',category);
      // formData.append('image',url);
      formData.append('role',role);
      formData.append('lat','127.99');
      formData.append('long','127.99');
      formData.append('location','mylocation');
      const response = await fetch(Constant.signup, {
        method: 'POST',
        headers: headers,
        body:formData
      });

      const data = await response.json();
      console.log('res datadata', data);
      if(data.status){
//second api
      }


      
      // setCategories(data.response);
    } catch (error) {
      console.error('Error fetching :', error);
    }
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Button className="backbtnsignup" onClick={() => navigate(-1)}>
              <FontAwesomeIcon icon={faArrowLeft} />{" "}
            </Button>
          </Col>
        </Row>
      </Container>

      <section className="bg_clr">
        <Container className="cont_pad">
          <Row>
            <Col>
              <h3 className="signup_head">SignUp</h3>
            </Col>
            <Col>
              <div className="pic_area">
                <Button
                  onClick={() => navigateToPath("/camera")}
                  className="add_picbtn"
                >
                  <FontAwesomeIcon icon={faUserPlus} />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container  className="cont_pad">
          <div className="form_cover_signup">
            <Row>
              <Col>
                <div className="form_area">
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>First Name*</Form.Label>
                      <Form.Control type="text" name="" placeholder="First Name" onChange={(e)=>{setName(e.target.value)}} />
                    </Form.Group>
                  </Form>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form_area">
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Last Name*</Form.Label>
                      <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                  </Form>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form_area">
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email*</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </Form.Group>
                  </Form>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form_area">
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Password*</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  </Form>
                </div>
              </Col>
              {/* <Col>
                <div className="form_area">
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Confirm Password*</Form.Label>
                      <Form.Control type="password" placeholder="ReEnter" />
                    </Form.Group>
                  </Form>
                </div>
              </Col> */}
            </Row>
            <Row>
              {/* <Col>
                <div className="form_area">
                  <Form.Label>Categories*</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Select</option>
                    <option value="1">Food</option>
                    <option value="2">Mechanics</option>
                  </Form.Select>
                </div>
              </Col> */}
              {/* <Col>
                <div className="form_area">
                  <Form.Label>Skills*</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Select</option>
                    <option value="1">Chef </option>
                    <option value="2">Waiter</option>
                  </Form.Select>
                </div>
              </Col> */}
            </Row>
            <Row>
              <Col>
                <div className="form_area">
                  <Form>
                    <Form.Group
                      className="mb-3 mob_num"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Mobile Number*</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter Mobile No"
                      />
                    </Form.Group>
                  </Form>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form_area">
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Location*</Form.Label>
                      <Button
                        // onClick={() => navigateToPath("/map")}
                        className="loc_btn"
                      >
                        My Location{" "}
                        <FontAwesomeIcon
                          className="loc_icon"
                          icon={faLocationDot}
                        />
                      </Button>
                    </Form.Group>
                  </Form>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="form_area">
                  <Form>
                    <Button onClick={handleShowUserSelectType} className="sub_btn">
                    {/* <Button    className="sub_btn"> */}
                      Submit
                    </Button>
                  </Form>
                  <div className="modal_plac">
                    <Modal
                      show={show}
                      onHide={handleCloseUserSelectType}
                      {...props}
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Select Type</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <p> What kind of user are you ?</p>
                        <div className="buttons_area">
                          {/* <Button className="modal_btn"> Hire</Button> */}
                          <CreateHireModal signupApi={signupApi} />
                          {/* <Button className="modal_btn"> collaboration</Button> */}
                          <Button
                            className="modal_btn"
                            onClick={() => signupApi('user','')}
                            // onClick={() => navigateToPath("/search")}
                          >
                            {" "}
                            User a
                          </Button>{" "}
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseUserSelectType}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
}

const CreateHireModal = (props) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const [category,setCategory] = useState('');
  // const [mobile, setMobile] = useState('');


  const navigateToPath = (path) => {
    navigate(path);
  };
  return (
    <>
      <Button className="modal_btn" onClick={() => setShow(true)}>
        {" "}
        Influencer
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Select{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <div className="form_area">
                <Form.Label>Categories*</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(e)=>{setCategory(e.target.value)}}>
                  <option>Select</option>
                  <option value="1">Category One</option>
                  <option value="2">Category Two</option>
                  <option value="3">Category Three</option>
                </Form.Select>
              </div>
            </Col>
          </Row>
          {/* <Row>
            <Col>
              <div className="form_area">
                <Form.Label>Skills*</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select</option>
                  <option value="1">Skill One</option>
                  <option value="2">Skill Two</option>
                  <option value="3">Skill Three</option>
                </Form.Select>
              </div>
            </Col>
          </Row> */}
          <Row>
            <Col>
              <Button
                className="modl_submit"
                // onClick={() => navigateToPath("/search")} props.functions.signupApi('influencer')
                onClick={() => props.signupApi('influencer',category)}
              >
                {" "}
                Submit
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};
