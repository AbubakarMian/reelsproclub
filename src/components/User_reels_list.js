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




export default function User_reels_list() {
  const { contextState, updateContextState } = useContext(ContextApiContext);
  const navigate = useNavigate();

  const location = useLocation();
  const params = location.state;
  const order_id = location.state.order_id;
  const user_influencer_id = location.state.user_influencer_id;
  const [orderreelsuser, setOrderReelsUser] = useState([]);
  const [deleting, setDeleting] = useState(false);
  const [deleted_btn, setdeleted_btn] = useState(false);
  console.log('ordeer_reels',order_id);

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
        const response = await fetch(`${Constant.get_order_reels_user}/${order_id}`, {
          method: 'GET',
          headers: headers,
        });
        const data = await response.json();
        console.log('orderreelsuser', data);
        setOrderReelsUser(data.response);
      } catch (error) {
        console.error('Error fetching orderreelsuser:', error);
      }
    };

    orderreviews();
  }, []);

  return (
    <section className="">
      <Container fluid className="myreelarea">
        <Row>
          <h2>USER ORDER  VIEW REELS</h2>
        </Row>
        {orderreelsuser.map((reel, index) => (
          <Row className="reel_box" key={index}>
            <Col>
              <div className="img_area">
                <Player
                  muted
                  controls={{ position: "center" }}
                  position={"center"}
                  playsInline={true}
                  src={reel.video_url} // Assuming reel object has a 'video_url' property
                  isFullscreen="Expand"
                />
              </div>
            </Col>
            <Col className="center_align">
              <div className="all_btn">
                <div className="shar_viewbtn">
                  {/* <Button className="two_btn share">Share</Button> */}
                  <Button className="two_btn view">View</Button>
                </div>
                <div className="btn_area_myrees">
                  {/* <Button
                    onClick={() => {
                      navigate("/reelvideo");
                    }}
                    className="viewbtn btn-success"
                  >
                    Download
                  </Button>
                  <Button className="viewbtn btn-danger">Delete</Button> */}
                </div>
              </div>
              <div className="accept-reject-buttons">
                <Button className="accept-btn">Accept</Button>
                <Button className="reject-btn">Reject</Button>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
  
}
