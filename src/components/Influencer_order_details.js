import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/oreder_details.css";
import "./../styles/video-react.css";
import "./../styles/influencer_order_details.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCamera,
  faUpload,
  faPlay,
  faVideoPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate, useLocation } from "react-router-dom";
import { Player } from "video-react";
import Nav_bar_area from "./NavBar";
import video9 from "../videos/vid9.mp4";
import { ContextApiContext } from "../context/ContextApi";
import { Constant } from "../common/Constants";

export default function Influencer_order_details() {
  const navigate = useNavigate();
  const [orderslist, setOrderslist] = useState([]);
  const { contextState, updateContextState } = useContext(ContextApiContext);
  const lang = contextState.language.prefix;
  const location = useLocation();
  const params = location.state;
  const order_id = location.state.order_id;
  const user_name = location.state.name;
  console.log("order_users_id", order_id);

  const navigateToPath = (path, params) => {
    navigate(path, params);
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
    }
  };
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // useEffect(() => {
  //   // Function to fetch categories from the API
  //   const fetchOrders = async () => {
  //     try {
  //       let access_token = contextState.user.access_token;
  //       let influencer_id = contextState.user.id;
  //       console.log('influencer_id',influencer_id);
  //       console.log('acces_token',access_token);
  //       const headers = {
  //         Accept: 'application/json',
  //         Authorization: access_token,
  //         'Authorization-secure': access_token,
  //         'client-id': 'reelspro-app-mobile',
  //       };
  //       console.log('headers',headers);
  //       const response = await fetch(`${Constant.get_orders_list}/${influencer_id}`, {
  //         method: 'GET',
  //         headers: headers,
  //       });
  //       const data = await response.json();
  //       console.log('datainfluencer_id', data);
  //       setOrderslist(data.response);
  //     } catch (error) {
  //       console.error('Error fetching categories:', error);
  //     }
  //   };

  //   fetchOrders();
  // }, []);

  return (
    <section className="">
      <Nav_bar_area contextApi={{ contextState }} />

      <Container fluid className="myreelarea">
        <Row>
          {/* <h2 className="order_hed">ORDERS DETAILS LIST</h2> */}
          <h2 className="order_hed">Reels List </h2>
        </Row>
        <Row className="butoon_reel_list"> 
          <Col>
            <Button onClick={() => navigateToPath("/camera")}>
              <FontAwesomeIcon icon={faCamera} /> Create Reel
            </Button>
          </Col>
          <Col>
            <Button onClick={handleImageUploadClick}>
              <FontAwesomeIcon icon={faUpload} /> Upload Reel
            </Button>
          </Col>
        </Row>
        {/* Mapping through orders and generating order cards */}

        <div className="gre_card_head">
          <div className="gre_card">
            <Row className="">
              <Col className="sasd">
              <div className="prof_img prof_img_inf" onClick={() => {
                  navigate("/reelvideo");
                }}>
                <FontAwesomeIcon icon={faPlay}  className="play_bt"/>
                  <img src="../images/thumbnails/thumb3.jpg" alt="Profile" /> 
                </div>
              </Col>
              <Col className="oreder_btnt_area_inf">
                <div>
                  {/* <h5 className="order_btn_area"> Reels</h5> */}
                  <Button
                      onClick={() =>
                        navigateToPath("/camera", {
                          state: {
                            order_id: order_id,
                            name: user_name,
                          },
                        })
                      }
                    className="order_btn_area"
                  >
                    Comments
                  </Button>
                </div>

                <div>
                  <Button
                    onClick={() =>
                      navigateToPath("/camera", {
                        state: {
                          order_id: order_id,
                          name: user_name,
                        },
                      })
                    }
                    className="order_btn_area btn-success status"
                  >
                    Create Reel
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="gre_card_head">
          <div className="gre_card">
            <Row className="">
            <Col className="sasd">
                <div className="prof_img prof_img_inf" onClick={() => {
                  navigate("/reelvideo");
                }}>
                <FontAwesomeIcon icon={faPlay}  className="play_bt"/>
                  <img src="../images/thumbnails/thumb2.jpg" alt="Profile" />
                </div>
              </Col>
              <Col className="oreder_btnt_area_inf">
                <div>
                  {/* <h5 className="order_btn_area"> Reels</h5> */}
                  <Button
                      onClick={() =>
                        navigateToPath("/camera", {
                          state: {
                            order_id: order_id,
                            name: user_name,
                          },
                        })
                      }
                    className="order_btn_area"
                  >
                    Comments
                  </Button>
                </div>

                <div>
                  <Button
                    onClick={() =>
                      navigateToPath("/camera", {
                        state: {
                          order_id: order_id,
                          name: user_name,
                        },
                      })
                    }
                    className="order_btn_area btn-success status"
                  >
                    Create Reel
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="gre_card_head">
          <div className="gre_card">
            <Row className="">
            <Col className="sasd">
                <div className="prof_img prof_img_inf" onClick={() => {
                  navigate("/reelvideo");
                }}>
                <FontAwesomeIcon icon={faPlay}  className="play_bt"/>
                  <img src="../images/thumbnails/thumb1.jpg" alt="Profile" />
                </div>
              </Col>
              <Col className="oreder_btnt_area_inf">
                <div>
                  {/* <h5 className="order_btn_area"> Reels</h5> */}
                  <Button
                      onClick={() =>
                        navigateToPath("/camera", {
                          state: {
                            order_id: order_id,
                            name: user_name,
                          },
                        })
                      }
                    className="order_btn_area"
                  >
                    Comments
                  </Button>
                </div>

                <div>
                  <Button
                    onClick={() =>
                      navigateToPath("/camera", {
                        state: {
                          order_id: order_id,
                          name: user_name,
                        },
                      })
                    }
                    className="order_btn_area btn-success status"
                  >
                    Create Reel
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
}
