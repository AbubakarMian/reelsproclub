import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/reels.css";
import "./../styles/video-react.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  faThumbsUp,
  faEye,
  faArrowLeft,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate, useLocation } from "react-router-dom";
import { Player } from "video-react";
import { useContext } from "react";
import { ContextApiContext } from "../context/ContextApi";
import { Constant } from "../common/Constants";
import Nav_bar_area from "./NavBar";
import { RWebShare } from "react-web-share";


export default function Reels_page_export() {
  const navigate = useNavigate();
  const { contextState, updateContextState } = useContext(ContextApiContext);
  const [data, setData] = useState([]);
  const location = useLocation();
  const params = location.state;
  const category_id = location.state.category;

  const navigateToPath = (path, params) => {
    navigate(path, params);
  };

  console.log("params category_id", category_id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let access_token = contextState.user.access_token;
        console.log("acces_token", access_token);
        const headers = {
          Accept: "application/json",
          Authorization: access_token,
          "Authorization-secure": access_token,
          "client-id": "reelspro-app-mobile",
        };
        console.log("headers_people", headers);
        const response = await fetch(
          `${Constant.get_category_people}/${category_id}`,
          {
            method: "GET",
            headers: headers,
          }
        );

        const data = await response.json();
        console.log("datadata_people", data);
        setData(data.response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params]);
  return (
    <section className="">
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
      <Container fluid className="reelArea">
        {/* Uncomment the following lines to display multiple reels */}
        {data.map((reel) => (
          <Row key={reel.id} className="reel_box">
            <Col className="img_adj">
              <div className="img_area" onClick={() => navigate("/reelvideo")}>
                <img src={reel.user.imageUrl} alt="Reel Thumbnail" />
              </div>
            </Col>
            <Col>
              <div className="info_area">
                <p>
                  <b>{reel.user.name}</b>
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
                  {/* ({reel.likes} likes) */}
                  128 likes
                </p>
              </div>
              <div className="btn_areaa">
                <Button
                  className="reel_btn"
                  onClick={() => navigate("/viewreels")}
                >
                  <FontAwesomeIcon icon={faEye} />
                  <span className="btn_span"> View</span>
                </Button>
                <RWebShare
          data={{
            text: "Web Share",
            url: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
            title: "GfG",
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <Button className="reel_btn">
            <FontAwesomeIcon icon={faShare} />
            <span className="btn_span_share"> Share</span>
          </Button>
        </RWebShare>
                
                <Button
                  className="reel_btn"
                  onClick={() =>
                    navigateToPath(`/hire`, { state: { user: reel.user.id } })
                  }
                >
                  Hire
                </Button>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
}

const Login_form = () => {
  return (
    <>
      <Form.Label className="labl" htmlFor="basic-url">
        Email (required*)
      </Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Enter your Email Address"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Form.Label className="labl" htmlFor="basic-url">
        Password (required*)
      </Form.Label>
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
          type="checkbox"
          id={`default-checkbox`}
          label={`Remember Me`}
          className="remember"
        />
      </div>
      <Button className="login_btn" variant="primary">
        LOG IN
      </Button>
    </>
  );
};
//7e1c4d
