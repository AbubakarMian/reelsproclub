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
import { useNavigate } from "react-router-dom";
// import "./styles/orderreels.css"; // Import your custom styles
import "./../styles/orderreels.css";
import Nav_bar_area from "./NavBar";
import VideoThumbnail from 'react-video-thumbnail'; 

export default function User_reels_list() {
  const { contextState } = useContext(ContextApiContext);
  const [orderreelsuser, setOrderReelsUser] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [showAcceptModal, setShowAcceptModal] = useState(false);

  const location = useLocation();
  const order_id = location.state.order_id;

  const convertToLocalUrl = (filePath) => {
    return `http://localhost/${filePath
      .replace(/\\/g, "/")
      .split("/")
      .slice(3)
      .join("/")}`;
  };

  const openModal = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedVideoUrl("");
    setShowModal(false);
  };
  const navigate = useNavigate();
  const navigateToPath = (path) => {
    navigate(path);
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
        console.log('fetching order reelssss:', data);
        


        const reelsWithUrls = data.response.map((reel) => ({
          ...reel,
          reels_url: reel.reels_url,
          // reels_url: convertToLocalUrl(reel.reels_url),
        }));

        setOrderReelsUser(reelsWithUrls);
      } catch (error) {
        console.error("Error fetching orderreelsuser:", error);
      }
    };

    fetchOrderReels();
  }, [order_id, contextState.user.access_token]);

  //
  const handleAcceptClick = () => {
    setShowAcceptModal(true);
  };

  const handleAcceptModalClose = async () => {
    setShowAcceptModal(false);

    try {
      // Perform the API call when the OK button is clicked inside the Accept Modal
      const access_token = contextState.user.access_token;
      const headers = {
        Accept: "application/json",
        Authorization: access_token,
        "Authorization-secure": access_token,
        "client-id": "reelspro-app-mobile",
      };
      const response = await fetch(`${Constant.reels_accepetd}/${order_id}`, {
        method: "POST",
        headers: headers,
      });
      const data = await response.json();

      if (response.ok) {
        navigateToPath("/user_order");
        console.log("Reels accepted successfully.");
      } else {
        console.error("Failed to accept reels.");
      }
    } catch (error) {
      console.error("Error accepting reels:", error);
    }
  };

  //
  return (
    <>
      <Nav_bar_area contextApi={{ contextState }} />

      <section className="user-reels-list">
        <Container fluid className="myreelarea">
          <Row>
            <h2>USER ORDER VIEW REELS</h2>
          </Row>
          {
          orderreelsuser.length === 0 ? (
            <Row className="empty-message-row">
              <Col xs={12}>
                <p>No reels available for this order.</p>
              </Col>
            </Row>
          ) : (
          orderreelsuser.map((reel, index) => (
            <Row className="reel-box" key={index + 1}>
              <Col xs={12} md={4} className="reel-thumbnail">
                <div className="img-area">
                <VideoThumbnail
                  // videoUrl={'http://localhost/reels_proclub_backend/public/videos/1692120254.webm'}
                  videoUrl={reel.reels_url}
                  // videoUrl="https://dl.dropboxusercontent.com/s/7b21gtvsvicavoh/statue-of-admiral-yi-no-audio.mp4?dl=1"
                  thumbnailHandler={(thumbnail) => console.log(thumbnail)}
                  width={120}
                  height={80}
                  />
                </div>
              </Col>
               
              <Col xs={12} md={8}>
                <div className="view-button">
                  <Button
                    variant="primary"
                    onClick={() => openModal(reel.reels_url)}
                    className="view-btn"
                  >
                    View
                  </Button>
                </div>
              </Col>
            </Row>
          ))
          )}
          <Row className="accept-button-row">
            <Col xs={12} className="hh">
              <Button
                variant="success"
                onClick={handleAcceptClick}
                className="accept-btn"
              >
                Accept
              </Button>
            </Col>
          </Row>

          <Modal show={showModal} onHide={closeModal} centered>
            <Modal.Body>
              <ReactPlayer
                className="react-player-modal"
                url={selectedVideoUrl}
                controls
                playing={false}
                width="100%"
                height="100%"
                light={true}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          {/*  */}

          {/* Accept Modal */}
          <Modal
            show={showAcceptModal}
            onHide={handleAcceptModalClose}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Confirm Acceptance</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Are you sure you want to accept these reels?</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleAcceptModalClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleAcceptModalClose}>
                OK
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </section>
    </>
  );
}
