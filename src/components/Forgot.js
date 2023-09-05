// import React,{useContext} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/login.css";
import "./../styles/forgot.css";

// import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState, useContext, useEffect } from "react";
// import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Alert from "react-bootstrap/Alert";
import Common, { googleTranslate, SendRequest } from "../common/Common";
import Language_arr from "../common/Lang";
import { ContextApiContext } from "../context/ContextApi";
import { Constant } from "../common/Constants";

async function Translate(text) {
  const context = useContext(ContextApiContext);

  let translation = await googleTranslate(text, "ru");
  return translation;
  // console.log('asdsa gg',gg);
}
export default function Forgot() {
  const navigate = useNavigate();

  const navigateToPath = (path) => {
    navigate(path);
  };

  // yaha sa
  const { contextState, updateContextState } = useContext(ContextApiContext);
  const [forget_modal_show, setForgetShow] = useState(false);

  const forgetClose = () => setForgetShow(false);
  const forgetShow = () => setForgetShow(true);

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

  return (
    <section className="bg_img_forget">
      <Container fluid>
        <Row>
          <div>
            <div className="login_logo1">
              <img src="../images/new1.png" />
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
       
          <hr className="line" />
        </Row>
        <Row>
          <div className="new_Acc">
            {/* Create New Account */}
            {Language_arr["Create New Account" + lang]}
          </div>

          <Col xsm={1} md={3}></Col>
          <Col xsm={10} md={6}>
            <div className="signup_area">
              <Button
                onClick={() => navigateToPath("/signup")}
                className="login_btn"
                variant="primary"
              >
                {/* SIGN UP */}
                {/* {Language_arr["SIGN UP"+lang]} */}
                {get_string_lable("SIGN UP")}
              </Button>
            </div>
          </Col>
          <Col xsm={1} md={3}></Col>
          <div className="asdsa"></div>
        </Row>
        <Row>
          <div className="new_Acc">
           
          </div>

          <Col xsm={1} md={3}></Col>
          <Col xsm={10} md={6}>
            <div className="signup_area">
              <Button
                onClick={() => navigateToPath("/login")}
                className="login_btn"
                variant="primary"
              >
                {/* SIGN UP */}
                {/* {Language_arr["SIGN UP"+lang]} */}
                {get_string_lable("LOG IN")}
              </Button>
            </div>
          </Col>
          <Col xsm={1} md={3}></Col>
          <div className="asdsa"></div>
        </Row>
        
      </Container>
    </section>
  );
}

const Login_form = () => {
  const navigate = useNavigate();
  const { contextState, updateContextState } = useContext(ContextApiContext);
  const [email, setforgetEmail] = useState("");
  const [error, setError] = useState(null);
  const [successmsg, setSuccessmsg] = useState(null);
  const lang = contextState.language.prefix;
  const max_length = 13;
  
  useEffect(() => {
    let user = contextState.user;
    const role_id = contextState.user.role_id;

   
    // cs.user.access_token = Constant.basic_token;
  }, []);

  const navigateToPath = (path) => {
    navigate(path);
  };

  const get_userlogin = async (role_id) => {

    const access_token = contextState.user.access_token;
    const user = contextState.user.id;
    console.log('rrrr',role_id);
    
    if (role_id === 2) {
      try {
        const headers = {
          Accept: "application/json",
          Authorization: access_token,
          "Authorization-secure": access_token,
          "client-id": "reelspro-app-mobile",
        };

        const response = await fetch(
          `${Constant.orders_available}/${user}`,
          {
            method: "GET",
            headers: headers,
          }
        );

        const data = await response.json();
        console.log("datadd response", data);

       
      } catch (error) {
        console.error("Error checking available orders:", error);
      }
    } else if (role_id === 3) {
      console.log('rrrr',role_id);
    }

  };

  


  const get_string_lable = (str_n) => {
    
    const str = Language_arr[str_n + lang];
    return str.length < max_length
      ? str
      : str.substring(0, max_length) + "....";
  };
  //
 

  const forget_email_attempt = async () => {
    try {
        
      // Create the formData and append the email and password
      var formData = new FormData();
      formData.append("email", email);

      // Call SendRequest with the necessary parameters
      let cs = contextState;
      cs.user.access_token = Constant.basic_token;
      const res = await SendRequest(cs, "POST", Constant.forget_email, formData);
      if (res.status) {
        // forgetShow();
        setError(null);
        setSuccessmsg('Password reset check email');
      }
      else{
        setError(res.error?.message[0] ?? 'Invalid email');
        // setError("Invalid Email");

      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred while logging in. Please try again.");
    }
  };

  //

  return (
    <>
      {error && (
        <div className="error-message">
          <Alert variant="danger">{error}</Alert>
        </div>
      )}
      {successmsg && (
        <div className="success-message">
          <Alert variant="success">{successmsg}</Alert>
        </div>
      )}
      <Form.Label className="labl" htmlFor="basic-url">
        {/* Email (required*) */}
        {/* {Language_arr["Email (required*)"+lang]} */}
        {get_string_lable("Forget Password")}
      </Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder={get_string_lable("Email")}
          onChange={(e) => setforgetEmail(e.target.value)}
          value={email} // Bind the email state to the input value
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      
      
      <Button
        onClick={() => forget_email_attempt()}
        className="login_btn"
        variant="primary"
      >
        {/* LOG IN */}
        {/* {Language_arr["LOG IN"+lang]} */}
        {get_string_lable("Forgot Password")}
      </Button>
    </>
  );
};

const LanguageToggle = () => {
  // const [radioValue, setLanguageValue] = useState('2');
  // {contextState,updateContextState}
  // const context = useContext(ContextApiContext);
  const { contextState, updateContextState } = useContext(ContextApiContext);
  const languageRadios = contextState.avalible_languages;
  console.log("context 11", contextState);

  const change_language = (lang_id) => {
    // setLanguageValue(lang_id);
    updateContextState(lang_id, "language");
    console.log("lang_id", lang_id);
    console.log("context", contextState);
    // context.updateContext(lang_id,'language');
    console.log("eeeeeee");

    // let t =  googleTranslate('How are you','ru');
    // console.log('translation ',t);
  };

 
};
