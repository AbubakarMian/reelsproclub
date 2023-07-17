import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/hire.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowLeft,
  faThumbsUp,
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
import { ContextApiContext } from "../context/ContextApi";

{
  /* <Nav_bar_area /> */
}

export default function Profile() {
  const navigate = useNavigate();

  const navigateToPath = (path) => {
    navigate(path);
  };
  return (
    <div>
      <Container fluid>
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
      <section className="bg_color_hire">
        {/* <h3 className="hire_head">Robert</h3> */}
        <Container fluid>
          <Row>
            <Col className="hire_column">
              <div className="hire_pic_area">
                <img src="../images/prof9.jpg" />
              </div>
            </Col>
          </Row>
          <Row>
            <div className="hire_info_area">
              <p>
                <h3 className="hire_head">Robert</h3>
              </p>
              <p>
                <FontAwesomeIcon icon={faStar} style={{ color: "#fb9d23" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#fb9d23" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#fb9d23" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#fb9d23" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#bbaeae" }} />
              </p>
              <p>
                <FontAwesomeIcon className="like" icon={faThumbsUp} />
                (112 likes)
              </p>
            </div>
          </Row>
          <Row>
            <Col>
            <div className="flexing">
              <div className="form_cover_profile_hire dual">
                <p>
                  I am flexible, reliable and possess excellent time keeping
                  skills. I am an enthusiastic, self-motivated, reliable,
                  responsible and hard working person. I am a mature team worker
                  and adaptable to all challenging situations. I am able to work
                  well both in a team environment as well as using own
                  initiative.
                </p>
              </div>
           
              <div className="form_cover_profile_hire">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon3">
                    Rate Per Reel
                  </InputGroup.Text>
                  <Form.Control
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    value={"$20"}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon3">
                    Number Of Reels
                  </InputGroup.Text>
                  <Form.Control
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    value={10}
                  />
                </InputGroup>
                <Form>
                  <Form.Group
                    className="mb-3 text_cent"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Comments</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
              </div>
              </div>
            </Col>
          </Row>
          <Button className="hire_btn">Hire</Button>
        </Container>
      </section>
    </div>
  );
}

const LanguageToggle = () => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setLanguageValue] = useState("1");

  const context = useContext(ContextApiContext);
  console.log("ccc", context);
  const languageRadios = context.avalible_languages;

  const change_language = (lang_id) => {
    setLanguageValue(lang_id);
    console.log("lang_id", lang_id);
    console.log("context", context);
    context.updateContext(lang_id, "language");
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
            checked={radioValue === language.id}
            onChange={(e) => change_language(e.currentTarget.value)}
          >
            {language.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
};
