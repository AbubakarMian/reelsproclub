import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/categories.css";
import "./../styles/mechanic.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate,useLocation  } from "react-router-dom";
import Nav_bar_area from './NavBar';
import {useContext} from "react";
import {ContextApiContext} from '../context/ContextApi';


{/* <Nav_bar_area /> */}


// //------ yaha sa 
// import Common,{googleTranslate} from '../common/Common';
// import Language_arr from "../common/Lang";
// import {ContextApiContext} from '../context/ContextApi';
// import {useContext} from "react";
// //------yaha tk utthalo 


export default function People_page_export(props) {
  const navigate = useNavigate();
  const { contextState, updateContextState } = useContext(ContextApiContext);


  const location = useLocation();
  const params = location.state;

  console.log('params aaa', params);

    const navigateToPath = (path) => {
      navigate(path);
    };
  return (
    <section className="">
       <Nav_bar_area contextApi={{ contextState }} />

      <Container fluid>
        <Row>
          <Col>
            <div className="top_head_mec">Professionals</div>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <a className="link_dec"href=""> */}
              <div className="img_box"  onClick={()=>navigateToPath('/reels')} >
                <img src="./images/prof1.jpg" />

                <div className="img_box_txt">
                  <p>Alex</p>
                  <p>
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  </p>
                </div>
              </div>
            {/* </a> */}
          </Col>
          <Col>
            {/* <a className="link_dec" onClick={()=>navigateToPath('/reels')}href=""> */}
              <div className="img_box"  onClick={()=>navigateToPath('/reels')} >
                <img src="./images/prof2.jpg" />
                <div className="img_box_txt">
                  <p>Albert</p>
                  <p>
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  </p>
                </div>
              </div>
            {/* </a> */}
          </Col>
           <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/reels')}href="">
              <div className="img_box">
                <img src="./images/prof3.jpg" />
                <div className="img_box_txt">
                  <p>Jacob</p>
                  <p>
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  </p>
                </div>
              </div>
            </a> 
          </Col>
        </Row>
         <Row>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/reels')}href="">
              <div className="img_box">
                <img src="./images/prof4.jpg" />
                <div className="img_box_txt">
                  <p>Brad</p>
                  <p>
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/reels')}href="">
              <div className="img_box">
                <img src="./images/prof5.jpg" />
                <div className="img_box_txt">
                  <p>Smith</p>
                  <p>
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/reels')}href="">
              <div className="img_box">
                <img src="./images/prof6.jpg" />
                <div className="img_box_txt">
                  <p>Jhon</p>
                  <p>
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  </p>
                </div>
              </div>
            </a>
          </Col>
        </Row> 
         <Row>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/reels')}href="">
              <div className="img_box">
                <img src="./images/prof7.jpg" />
                <div className="img_box_txt">
                  <p>Michel</p>
                  <p>
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/reels')}href="">
              <div className="img_box">
                <img src="./images/prof8.jpg" />
                <div className="img_box_txt">
                  <p>David</p>
                  <p>
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col>
            <a className="link_dec" onClick={()=>navigateToPath('/reels')}href="">
              <div className="img_box">
                <img src="./images/prof9.jpg" />
                <div className="img_box_txt">
                  <p>Clark</p>
                  <p>
                  <FontAwesomeIcon icon={faStar} style={{color: "rgb(251, 157, 35)",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  <FontAwesomeIcon icon={faStar} style={{color: "#bbaeae",}} />
                  </p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
        
      </Container>
    </section>
  );
}

