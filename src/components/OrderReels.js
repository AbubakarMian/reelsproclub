import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCamera,
  faUpload,
  faCheck,
  faCross,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import Nav_bar_area from "./NavBar";
import { ContextApiContext } from "../context/ContextApi";
import { Constant } from "../common/Constants";

export default function OrderReels() {
  const { contextState } = useContext(ContextApiContext);
  const navigate = useNavigate();
  const location = useLocation();
  const order_id = location.state.order_id;
  const [showModal, setShowModal] = useState(false); // Add these lines

  const [ordersReelslist, setOrdersReelslist] = useState([]);
  const [ordersquantity, setOrdersQuantity] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [deleted_btn, setDeletedBtn] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [showImageUploadSuccessModal, setShowImageUploadSuccessModal] =
    useState(false);
  const [imageUploadSuccessMessage, setImageUploadSuccessMessage] =
    useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const access_token = contextState.user.access_token;
      const headers = {
        Accept: "application/json",
        Authorization: access_token,
        "Authorization-secure": access_token,
        "client-id": "reelspro-app-mobile",
      };

      const response = await fetch(`${Constant.get_orders_reels}/${order_id}`, {
        method: "GET",
        headers: headers,
      });

      if (response.ok) {
        const data = await response.json();
        setOrdersReelslist(data.response);
        setOrdersQuantity(data.response.length);
      } else {
        console.error("Error fetching reels order:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching reels order:", error);
    }
  };

  const navigateToPath = (path, params) => {
    navigate(path, params);
  };

  const handleVideoUploadClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "video/*";
    fileInput.onchange = handleVideoSelect;
    fileInput.click();
  };

  const handleVideoSelect = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
      uploadVideo(file);
    }
  };

  const uploadVideo = async (file) => {
    try {
      const formData = new FormData();
      const user_id = contextState.user.id;
      formData.append("video", file);
      formData.append("order_id", order_id);
      formData.append("user_id", user_id);

      const access_token = contextState.user.access_token;
      const headers = {
        Accept: "application/json",
        Authorization: access_token,
        "Authorization-secure": access_token,
        "client-id": "reelspro-app-mobile",
      };

      const response = await fetch(`${Constant.upload_order_reels}`, {
        method: "POST",
        headers: headers,
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.status) {
          let reelList = ordersReelslist;
          reelList.unshift({
            reels_id: responseData.response.reel.id,
            reels_url: responseData.response.reel.url,
          });
          setOrdersReelslist(reelList);
          setImageUploadSuccessMessage("Video uploaded successfully.");
          setShowImageUploadSuccessModal(true);
          setSelectedIcon(faCheck);
        } else {
          setImageUploadSuccessMessage("Sorry, the video was not uploaded.");
          setShowImageUploadSuccessModal(true);
          setSelectedIcon(faCross);
        }
      } else {
        setImageUploadSuccessMessage("Sorry, the video was not uploaded.");
        setShowImageUploadSuccessModal(true);
        setSelectedIcon(faCross);
      }
    } catch (error) {
      setImageUploadSuccessMessage("Sorry, the video was not uploaded.");
      setShowImageUploadSuccessModal(true);
      console.error("Error uploading Video:", error);
    }
  };

  const handleDelete = async (reelId) => {
    try {
      setDeleting(true);

      const access_token = contextState.user.access_token;
      const headers = {
        Accept: "application/json",
        Authorization: access_token,
        "Authorization-secure": access_token,
        "client-id": "reelspro-app-mobile",
      };

      const response = await fetch(`${Constant.delete_reel}/${reelId}`, {
        method: "DELETE",
        headers: headers,
      });

      if (response.ok) {
        const data = await response.json();
        setDeletedBtn(true);

        const updatedReelList = ordersReelslist.filter((reel) => {
          return reel.reels_id !== reelId;
        });

        setOrdersReelslist(updatedReelList);
      } else {
        console.error("Error deleting reel:", response.statusText);
        setDeletedBtn(false);
      }
    } catch (error) {
      console.error("Error deleting reel:", error);
    } finally {
      setDeleting(false);
    }
  };

  const deliverReels = async () => {
    try {
      const access_token = contextState.user.access_token;
      const headers = {
        Accept: "application/json",
        Authorization: access_token,
        "Authorization-secure": access_token,
        "client-id": "reelspro-app-mobile",
      };

      const response = await fetch(`${Constant.deliver_reels}/${order_id}`, {
        method: "POST",
        headers: headers,
      });

      if (response.ok) {
        const data = await response.json();
        navigateToPath("/orderlist", {
          state: {
            order_id: order_id,
          },
        });
      } else {
        console.error("Error delivering reels:", response.statusText);
      }
    } catch (error) {
      console.error("Error delivering reels:", error);
    }
  };

  const openModal = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedVideoUrl("");
    setShowModal(false);
  };

  return (
    <section className="">
      <Container fluid className="myreelarea">
        <Row>
          <Col>
            <Button
              className="backbtnsignup"
              onClick={() => navigateToPath(-1)}
            >
              <FontAwesomeIcon icon={faArrowLeft} />{" "}
            </Button>
            <Row>
              <h2>ORDER REELS</h2>
            </Row>
          </Col>
        </Row>
        <Row className="butoon_reel_list">
          <Col>
            <Button
              onClick={() =>
                navigateToPath("/camera", { state: { order_id: order_id } })
              }
            >
              <FontAwesomeIcon icon={faCamera} /> Create Reel
            </Button>
          </Col>

          <Col>
            <Button onClick={handleVideoUploadClick}>
              <FontAwesomeIcon icon={faUpload} /> Upload Reel
            </Button>
          </Col>
        </Row>

        {ordersReelslist.map((reel, index) => (
          <Row key={reel.reels_id} className="reel_box">
            <Col>
              <div className="video-container">
                <video
                  loop
                  autoPlay={false}
                  height="100%"
                  width="100%"
                  controls={false}
                  src={reel.reels_url}
                ></video>
                {/* Delete Button */}
                <Button
                  className={`delete-btn ${deleted_btn ? "btn-sm" : "btn-lg"}`}
                  onClick={() => handleDelete(reel.reels_id)}
                  disabled={deleting}
                >
                  {deleted_btn ? "Deleted" : "Delete"}
                </Button>
              </div>
            </Col>
          </Row>
        ))}

        <Row>
          <Col>
            {ordersReelslist.length >= ordersquantity ? (
              <Button
                className="deliver_btn"
                onClick={() => deliverReels(order_id)}
              >
                Deliver
              </Button>
            ) : (
              <Button className="deliver_btn" disabled>
                Deliver
              </Button>
            )}
          </Col>
        </Row>
        <Modal
          show={showImageUploadSuccessModal}
          onHide={() => setShowImageUploadSuccessModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Video Uploaded</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="modal-body">
              <div class="icon_tick">
                <FontAwesomeIcon icon={selectedIcon} />
              </div>
              <div class="inite_Succ_hed"></div>
              <div class="inite_Succ_txt">{imageUploadSuccessMessage}</div>
              <div class="mdl_btn"></div>
            </div>
          </Modal.Body>
        </Modal>
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
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
}
