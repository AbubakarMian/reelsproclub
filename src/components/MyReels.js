import React,{useContext} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/myreels.css";
import "./../styles/reels.css";
import "./../styles/video-react.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, 
  faCamera,
  faUpload,
  faUserPlus,
  faCheck,
  faArrowLeft,
  faLocationDot,
  faCross,
  faEye } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import { Player } from "video-react";
import Nav_bar_area from "./NavBar";
import { ContextApiContext } from "../context/ContextApi";
import { Constant } from "../common/Constants";



export default function MyReels_page_export() {
const navigate = useNavigate();
const [showImageUploadSuccessModal, setShowImageUploadSuccessModal] =useState(false);
const [imageUploadSuccessMessage, setImageUploadSuccessMessage] =useState("");
const [showModal, setShowModal] = useState(false);
const [selectedImage, setSelectedImage] = useState(null);
const [selectedIcon, setSelectedIcon] = useState(null);
const [imagePreview, setImagePreview] = useState(null);
 const { contextState } = useContext(ContextApiContext);

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
    const formData = new FormData();
    // formData.append("image", selectedImage);
    const user_id = contextState.user.id;
    formData.append("video", file);
   

    const access_token = contextState.user.access_token;
    const headers = {
      Accept: "application/json",
      Authorization: access_token,
      "Authorization-secure": access_token,
      "client-id": "reelspro-app-mobile",
    };

    const response = await fetch(`${Constant.my_save_reels}/${user_id}`, {
      method: "POST", // Use the appropriate HTTP method
      headers: headers,
      body: formData,
    });

   
      
      const responseData = await response.json();
      console.log('abcc',responseData)

    

      if (responseData.status === true) {
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



const handleDelete = async (orderId) => {
  // try {
    // setDeleting(true);
    // console.log('before',ordersReelslist);
    // console.log('reelId',reelId);
    // setDeleting(false);

    // return;
    // if(orderId.id != orderId){
    //   console.log('condition false');
    //   return reel;
    // }

    return ;


  //   const access_token = contextState.user.access_token;
  //   const headers = {
  //     Accept: 'application/json',
  //     Authorization: access_token,
  //     'Authorization-secure': access_token,
  //     'client-id': 'reelspro-app-mobile',
  //   };
    
  //   const response = await fetch(`${Constant.delete_reel}/${reelId}`, {
  //     method: 'DELETE',
  //     headers: headers,
  //   });

  //   if (response.ok) {
  //     const data = await response.json();
  //     console.log('order_reels_delete__list', data);
  //     setdeleted_btn(true);


  //     const reel_list = ordersReelslist.filter((reel,index)=>{
  //       console.log('incoming reel',reel.reels_id);
  
  //         if(reel.reels_id != reelId){
  //           console.log('condition false');
  //           return reel;
  //         }
  //         else{
  //           console.log('condition found',reelId);
  
  //         }
  //       })
  
  //       setOrdersReelslist(reel_list);
  //   } else {
  //     console.error('Error deleting reel:', response.statusText);
  //     setdeleted_btn(false);
  //   }
  // } catch (error) {
  //   console.error('Error deleting reel:', error);
  // } 
  // finally {
  //   // setDeleting(false);
  // }
};

  const navigateToPath = (path) => {
    navigate(path);
  };
  return (
    <section className="">
      <Nav_bar_area contextApi={{ contextState }} />

      <Container fluid className="myreelarea">
        {/* <Row>
          <Col>
            <div className="top_head_mec">REELS</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={()=>navigateToPath('/camera')} className="add_reelbtn"><FontAwesomeIcon icon={faCameraRetro} /> +   Add Reel</Button>
          </Col>
        </Row> */}
           <Row className="butoon_reel_list"> 
          <Col>
            <Button onClick={() => navigateToPath("/camera",{order_id:0})}>
              <FontAwesomeIcon icon={faCamera} /> Create Reel
            </Button>
          </Col>
          <Col>
            <Button onClick={handleVideoUploadClick}>
              <FontAwesomeIcon icon={faUpload} /> Upload Reel
            </Button>
          </Col>
        </Row>
        <Row className="reel_box">
          <Col>
            <div className="img_area">
              <Player
                muted
                controls={{ position: "center" }}
                position={"center"}
                playsInline={false}
                //   poster="./images/poster.jpg"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                autoPlay={false}
                isFullscreen="Expand"
              />
            </div>
          </Col>
          <Col>
            <div className="info_area_myreels">
              {/*  {/* <div className="likes_area">
                <p>
                  <FontAwesomeIcon icon={faEye} className="like-eye" />
                  (129)
                  <FontAwesomeIcon className="like-thum" icon={faThumbsUp} />
                  (112 ){" "}
                </p>
              </div> */} 
              <div className="btn_area_myrees">
                <Button
                  onClick={() => {
                    navigate("/reelvideo");
                  }}
                  className="viewbtn"
                >
                  View
                </Button>
                <Button className="viewbtn btn-danger">Delete</Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="reel_box">
          <Col>
            <div className="img_area">
              <Player
                muted
                controls={{ position: "center" }}
                position={"center"}
                playsInline={false}
                //   poster="./images/poster.jpg"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                autoPlay={false}
                isFullscreen="Expand"
              />
            </div>
          </Col>
          <Col>
            <div className="info_area_myreels">
               {/* <div className="likes_area">
                <p>
                  <FontAwesomeIcon icon={faEye} className="like-eye" />
                  (129)
                  <FontAwesomeIcon className="like-thum" icon={faThumbsUp} />
                  (112 ){" "}
                </p>
              </div> */}
              <div>
                <div className="btn_area_myrees">
                  <Button
                    onClick={() => {
                      navigate("/reelvideo");
                    }}
                    className="viewbtn"
                  >
                    View
                  </Button>
                  <Button className="viewbtn btn-danger">Delete</Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="reel_box">
          <Col>
            <div className="img_area">
              <Player
                muted
                controls={{ position: "center" }}
                position={"center"}
                playsInline={false}
                //   poster="./images/poster.jpg"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                autoPlay={false}
                isFullscreen="Expand"
              />
            </div>
          </Col>
          <Col>
            <div className="info_area_myreels">
               {/* <div className="likes_area">
                <p>
                  <FontAwesomeIcon icon={faEye} className="like-eye" />
                  (129)
                  <FontAwesomeIcon className="like-thum" icon={faThumbsUp} />
                  (112 ){" "}
                </p>
              </div> */}
              <div className="btn_area_myrees">
                <Button
                  onClick={() => {
                    navigate("/reelvideo");
                  }}
                  className="viewbtn"
                >
                  View
                </Button>
                <Button className="viewbtn btn-danger">Delete</Button>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="reel_box">
          <Col>
            <div className="img_area">
              <Player
                muted
                controls={{ position: "center" }}
                position={"center"}
                playsInline={false}
                //   poster="./images/poster.jpg"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                autoPlay={false}
                isFullscreen="Expand"
              />
            </div>
          </Col>
          <Col>
            <div className="info_area_myreels">
              {/* <div className="likes_area">
                <p>
                  <FontAwesomeIcon className="like-eye" icon={faEye} /> (129)
                  <FontAwesomeIcon
                    className="like-thum"
                    icon={faThumbsUp}
                  />{" "}
                  (112 ){" "}
                </p>
              </div> */}
              <div className="btn_area_myrees">
                <Button
                  onClick={() => {
                    navigate("/reelvideo");
                  }}
                  className="viewbtn"
                >
                  View
                </Button>
                <Button className="viewbtn btn-danger">Delete</Button>
              </div>
            </div>
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
      </Container>
    </section>
  );
}
