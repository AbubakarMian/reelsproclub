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
// import {   faEye } from "@fortawesome/free-solid-svg-icons";
// import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft, faEye ,faThumbsUp} from "@fortawesome/free-solid-svg-icons";

import { faCameraRetro,
  faStar,
  faCamera,
  faCheck,
  faCross,
  faUpload,
  faPlay,
  faVideoPlus,
 } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState,useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate , useLocation} from "react-router-dom";
import { Player,ControlBar  } from "video-react";
import Nav_bar_area from "./NavBar";
import video9 from "../videos/vid9.mp4";
import { ContextApiContext } from "../context/ContextApi";
import { Constant } from '../common/Constants';
import ReactPlayer from "react-player";





export default function OrderReels() {
  const { contextState, updateContextState } = useContext(ContextApiContext);
  const navigate = useNavigate();

  const location = useLocation();
  const params = location.state;
  const order_id = location.state.order_id;
  const [ordersReelslist, setOrdersReelslist] = useState([]);
  const [ordersquantity, setOrdersQuantity] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [deleted_btn, setdeleted_btn] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  

  const [showImageUploadSuccessModal, setShowImageUploadSuccessModal] =
    useState(false);
  const [imageUploadSuccessMessage, setImageUploadSuccessMessage] =
    useState("");

  const [showModal, setShowModal] = useState(false);
  console.log('ordeer_reels',order_id);

  const navigateToPath = (path, params) => {
    navigate(path, params);
  };
  const handleVideoUploadClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "video/*"; // Allow only video files
    fileInput.onchange = handleVideoSelect;
    fileInput.click();
  };
  
  const handleVideoSelect = async (event) => {
    const file = await event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const previewURL = await URL.createObjectURL(file);
      await setImagePreview(previewURL);
      console.log('helooo');
    
      uploadVideo(file);
      
   
    }
  };
  const uploadVideo = async (file) => {
    try {
      console.log('file_upload',file);
      const formData = new FormData();
      // formData.append("image", selectedImage);
      const user_id = contextState.user.id;
      formData.append("video", file);
      // formData.append("user_id", user_id);
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
        method: "POST", // Use the appropriate HTTP method
        headers: headers,
        body: formData,
      });

        const responseData = await response.json();
        console.log('abcc',responseData)

      

        if (responseData.status) { //video_path
          let reelList = ordersReelslist;

          reelList.unshift(responseData.response.reel);

          
          setOrdersReelslist( reelList);
          setImageUploadSuccessMessage("Video uploaded successfully."); // Set the success message
          setShowImageUploadSuccessModal(true); // Open the success modal
          setSelectedIcon(faCheck); // Open the success modal
          // setImagePreview(responseData.response.image);
        }
      else {
        setImageUploadSuccessMessage("Sorry ..Video not uploaded ."); // Set the success message
        setShowImageUploadSuccessModal(true); // Open the success modal
        setSelectedIcon(faCross); // Open the success modal
      }
    } catch (error) {
      setImageUploadSuccessMessage("Sorry ..Video not uploaded ."); // Set the success message
      setShowImageUploadSuccessModal(true); // Open the success modal
      console.error("Error uploading Video:", error);
    }
  };

  const [imagePreview, setImagePreview] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Function to fetch categories from the API


    fetchOrders();
  }, []);

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
      console.log('reels_url_count', data.response.length);
      setOrdersReelslist(data.response);
      setOrdersQuantity(data.response[0].order_quantity);
    } catch (error) {
      console.error('Error fetching reels order:', error);
    }
  };

  const handleDelete = async (reelId) => {
    try {
      setDeleting(true);
      // console.log('before',ordersReelslist);
      // console.log('reelId',reelId);
      // setDeleting(false);

      // return;
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


        const reel_list = ordersReelslist.filter((reel,index)=>{
          console.log('incoming reel',reel.reels_id);
    
            if(reel.reels_id != reelId){
              console.log('condition false');
              return reel;
            }
            else{
              console.log('condition found',reelId);
    
            }
          })
    
          setOrdersReelslist(reel_list);
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
          console.error('Error orderlist reel:', response.statusText);
        
        }


    
     

    } catch (error) {
      console.error('Error deleting reel:', error);
    } 
  
  };

//   return(


// <video
// id="background-video2"
// loop
// autoPlay={false}
// ratio="16:9"
// resizeMode="" // height="720" width="1280"
// source
// // controls={true}
// src="https://www.w3schools.com/html/mov_bbb.mp4" 
// ></video>
//   )
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

      {/* <Container> */}
        <Row>
          <Col>
            <Button className="backbtnsignup"
            
            onClick={() =>
              navigateToPath(-1)
              // navigateToPath("/Influencer_order_details", {
              //   state: {
              //     order_id: order_id,
              //     name: user_name,
              //   },
              // })
            }
           >
              <FontAwesomeIcon icon={faArrowLeft} />{" "}
              
            </Button>
            <Row>
          <h2>ORDER REELS</h2>
        </Row>
          </Col>
        </Row>
      {/* </Container> */}

        <Row>
          {/* <h2>ORDER REELS</h2> */}
        </Row>
        <Row className="butoon_reel_list"> 
        
            <Col>
      
        <Button onClick={() => navigateToPath("/camera", { state:{ order_id: order_id }})}>
          <FontAwesomeIcon icon={faCamera} /> Create Reel
        </Button>
   
        </Col>

<Col>
      
        <Button onClick={handleVideoUploadClick  }>
          <FontAwesomeIcon icon={faUpload} /> Upload Reel
        </Button>
     
      </Col>
        </Row>
  
        {ordersReelslist.map((reel, index) => (
          <Row key={reel.reels_id} className="reel_box">
            <Col>
              <div className="img_area"    onClick={() => openModal(reel.reels_url)}>
              <video
                // id="background-video2"
                loop
                autoPlay={false}
                // ratio="16:9"
                height="100%" width="100%"
                // resizeMode="" // height="720" width="1280"
                // source
                controls={false}
                src={reel.reels_url}
                // src="https://www.w3schools.com/html/mov_bbb.mp4" 
                // src="https://www.w3schools.com/html/mov_bbb.mp4" 
                ></video>

              {/* <Player
              muted
              // startTime={3}
              // playsInline={true}
              // src={reel.reels_url} // Use the actual URL from your API response
              src="https://www.w3schools.com/html/mov_bbb.mp4" // Use the actual URL from your API response
              autoPlay={false}
              // isFullscreen="Expand"
              controls={false} // Set controls to false to turn off the controls
            >
               <ControlBar  disableCompletely={true} />
              </Player> */}

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
           {/* Check if the condition is true, and render the button if not */}
      {  ordersReelslist.length  >= ordersquantity? (
         <Button className="deliver_btn"      onClick={() => deliver_reels(order_id)} >Deliver</Button>
      ) : (
        <Button className="deliver_btn"    disabled >Deliver</Button>
      )}
          </Col>
        </Row>
        <Modal
            show={showImageUploadSuccessModal}
            onHide={() => setShowImageUploadSuccessModal(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div class="modal-body">
                <div class="icon_tick">
                  <FontAwesomeIcon icon={selectedIcon} />
                </div>
                <div class="inite_Succ_hed"></div>
                <div class="inite_Succ_txt">
                {imageUploadSuccessMessage}
              
                </div>
                <div class="mdl_btn">
                  {/* <button class="btn btn-primary" data-dismiss="modal">
                    OK
                  </button> */}
                </div>
              </div></Modal.Body>
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
                // light={true}
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
