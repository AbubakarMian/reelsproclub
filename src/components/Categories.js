import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/categories.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate  } from "react-router-dom";
import Nav_bar_area from './NavBar';
//------
import {ContextApiContext} from '../context/ContextApi';

import {useContext} from "react";
import Common,{googleTranslate} from '../common/Common';
import Language_arr from "../common/Lang";
//------

function Categories() {
  const max_length = 13;
  const navigate = useNavigate();

  const get_string_lable =(str_n)=>{
    const str = Language_arr[str_n+lang];
    return str.length < max_length?str :
                      str.substring(0,max_length)+'....'
  }

    const navigateToPath = (path) => {
      navigate(path);
    };
     //-------
     const context = useContext(ContextApiContext);
     const lang = context.language.prefix;
     console.log('aaaa',"LOG IN"+lang);
     console.log('aaaa a ',Language_arr["LOG IN"+lang]);
     //-------
  return (
    <section className="">
      <Nav_bar_area />

      <Container fluid>
        <Row>
          <Col >
            <div className="top_head">
              {/* What do you need help with ? */}
              {/* {Language_arr["What do you need help with ?"+lang]} */}
              {get_string_lable("What do you need help with ?")}
              </div>
          </Col>
        </Row>
        <Row>
          <Col className="colCat">
            {/* <a className="link_dec"  onClick={()=>navigate(-1)} > */}
            {/* <a className="link_dec"  > */}
              {/* <div className=" "  onClick={()=>navigate(-1)}> */}
              <a className="link_dec">
              <div className=" "  onClick={()=>navigateToPath('/people')}>
                <img class="img-fluid" src="./images/moving-truck.png" />

                <div className="img_box_txt">
                  <p>
                    {get_string_lable("Moving")}
                    {/* {Language_arr["Moving"+lang]} */}

                    </p>
                </div>
              </div>
            </a>
          </Col>
          <Col className="colCat">
            <a className="link_dec" >
              <div className=" "  onClick={()=>navigateToPath('/people')}>
                <img class="img-fluid" src="./images/plumber (1).png" />
                <div className="img_box_txt">
                  <p>
                    {/* Handyman */}
                    {Language_arr["Handyman"+lang]}
                    
                    </p>
                </div>
              </div>
            </a>
          </Col>
          <Col className="colCat">
            <a className="link_dec" onClick={()=>navigateToPath('/people')} >
              <div className=" ">
                <img class="img-fluid" src="./images/conference.png" />
                <div className="img_box_txt">
                  <p>
                    {/* Event Planner */}
                    {Language_arr["Event Planner"+lang]}

                    
                    </p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="colCat">
            <a className="link_dec" onClick={()=>navigateToPath('/people')} >
              <div className=" ">
                <img class="img-fluid" src="./images/fitness.png" />
                <div className="img_box_txt">
                  <p>
                    {/* Fitness Trainer */}
                    {Language_arr["Fitness Trainer"+lang]}
                    
                    </p>
                </div>
              </div>
            </a>
          </Col>
          <Col className="colCat">
            <a className="link_dec" onClick={()=>navigateToPath('/people')} >
              <div className=" ">
                <img class="img-fluid" src="./images/driver.png" />
                <div className="img_box_txt">
                  <p>
                    {/* Drivers & Cab */}
                    {Language_arr["Drivers & Cab"+lang]}
                    </p>
                </div>
              </div>
            </a>
          </Col>
          <Col className="colCat">
            <a className="link_dec" onClick={()=>navigateToPath('/people')} >
              <div className=" ">
                <img class="img-fluid" src="./images/tile (1).png" />
                <div className="img_box_txt">
                  <p>
                    {/* Tile Fixer */}
                    {Language_arr["Tile Fixer"+lang]}


                  </p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="colCat">
            <a className="link_dec" onClick={()=>navigateToPath('/people')} >
              <div className=" ">
                <img class="img-fluid" src="./images/doctor-consultation.png" />
                <div className="img_box_txt">
                  <p>
                    {/* Consultant */}
                    {Language_arr["Consultant"+lang]}
                    </p>
                </div>
              </div>
            </a>
          </Col>
          <Col className="colCat">
            <a className="link_dec" onClick={()=>navigateToPath('/people')} >
              <div className=" ">
                <img class="img-fluid" src="./images/insecticide.png" />
                <div className="img_box_txt">
                  <p>
                    {/* Pest Control */}
                    {Language_arr["Pest Control"+lang]}
                    </p>
                </div>
              </div>
            </a>
          </Col>
          <Col className="colCat">
            <a className="link_dec" onClick={()=>navigateToPath('/people')} >
              <div className=" ">
                <img class="img-fluid" src="./images/locksmith.png" />
                <div className="img_box_txt">
                  <p>
                    {/* Lock Master */}
                    {Language_arr["Lock Master"+lang]}
                    </p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="colCat">
            <a className="link_dec" onClick={()=>navigateToPath('/people')} >
              <div className=" ">
                <img class="img-fluid" src="./images/technician.png" />
                <div className="img_box_txt">
                  <p>
                    {/* people */}
                    {Language_arr["people"+lang]}
                    </p>
                </div>
              </div>
            </a>
          </Col>
          <Col className="colCat">
            <a className="link_dec" onClick={()=>navigateToPath('/people')} >
              <div className=" ">
                <img class="img-fluid" src="./images/cctv-camera.png" />
                <div className="img_box_txt">
                  <p>
                    {/* CCTV */}
                    {Language_arr["CCTV"+lang]}
                    </p>
                </div>
              </div>
            </a>
          </Col>
          <Col className="colCat">
            <a className="link_dec" onClick={()=>navigateToPath('/people')} >
              <div className=" ">
                <img class="img-fluid" src="./images/welder.png" />
                <div className="img_box_txt">
                  <p>
                    {/* Welder */}
                    {Language_arr["Welder"+lang]}
                    </p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
        {/* //// nxt///// */}
        <Row>
          <Col className="colCat">
            <a className="link_dec" onClick={()=>navigateToPath('/people')} >
              <div className=" ">
                <img  class="img-fluid" src="./images/cleaning.png" />
                <div className="img_box_txt">
                  <p>
                    {/* Cleaning */}
                    {Language_arr["Cleaning"+lang]}
                    </p>
                </div>
              </div>
            </a>
          </Col>
          <Col className="colCat">
            <a className="link_dec" onClick={()=>navigateToPath('/people')} >
              <div className=" ">
                <img class="img-fluid" src="./images/air-conditioner.png" />
                <div className="img_box_txt">
                  <p>
                    {/* Ac Serivce */}
                    {
                      get_string_lable("Ac Serivce")
                    }
                    
                    </p>
                </div>
              </div>
            </a>
          </Col>
          <Col className="colCat">
            <a className="link_dec" onClick={()=>navigateToPath('/people')} >
              <div className=" ">
                <img class="img-fluid" src="./images/electrician.png" />
                <div className="img_box_txt">
                  <p>
                    {/* Electrician */}
                    {Language_arr["Electrician"+lang]}
                    </p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="colCat">
            <a className="link_dec" onClick={()=>navigateToPath('/people')} >
              <div className=" ">
                <img class="img-fluid" src="./images/plumber.png" />
                <div className="img_box_txt">
                  <p>
                    {/* Plumber */}
                    {Language_arr["Plumber"+lang]}

                  </p>
                </div>
              </div>
            </a>
          </Col>
          <Col className="colCat">
            <a className="link_dec" onClick={()=>navigateToPath('/people')} >
              <div className=" ">
                <img class="img-fluid" src="./images/carpenter.png" />
                <div className="img_box_txt">
                  <p>
                    {/* Carpenter */}
                    {Language_arr["Carpenter"+lang]}
                    </p>
                </div>
              </div>
            </a>
          </Col>
          <Col className="colCat">
            <a className="link_dec" onClick={()=>navigateToPath('/people')} >
              <div className=" ">
                <img class="img-fluid" src="./images/painter.png" />
                <div className="img_box_txt">
                  <p>
                    {/* Painter */}
                    {Language_arr["Painter"+lang]}
                    </p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="colCat">
            <a className="link_dec" onClick={()=>navigateToPath('/people')} >
              <div className=" ">
                <img class="img-fluid" src="./images/programmer.png" />
                <div className="img_box_txt">
                  <p>
                    {/* Web Developer */}
                    {Language_arr["Web Developer"+lang]}
                    </p>
                </div>
              </div>
            </a>
          </Col>
          <Col className="colCat">
            <a className="link_dec" onClick={()=>navigateToPath('/people')} >
              <div className=" ">
                <img class="img-fluid" src="./images/digital-campaign.png" />
                <div className="img_box_txt">
                  <p>
                    {/* Digital Marketing */}
                    {Language_arr["Digital Marketing"+lang]}
                    </p>
                </div>
              </div>
            </a>
          </Col>
          <Col className="colCat">
            <a className="link_dec" onClick={()=>navigateToPath('/people')} >
              <div className=" ">
                <img class="img-fluid" src="./images/sewing.png" />
                <div className="img_box_txt">
                  <p>
                    {/* Tailor */}
                    {Language_arr["Tailor"+lang]}
                    </p>
                </div>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="colCat">
            <a className="link_dec" onClick={()=>navigateToPath('/people')} >
              <div className=" ">
                <img class="img-fluid" src="./images/delivery.png" />
                <div className="img_box_txt">
                  <p>
                    {/* Pickup Delivery */}
                    {Language_arr["Pickup Delivery"+lang]}
                    </p>
                </div>
              </div>
            </a>
          </Col>
          <Col className="colCat">
            <a className="link_dec" onClick={()=>navigateToPath('/people')} >
              <div className=" ">
                <img class="img-fluid"  src="./images/workers.png" />
                <div className="img_box_txt">
                  <p>
                    {/* Labour */}
                    {Language_arr["Labour"+lang]}
                    </p>
                </div>
              </div>
            </a>
          </Col>
          <Col className="colCat">
            <a className="link_dec" onClick={()=>navigateToPath('/people')} >
              <div className=" ">
                <img class="img-fluid" src="./images/repairing.png" />
                <div className="img_box_txt">
                  <p>
                    {/* Home&Office Repairs */}
                    {Language_arr["Home&Office Repairs"+lang]}
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

export default Categories;
