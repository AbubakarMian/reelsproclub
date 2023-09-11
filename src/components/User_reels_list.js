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
import VideoThumbnail from "react-video-thumbnail";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Rating } from "react-simple-star-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import CustomStarRating from "../common/CustomeStarRating";
import Collapse from 'react-bootstrap/Collapse';


export default function User_reels_list() {
  const { contextState } = useContext(ContextApiContext);
  const [orderreelsuser, setOrderReelsUser] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [showAcceptModal, setShowAcceptModal] = useState(false);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [showRedoModal, setshowRedoModal] = useState(0);
  const [openReview, setOpenReview] = useState(false);


  const location = useLocation();
  const order_id = location.state.order_id;

  const openModal = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedVideoUrl("");
    setShowModal(false);
  };
  const navigate = useNavigate();
  const navigateToPath = (path, params) => {
    navigate(path, { params });
  };

  useEffect(() => {
    fetchOrderReels();
  }, [order_id, contextState.user.access_token]);

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
      console.log("fetching order reelssss:", data);

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
  //
  const handleAcceptClick = () => {
    setShowAcceptModal(true);
  };

  const handleRedoModalClose = async () => {
    setshowRedoModal(false);

    try {
      const access_token = contextState.user.access_token;
      const headers = {
        Accept: "application/json",
        Authorization: access_token,
        "Authorization-secure": access_token,
        "client-id": "reelspro-app-mobile",
      };

      var formData = new FormData();
      formData.append("review", review);

      const response = await fetch(`${Constant.reels_redo}/${order_id}`, {
        method: "POST",
        headers: headers,
        body: formData,
      });
      const data = await response.json();

      // if (response.ok) {
      console.log("order redo response", data);
      if (data.status) {
        navigateToPath("/user_order");
        console.log("Reels Redo.");
      } else {
        console.error("Failed to Redo reels.");
      }
    } catch (error) {
      console.error("Error Redo reels:", error);
    }
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

      var formData = new FormData();
      formData.append("review", review);
      formData.append("rating", rating);

      const response = await fetch(`${Constant.reels_accepetd}/${order_id}`, {
        method: "POST",
        headers: headers,
        body: formData,
      });
      const data = await response.json();

      // if (response.ok) {
      console.log("order accepted response", data);
      if (data.status) {
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
            <h2>ORDER SUMMARY</h2>
          </Row>
         
          {orderreelsuser.length === 0 ? (
            <Row className="empty-message-row">
              <Col xs={12}>
                <p>No reels available for this order.</p>
              </Col>
            </Row>
          ) : (
            orderreelsuser.map((reel, index) => (
              <Row className="reel-box" key={index + 1}>
                <Col xs={12} md={4} className="reel-thumbnail">
                  <div className="img-areas">
                    <div className="video-container">
                      <video
                        loop
                        autoPlay={false}
                        height="100%"
                        width="100%"
                        controls={false}
                        src={reel.reels_url}
                      ></video>
                      <div className="centered-button">
                        <Button
                          variant="primary"
                          onClick={() => {
                            navigate("/reelvideo", {
                              state: {
                                reels_url: reel.reels_url,
                              },
                            });
                          }}
                          className="view-btn"
                        >
                          <FontAwesomeIcon icon={faPlay} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            ))
          )}
           <Row>
            <Button
              onClick={() => setOpenReview(!openReview)}
              aria-controls="example-collapse-text"
              aria-expanded={openReview}
              className="issue_btn"
            >
              View Order Issues
            </Button>
          </Row>
          <Row>
            <Collapse in={openReview}>
              <div id="example-collapse-text">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </div>
            </Collapse>
          </Row>
          <Row className="accept-button-row">
            <Col className="hh">
              <Button
                variant="primary"
                onClick={handleAcceptClick}
                className="accept-btn"
              >
                Accept
              </Button>
            </Col>
            <Col>
              <Button
                variant="warning"
                onClick={() => setshowRedoModal(true)}
                className="accept-btn"
              >
                Redo
              </Button>
            </Col>
          </Row>

          <Modal show={showModal} onHide={closeModal} centered>
            <Modal.Body>
              {/* <ReactPlayer
                className="react-player-modal"
                url={selectedVideoUrl}
                controls
                playing={false}
                width="100%"
                height="100%"
                // light={true}
              /> */}

              <video
                id="background-video2"
                loop
                autoPlay
                ratio="16:9"
                resizeMode="cover" // height="720" width="1280"
                source
                src={selectedVideoUrl}
              ></video>
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
            onHide={() => {
              setShowAcceptModal(false);
            }}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Complete Order</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div id="example-collapse-text">
                Write a review and help others make informed decisions.
                <InputGroup>
                  <Form.Control
                    as="textarea"
                    aria-label="With textarea"
                    className="txt_area"
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Review"
                  />
                </InputGroup>
                Rate your experience with us.
                <div className="rating_area_accp">
                  <CustomStarRating
                    initialRating={rating}
                    onChange={(newRating) => {
                      setRating(newRating);
                    }}
                    editable={true}
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  setShowAcceptModal(false);
                }}
              >
                Cancel
              </Button>
              <Button variant="primary" onClick={handleAcceptModalClose}>
                OK
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Redo Modal */}
          <Modal
            show={showRedoModal}
            onHide={() => {
              setshowRedoModal(false);
            }}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Report a Problem </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div id="example-collapse-text">
                <InputGroup>
                  Please share details of the issue you encountered or any
                  additional comments. Your feedback is valuable in helping us
                  improve our service. Feel free to describe the problem,
                  provide context, or suggest any improvements you think would
                  be helpful. We appreciate your input!
                  <Form.Control
                    as="textarea"
                    aria-label="With textarea"
                    className="txt_area"
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Comments"
                  />
                </InputGroup>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleRedoModalClose}>
                OK
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </section>
    </>
  );
}
