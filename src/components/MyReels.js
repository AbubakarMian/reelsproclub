import React,{useContext} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/myreels.css";
import "./../styles/reels.css";
import "./../styles/video-react.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, 
  faCamera,
  faUpload,
  faEye } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import { Player } from "video-react";
import Nav_bar_area from "./NavBar";
import { ContextApiContext } from "../context/ContextApi";


export default function MyReels_page_export() {
  const navigate = useNavigate();
  const { contextState } = useContext(ContextApiContext);
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
    }
  };
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);


  const navigateToPath = (path) => {
    navigate(path);
  };
  return (
    <section className="">
      <Nav_bar_area contextApi={{ contextState }} />

      <Container fluid className="myreelarea">
        {/* <Row>
          <Col>
            <div className="top_head_mec">REELS</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={()=>navigateToPath('/camera')} className="add_reelbtn"><FontAwesomeIcon icon={faCameraRetro} /> +   Add Reel</Button>
          </Col>
        </Row> */}
           <Row className="butoon_reel_list"> 
          <Col>
            <Button onClick={() => navigateToPath("/camera",{order_id:0})}>
              <FontAwesomeIcon icon={faCamera} /> Create Reel
            </Button>
          </Col>
          <Col>
            <Button onClick={handleImageUploadClick}>
              <FontAwesomeIcon icon={faUpload} /> Upload Reel
            </Button>
          </Col>
        </Row>
        <Row className="reel_box">
          <Col>
            <div className="img_area">
              <Player
                muted
                controls={{ position: "center" }}
                position={"center"}
                playsInline={false}
                //   poster="./images/poster.jpg"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                autoPlay={false}
                isFullscreen="Expand"
              />
            </div>
          </Col>
          <Col>
            <div className="info_area_myreels">
              <div className="likes_area">
                <p>
                  <FontAwesomeIcon icon={faEye} className="like-eye" />
                  (129)
                  <FontAwesomeIcon className="like-thum" icon={faThumbsUp} />
                  (112 ){" "}
                </p>
              </div>
              <div className="btn_area_myrees">
                <Button
                  onClick={() => {
                    navigate("/reelvideo");
                  }}
                  className="viewbtn"
                >
                  View
                </Button>
                <Button className="viewbtn btn-danger">Delete</Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="reel_box">
          <Col>
            <div className="img_area">
              <Player
                muted
                controls={{ position: "center" }}
                position={"center"}
                playsInline={false}
                //   poster="./images/poster.jpg"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                autoPlay={false}
                isFullscreen="Expand"
              />
            </div>
          </Col>
          <Col>
            <div className="info_area_myreels">
              <div className="likes_area">
                <p>
                  <FontAwesomeIcon icon={faEye} className="like-eye" />
                  (129)
                  <FontAwesomeIcon className="like-thum" icon={faThumbsUp} />
                  (112 ){" "}
                </p>
              </div>
              <div>
                <div className="btn_area_myrees">
                  <Button
                    onClick={() => {
                      navigate("/reelvideo");
                    }}
                    className="viewbtn"
                  >
                    View
                  </Button>
                  <Button className="viewbtn btn-danger">Delete</Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="reel_box">
          <Col>
            <div className="img_area">
              <Player
                muted
                controls={{ position: "center" }}
                position={"center"}
                playsInline={false}
                //   poster="./images/poster.jpg"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                autoPlay={false}
                isFullscreen="Expand"
              />
            </div>
          </Col>
          <Col>
            <div className="info_area_myreels">
              <div className="likes_area">
                <p>
                  <FontAwesomeIcon icon={faEye} className="like-eye" />
                  (129)
                  <FontAwesomeIcon className="like-thum" icon={faThumbsUp} />
                  (112 ){" "}
                </p>
              </div>
              <div className="btn_area_myrees">
                <Button
                  onClick={() => {
                    navigate("/reelvideo");
                  }}
                  className="viewbtn"
                >
                  View
                </Button>
                <Button className="viewbtn btn-danger">Delete</Button>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="reel_box">
          <Col>
            <div className="img_area">
              <Player
                muted
                controls={{ position: "center" }}
                position={"center"}
                playsInline={false}
                //   poster="./images/poster.jpg"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                autoPlay={false}
                isFullscreen="Expand"
              />
            </div>
          </Col>
          <Col>
            <div className="info_area_myreels">
              <div className="likes_area">
                <p>
                  <FontAwesomeIcon className="like-eye" icon={faEye} /> (129)
                  <FontAwesomeIcon
                    className="like-thum"
                    icon={faThumbsUp}
                  />{" "}
                  (112 ){" "}
                </p>
              </div>
              <div className="btn_area_myrees">
                <Button
                  onClick={() => {
                    navigate("/reelvideo");
                  }}
                  className="viewbtn"
                >
                  View
                </Button>
                <Button className="viewbtn btn-danger">Delete</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
