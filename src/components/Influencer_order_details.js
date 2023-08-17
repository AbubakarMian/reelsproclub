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
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEye } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState,useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate ,useLocation} from "react-router-dom";
import { Player } from "video-react";
import Nav_bar_area from "./NavBar";
import video9 from "../videos/vid9.mp4";
import { ContextApiContext } from "../context/ContextApi";
import { Constant } from '../common/Constants';

export default function Influencer_order_details() {
  const navigate = useNavigate();
  const [orderslist, setOrderslist] = useState([]);
  const { contextState, updateContextState } = useContext(ContextApiContext);
  const lang = contextState.language.prefix;
  const location = useLocation();
  const params = location.state;
  const order_id = location.state.order_id;
  const user_name = location.state.name;
  console.log('order_users_id',order_id);

  const navigateToPath = (path, params) => {
    navigate(path, params);
  };

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
      <Container fluid className="myreelarea">
        <Row>
        {/* <h2 className="order_hed">ORDERS DETAILS LIST</h2> */}
        <h2 className="order_hed">{user_name}  order details list </h2>
       
        </Row>
        {/* Mapping through orders and generating order cards */}
       
          <div className="gre_card_head">
            <div className="gre_card">
              <Row className="">
                <Col>
                  <div className="prof_img">
                
                    <img src="../images/profile.png" alt="Profile" />
                    
                  </div>
                </Col>
                <Col>
                  <div>
                    {/* <h5 className="order_btn_area"> Reels</h5> */}
                    <Button
                      onClick={() => navigateToPath('/camera')}
                      className="order_btn_area"
                    >
                      Comments
                    </Button>
                  </div>
                </Col>
                <Col>
                  <div>
                    
                    <Button  onClick={() => navigateToPath('/camera',  
                    { state: 
                    {
                    order_id: order_id, 
                    name: user_name,
                    }
                   }
                   )}  className="order_btn_area btn-success status">
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