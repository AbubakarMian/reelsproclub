import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ContextApiContext } from "../context/ContextApi";
import { Constant } from "../common/Constants";
// import "./styles/orderreels.css"; // Import your custom styles
import "./../styles/orderreels.css";


export default function User_reels_list() {
  const { contextState } = useContext(ContextApiContext);
  const [orderreelsuser, setOrderReelsUser] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

  const location = useLocation();
  const order_id = location.state.order_id;

  const convertToLocalUrl = (filePath) => {
    return `http://localhost/${filePath.replace(/\\/g, "/").split("/").slice(3).join("/")}`;
  };

  const openModal = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedVideoUrl("");
    setShowModal(false);
  };

  useEffect(() => {
    const fetchOrderReels = async () => {
      try {
        const access_token = contextState.user.access_token;
        const headers = {
          Accept: "application/json",
          Authorization: access_token,
          "Authorization-secure": access_token,
          "client-id": "reelspro-app-mobile",
        };
        const response = await fetch(
          `${Constant.get_order_reels_user}/${order_id}`,
          {
            method: "GET",
            headers: headers,
          }
        );
        const data = await response.json();

        const reelsWithUrls = data.response.map((reel) => ({
          ...reel,
          reels_url: convertToLocalUrl(reel.reels_url),
        }));

        setOrderReelsUser(reelsWithUrls);
      } catch (error) {
        console.error("Error fetching orderreelsuser:", error);
      }
    };

    fetchOrderReels();
  }, [order_id, contextState.user.access_token]);

  return (
    <section className="user-reels-list">
      <Container fluid className="myreelarea">
        <Row>
          <h2>USER ORDER VIEW REELS</h2>
        </Row>
        {orderreelsuser.map((reel, index) => (
          <Row className="reel-box" key={index+1}>
            <Col>
              <div className="img-area">
                <Button
                  variant="link"
                  onClick={() => openModal(reel.reels_url)}
                  className="view-btn"
                >
                  View
                </Button>
              </div>
            </Col>
          </Row>
        ))}

        <Modal show={showModal} onHide={closeModal} centered>
          <Modal.Body>
            <ReactPlayer
              className="react-player-modal"
              url={selectedVideoUrl}
              controls
              playing={false}
              width="100%"
              height="100%"
            />
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
}
