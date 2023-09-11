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
import { useNavigate,useLocation } from "react-router-dom";
import { Player } from "video-react";
import Nav_bar_area from "./NavBar";
import video9 from "../videos/vid9.mp4";
import { ContextApiContext } from "../context/ContextApi";
import { Constant } from '../common/Constants';

export default function OrderDetails() {
  const navigate = useNavigate();
  const [orderreviews, setgetOrderReviews] = useState([]);
  const { contextState, updateContextState } = useContext(ContextApiContext);
  const lang = contextState.language.prefix;
//   const location = useLocation();
//   const params = location.state;
//   const order_id = location.state && location.state.order_id != null ? location.state.order_id : 0;

 
  // if (location.state.order_id === null || location.state.order_id === undefined) {
  //   const order_id = 0;
  //   console.log('const order_idsss',order_id);
  // }
  // else{
  //   const order_id =location.state.order_id;
  //   console.log('const order_idsss',order_id);




  // }

  

  const navigateToPath = (path, params) => {
    navigate(path, params);
  };

  useEffect(() => {
    // Function to fetch categories from the API
    const orderreviews = async () => {
      try {
        let access_token = contextState.user.access_token;
        let user_id = contextState.user.id;
        console.log('user_id',user_id);
        console.log('acces_token',access_token);
        const headers = {
          Accept: 'application/json',
          Authorization: access_token,
          'Authorization-secure': access_token,
          'client-id': 'reelspro-app-mobile',
        };
        console.log('headers',headers);
        const response = await fetch(`${Constant.get_order_reviews}/${user_id}`, {
          method: 'GET',
          headers: headers,
        });
        const data = await response.json();
        console.log('get_order_reviews', data);
        setgetOrderReviews(data.response);
      } catch (error) {
        console.error('Error fetching orderreviews:', error);
      }
    };

    orderreviews();
  }, []);

  return (
    <section className="">
            <Nav_bar_area  contextApi={{contextState}}/>
            <Container fluid className="myreelarea">
        <Row>
          <h2 className="order_hed">USER ORDER</h2>
        </Row>
        {/* Mapping through orders and generating order cards */}
        {orderreviews.map((order, index) => (
          <div className="gre_card_head" key={index}>
            <div className="gre_card">
              <Row className="">
                <Col>
                  <div className="prof_img">
                    <img src="../images/profile.png" alt="Profile" />
                  </div>
                </Col>
                <Col>
                  <div>
                  <h5 className="order_btn_area">{order.number_reels} Reels</h5>
                  <h5 className="order_btn_area">{order.influencer.user.name}</h5>
                  </div>
                </Col>
                <Col>
                  <div>
                   
                    
                     <Button
                      onClick={() => navigateToPath('/user_reels_list', 
                        { state: 
                          {
                          order_id: order.id, 
                          user_influencer_id: order.user_influencer_id 
                        }
                         }
                      )}
                      className="order_btn_area"
                      // disabled={order_id === order.id}
                    >
                    {order.status}
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
  
}
