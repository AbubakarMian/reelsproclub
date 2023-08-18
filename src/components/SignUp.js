import React,{useEffect} from "react";
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
import Alert from "react-bootstrap/Alert";
import { Constant } from '../common/Constants';

// import Common,{googleTranslate} from '../common/Common';

export default function Signup(props) {

  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone_no, setPhone_no] = useState('');
  // const [rate_per_reel, setRatePerReel] = useState(0);
  // const [category,setCategory] = useState(0);
  const [signupError, setSignupError] = useState(null);


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

  const signupApi= async (role,influencer_obj)=>{

    const {category,rate_per_reel} = influencer_obj;
    try {

      
      // let access_token = contextState.user.access_token;
      let access_token = Constant.basic_token;
      console.log('acces_token',access_token);
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
      formData.append('phone_no',phone_no);
      formData.append('category_id',category);
      formData.append('role',role);
      formData.append('rate_per_reel',rate_per_reel);
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
        navigate('/categories');
      }
      else{
        if(typeof data.error.message[0] !== 'undefined' && data.error.message[0] !== null ){
          setSignupError(data.error.message[0]); // Set the error message
        }

      }
      // setCategories(data.response);
    } catch (error) {
      console.error('Error fetching :', error);
      setSignupError("Error signing up. Please try again."); // Set the error message
      console.error("Error signing up:", error);
    
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
      {signupError && ( // Conditionally render the Alert component if there's an error
          <Alert variant="danger" onClose={() => setSignupError(null)} dismissible>
            {signupError}
          </Alert>
        )}
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
                      <Form.Control onChange={e=>setLastName(e.target.value)} type="text" placeholder="Last Name" />
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
                      onChange={e=>setEmail(e.target.value)}
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
                      <Form.Control onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" />
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
                      className="mb-3 mob_num"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Mobile Number*</Form.Label>
                      <Form.Control
                      onChange={(e)=>setPhone_no(e.target.value)}
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
                          <CreateHireModal signupApi={signupApi} 
                                          //  setCategory={setCategory} 
                                          //  setRatePerReel={setRatePerReel}
                                            />
                          {/* <Button className="modal_btn"> collaboration</Button> */}
                          <Button
                            className="modal_btn"
                            onClick={() => signupApi('user',{})}
                            // onClick={() => navigateToPath("/search")}
                          >
                            {" "}
                            User
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

  useEffect(()=>{
    get_categories();
  },[])



  const [category_list, setCategoryList] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const get_categories = async ()=>{


  
    // const [category,setCategory] = useState('');
    // const [rate_per_reel, setRatePerReel] = useState(0);
    try {

      
      // let access_token = contextState.user.access_token;
      let access_token = Constant.basic_token;
      console.log('acces_token',access_token);
      const headers = {
        Accept: 'application/json',
        Authorization: access_token,
        'Authorization-secure': access_token,
        'client-id': 'reelspro-app-mobile',
      };
      
      const response = await fetch(Constant.get_category, {
        method: 'GET',
        headers: headers
      });

      const data = await response.json();
      console.log('res datadata', data);
      if(data.status){
        console.log('category data',data.response);
        setCategoryList(data.response);
      }
      else{

      }
      // setCategories(data.response);
    } catch (error) {
      console.error('Error fetching :', error);
    }

  }

    const [category,setCategory] = useState('');
    const [rate_per_reel, setRatePerReel] = useState(0);

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
                  {
                    category_list.map((category,index)=>{
                      return (<option key={category.id} value={category.id}>{category.name}</option>)

                    })
                  }
                </Form.Select>
              </div>
            </Col>
          </Row>
          <Row>
              <Col>
                <div className="form_area">
                  <Form>
                    <Form.Group
                      className="mb-3 mob_num"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Rate Per Reel</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Rate Per Reel"
                        onChange={(e)=>setRatePerReel(e.target.value)}
                      />
                    </Form.Group>
                  </Form>
                </div>
              </Col>
            </Row>
          <Row>
            <Col>
              <Button
                className="modl_submit"
                // onClick={() => navigateToPath("/search")} props.functions.signupApi('influencer')
                onClick={() => props.signupApi('influencer',{
                  category,
                  rate_per_reel
                })}
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
