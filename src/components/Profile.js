import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/profile.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faCheck,
  faArrowLeft,
  faLocationDot,
  faCross,
} from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Constant } from "../common/Constants";

import Common, { googleTranslate } from "../common/Common";
import Language_arr from "../common/Lang";
import { ContextApiContext } from "../context/ContextApi";

export default function Profile() {
  const navigate = useNavigate();
  const navigateToPath = (path) => {
    navigate(path);
  };
  const { contextState, updateContextState } = useContext(ContextApiContext);
  const lang = contextState.language.prefix;
  const [getProfile, SetProfile] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const max_length = 13;
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [showImageUploadSuccessModal, setShowImageUploadSuccessModal] =
    useState(false);
  const [imageUploadSuccessMessage, setImageUploadSuccessMessage] =
    useState("");

  const [showModal, setShowModal] = useState(false);

  const get_string_lable = (str_n) => {
    console.log("str", str_n);
    const str = Language_arr[str_n + lang];
    return str.length < max_length
      ? str
      : str.substring(0, max_length) + "....";
  };
  //
  useEffect(() => {
    // Function to fetch categories from the API
    const get_proflie = async () => {
      try {
        let access_token = contextState.user.access_token;
        let user_id = contextState.user.id;
        console.log("user_id", user_id);
        console.log("acces_token", access_token);
        const headers = {
          Accept: "application/json",
          Authorization: access_token,
          "Authorization-secure": access_token,
          "client-id": "reelspro-app-mobile",
        };
        console.log("headers", headers);
        const response = await fetch(`${Constant.get_profile}/${user_id}`, {
          method: "GET",
          headers: headers,
        });
        const data = await response.json();
        console.log("get_proflie", data);
        SetProfile(data.response);
        setFirstName(data.response.name);
        setLastName(data.response.last_name);
        setEmail(data.response.email);
        setPhoneNo(data.response.phone_no);
        setImagePreview(data.response.image);
      } catch (error) {
        console.error("Error fetching get_proflie:", error);
      }
    };

    get_proflie();
  }, []);
  useEffect(() => {
    if (isProfileUpdated) {
      setShowModal(true); // Show the modal again
      setIsProfileUpdated(false); // Reset profile update status
    }
  }, [isProfileUpdated]);

  const handleProfileUpdate = async () => {
    try {
      const access_token = contextState.user.access_token;
      const user_id = contextState.user.id;
      const headers = {
        Accept: "application/json",
        Authorization: access_token,
        "Authorization-secure": access_token,
        "client-id": "reelspro-app-mobile",
        "Content-Type": "application/json", // Set the content type
      };

      const body = JSON.stringify({
        name: firstName,
        last_name: lastName,
        email: email,
        phone_no: phoneNo,
        // ... other fields
      });

      const response = await fetch(
        `${Constant.user_update_profile}/${user_id}`,
        {
          method: "POST", // Use the appropriate HTTP method (PUT for update)
          headers: headers,
          body: body,
        }
      );

      const data = await response.json();
      console.log("updating_profile", data);
      if (data.status == true) {
        setIsProfileUpdated(true); // Set profile updated status
        setShowModal(true); // Open the modal
      } else {
        // Handle unsuccessful response
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleImageUploadClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = handleImageSelect;
    fileInput.click();
  };
  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
      console.log('helooo');
    
        uploadImage();
      
   
    }
  };
  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", selectedImage);

      const access_token = contextState.user.access_token;
      const user_id = contextState.user.id;
      const headers = {
        Accept: "application/json",
        Authorization: access_token,
        "Authorization-secure": access_token,
        "client-id": "reelspro-app-mobile",
      };

      const response = await fetch(`${Constant.upload_image}/${user_id}`, {
        method: "POST", // Use the appropriate HTTP method
        headers: headers,
        body: formData,
      });

     
        
        const responseData = await response.json();
        console.log('abcc',responseData)

      

        if (responseData.status === true) {
          setImageUploadSuccessMessage("Image uploaded successfully."); // Set the success message
          setShowImageUploadSuccessModal(true); // Open the success modal
          setSelectedIcon(faCheck); // Open the success modal
          // setImagePreview(responseData.response.image);
        }
      else {
        setImageUploadSuccessMessage("Sorry ..Image not uploaded ."); // Set the success message
        setShowImageUploadSuccessModal(true); // Open the success modal
        setSelectedIcon(faCross); // Open the success modal
      }
    } catch (error) {
      setImageUploadSuccessMessage("Sorry ..Image not uploaded ."); // Set the success message
      setShowImageUploadSuccessModal(true); // Open the success modal
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Button
              className="profile-backbtnsignup"
              onClick={() => navigate(-1)}
            >
              <FontAwesomeIcon icon={faArrowLeft} />{" "}
            </Button>
          </Col>
        </Row>
      </Container>

      <section className="bg_color">
        <div className="language_area">
          <LanguageToggle />
        </div>

        <h3 className="profile_head">
          {/* Profile */}
          {get_string_lable("Profile")}
        </h3>
        <Container fluid>
          <Row>
            <div>
              <div className="pic_area">
                {imagePreview && <img src={imagePreview} alt="Selected" />}
              </div>
            </div>
          </Row>
          <Row>
            {/* <Button </Button> */}
            {/* <Button  className="oki_upload" onClick={uploadImage}>OK</Button> */}
          </Row>
        </Container>
        <Container className="cont_pad">
          <Row>
            <Col>{/* <h3 className="signup_head">SignUp</h3> */}</Col>
            <Col>
              <div className="pic_area">
                <Button
                  className="pic_upload_btn"
                  onClick={handleImageUploadClick}
                >
                  <FontAwesomeIcon icon={faUserPlus} />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <div className="form_cover_profile">
            <Row>
              <Col>
                <div className="form_area">
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>
                        {/* First Name* */}
                        {get_string_lable("First Name*")}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=// "Enter First Name"
                        {get_string_lable("Enter First Name")}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
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
                      <Form.Label>
                        {/* Last Name* */}
                        {get_string_lable("Last Name*")}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=// "Enter Last Name"
                        {get_string_lable("Enter Last Name")}
                        // value={getProfile.last_name ?? 'khan'} readOnly />
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
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
                      <Form.Label>
                        {/* Email* */}
                        {get_string_lable("Email*")}
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        // {get_string_lable("name@example.com")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                      className="mb-3 mob_num"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Mobile Number*</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Mobile No"
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                      />
                    </Form.Group>
                  </Form>
                </div>
              </Col>
            </Row>
            {/* <Row>
                        <Col>
                            <div className="form_area">
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>
                                            Location*

                                        </Form.Label>
                                        <Button onClick={()=>navigateToPath('/map')} className="loc_btn">
                                            My Location
                                         <FontAwesomeIcon className="loc_icon" icon={faLocationDot} /></Button>
                                    </Form.Group>

                                </Form>
                            </div>
                        </Col>
                    </Row> */}
            <Row>
              <Col>
                <div className="form_area">
                  <Form>
                    <Button
                      onClick={handleProfileUpdate}
                      className="submit_btn"
                    >
                      Update
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Profile Updated</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div class="modal-body">
                <div class="icon_tick">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div class="inite_Succ_hed">Success</div>
                <div class="inite_Succ_txt">
                  Your profile has been successfully updated.
                </div>
                <div class="mdl_btn">
                  <button class="btn btn-primary" data-dismiss="modal">
                    OK
                  </button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          <Modal
            show={showImageUploadSuccessModal}
            onHide={() => setShowImageUploadSuccessModal(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div class="modal-body">
                <div class="icon_tick">
                  <FontAwesomeIcon icon={selectedIcon} />
                </div>
                <div class="inite_Succ_hed"></div>
                <div class="inite_Succ_txt">
                {imageUploadSuccessMessage}
              
                </div>
                <div class="mdl_btn">
                  {/* <button class="btn btn-primary" data-dismiss="modal">
                    OK
                  </button> */}
                </div>
              </div></Modal.Body>
          </Modal>
        </Container>
      </section>
    </div>
  );
}

const LanguageToggle = () => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setLanguageValue] = useState("1");

  const { contextState, updateContextState } = useContext(ContextApiContext);

  // const context = useContext(ContextApiContext);
  console.log("ccc", contextState);
  const languageRadios = contextState.avalible_languages;

  const change_language = (lang_id) => {
    // setLanguageValue(lang_id);
    console.log("lang_id", lang_id);
    console.log("contextState", contextState);
    updateContextState(lang_id, "language");
    console.log("eeeeeee");

    // let t =  googleTranslate('How are you','ru');
    // console.log('translation ',t);
  };

  return (
    <>
      <ButtonGroup>
        {languageRadios.map((language, idx) => (
          <ToggleButton
            className="tbtn"
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? "outline-primary" : "outline-primary"}
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
};
