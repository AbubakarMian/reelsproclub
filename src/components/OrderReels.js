import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/orderreels.css";
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
import { useNavigate , useLocation} from "react-router-dom";
import { Player } from "video-react";
import Nav_bar_area from "./NavBar";
import video9 from "../videos/vid9.mp4";
import { ContextApiContext } from "../context/ContextApi";
import { Constant } from '../common/Constants';




export default function OrderReels() {
  const { contextState, updateContextState } = useContext(ContextApiContext);
  const navigate = useNavigate();

  const location = useLocation();
  const params = location.state;
  const order_id = location.state.order_id;
  const [ordersReelslist, setOrdersReelslist] = useState([]);
  const [deleting, setDeleting] = useState(false);
  const [deleted_btn, setdeleted_btn] = useState(false);
  console.log('ordeer_reels',order_id);

  const navigateToPath = (path, params) => {
    navigate(path, params);
  };


  useEffect(() => {
    // Function to fetch categories from the API
    const fetchOrders = async () => {
      try {
        let access_token = contextState.user.access_token;
        let influencer_id = contextState.user.id;
        console.log('influencer_id',influencer_id);
        console.log('acces_token',access_token);
        const headers = {
          Accept: 'application/json',
          Authorization: access_token,
          'Authorization-secure': access_token,
          'client-id': 'reelspro-app-mobile',
        };
        console.log('headers',headers);
        const response = await fetch(`${Constant.get_orders_reels}/${order_id}`, {
          method: 'GET',
          headers: headers,
        });
        const data = await response.json();
        console.log('order_reels_list', data);
        console.log('reels_url', data.response[0].reels_url);
        setOrdersReelslist(data.response);
      } catch (error) {
        console.error('Error fetching reels order:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleDelete = async (reelId) => {
    try {
      setDeleting(true);
      const access_token = contextState.user.access_token;
      const headers = {
        Accept: 'application/json',
        Authorization: access_token,
        'Authorization-secure': access_token,
        'client-id': 'reelspro-app-mobile',
      };
      
      const response = await fetch(`${Constant.delete_reel}/${reelId}`, {
        method: 'DELETE',
        headers: headers,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('order_reels_delete__list', data);
        setdeleted_btn(true);
      } else {
        console.error('Error deleting reel:', response.statusText);
        setdeleted_btn(false);
      }
    } catch (error) {
      console.error('Error deleting reel:', error);
    } 
    finally {
      setDeleting(false);
    }
  };
  
  const deliver_reels = async (order_id) => {
    try {
     
      const access_token = contextState.user.access_token;
      const headers = {
        Accept: 'application/json',
        Authorization: access_token,
        'Authorization-secure': access_token,
        'client-id': 'reelspro-app-mobile',
      };
      console.log('const 11111',order_id);
      
      const response = await fetch(`${Constant.deliver_reels}/${order_id}`, {
        method: 'POST',
        headers: headers,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('deliver_reels', data);
        navigateToPath('/orderlist', 
        {state: 
        {
        order_id: order_id, 
        }
        }
        )
       
      } else {
        console.error('Error deleting reel:', response.statusText);
      
      }
    } catch (error) {
      console.error('Error deleting reel:', error);
    } 
  
  };



  return (
    <section className="">
      <Container fluid className="myreelarea">
        <Row>
          <h2>ORDER REELS</h2>
        </Row>
  
        {ordersReelslist.map((reel, index) => (
          <Row key={index} className="reel_box">
            <Col>
              <div className="img_area">
                <Player
                  muted
                  controls={{ position: "center" }}
                  position={"center"}
                  playsInline={true}
                  src={reel.reels_url} // Use the actual URL from your API response
                  autoPlay={true}
                  isFullscreen="Expand"
                />
              </div>
            </Col>
            <Col className="center_align">
              <div className="all_btn">
                <div className="shar_viewbtn">
                  {/* ... (share and view buttons) */}
                </div>
                <div className="btn_area_myrees">
                  {/* ... (delete button) */}
                  <Button
  className="viewbtn btn-danger"
  onClick={() => handleDelete(reel.reels_id)}
  disabled={deleting}
>
  {deleted_btn ? "Deleted" : "Delete"}
</Button>
                </div>
              </div>
            </Col>
          </Row>
        ))}
  
        <Row>
          <Col>
            <Button className="deliver_btn"   
            onClick={() => deliver_reels(order_id)}
  // onClick={() => navigateToPath('/orderlist', 
  // {state: 
  // {
  // order_id: order_id, 
  // }
  //  }
  //  )}
   >DELIVER</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
  
}
