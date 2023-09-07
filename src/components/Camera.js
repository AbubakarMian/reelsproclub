import React, { useCallback, useRef, useState, useContext } from "react";
import Webcam from "react-webcam";
import { useNavigate, useLocation } from "react-router-dom";
import { ContextApiContext } from "../context/ContextApi";
import { Constant } from "../common/Constants";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faEye } from "@fortawesome/free-solid-svg-icons";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";




export default function WebcamVideo(props) {
  // const { contextState } = useContext(ContextApiContext);

  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const { contextState, updateContextState } = useContext(ContextApiContext);
  const location = useLocation();
  // const params = location.state;
  const order_id = location.state?location.state.order_id:0;
  const user_name = location.state?location.state.name:'';
  console.log("order_id", order_id);
  console.log("user_name", user_name);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStartCaptureClick = useCallback(() => {
    if (webcamRef.current && webcamRef.current.video.srcObject) {
      setCapturing(true);
      mediaRecorderRef.current = new MediaRecorder(
        webcamRef.current.video.srcObject,
        {
          mimeType: "video/webm",
        }
      );
      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorderRef.current.start();
    }
  }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);

  //   const handleStopCaptureClick = async () => {
  //     if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
  //       mediaRecorderRef.current.stop();
  //     }

  //     if (recordedChunks.length) {

  //       const blob = new Blob(recordedChunks, { type: "video/webm" });

  // //

  // // const url = URL.createObjectURL(blob);
  // // const a = document.createElement("a");
  // // document.body.appendChild(a);
  // // a.style = "display: none";
  // // a.href = url;
  // // a.download = "react-webcam-stream-capture.webm";
  // // a.click();
  // // window.URL.revokeObjectURL(url);
  // // setRecordedChunks([]);

  // //

  // let reader = new FileReader();
  // reader.readAsDataURL(blob);
  // reader.onloadend = async function() {
  //       const formData = new FormData();
  //       console.log('my blob',blob);

  //         var base64data = reader.result;
  //         console.log(base64data);

  //       // formData.append("video", blob);
  //       formData.append("video", base64data);

  //       let access_token = props.contextApi.contextState.user.access_token;
  //       console.log('access_token',access_token)

  //       const headers = {
  //         Accept: 'application/json',
  //         Authorization: access_token,
  //         'Authorization-secure': access_token,
  //         'client-id': 'reelspro-app-mobile',
  //       };

  //       try {
  //         const response = await fetch(Constant.video_upload, {
  //           method: "POST",
  //           headers: headers,
  //           body: formData,
  //         });

  //         if (response.ok) {
  //           // Video upload was successful, handle the response if needed
  //           const data = await response.json();
  //           console.log("Server response:", data);
  //         } else {
  //           // Handle the case where the server responded with an error
  //           console.error("Video upload failed:", response.statusText);
  //         }
  //       } catch (error) {
  //         // Handle any other errors that occurred during the upload process
  //         console.error("Error uploading video:", error);
  //       }
  //     }
  //   }
  //     // Reset the recordedChunks state after uploading
  //     setRecordedChunks([]);
  //   };

  const handleStopCaptureClick = async () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.stop();
    }

    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, { type: "video/webm" });

      // Convert the video blob to base64
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = async function () {
        const base64data = reader.result;
        const user_id = contextState.user.id;
        const formData = new FormData();
        formData.append("video", blob); // Change this line to use the blob, not the base64data
        formData.append("user_id", user_id);
        formData.append("order_id", order_id);
        formData.append("camera_open","start");

        // let access_token = props.contextApi.contextState.user.access_token;
        let access_token = contextState.user.access_token;
        console.log("urlss", Constant.video_upload);
        console.log("blob", blob);
        const headers = {
          Accept: "application/json",
          Authorization: access_token,
          "Authorization-secure": access_token,
          "client-id": "reelspro-app-mobile",
        };

        try {
          const response = await fetch(Constant.video_upload, {
            method: "POST",
            headers: headers,
            body: formData,
          });

          const responseData = await response.json();
          console.log('cameraa',responseData)
  
        
  
          if (responseData.video_path) {
            // Video upload was successful, handle the response if needed
            // const data = await response.json();
            // console.log("Server response:", data);
            navigateToPath("/orderdetails", {
              state: {
                order_id: order_id,
              },
            });
          } else {
            // Handle the case where the server responded with an error
            console.error("Video upload failed:", response.statusText);
            // console.error("Video upload failed:", response.statusText);
          }
        } catch (error) {
          // Handle any other errors that occurred during the upload process
          console.error("Error uploading video:", error);
        }
      };
    }

    // Reset the recordedChunks state after uploading
    setRecordedChunks([]);
  };

  const handleDownload = () => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  };

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const navigate = useNavigate();

  const navigateToPath = (path, params) => {
    navigate(path, params);
  };

  return (
    <div className="Container">
      <Container>
        <Row>
          <Col>
            <Button className="backbtnsignup"
            
            onClick={() =>
              navigateToPath("/Influencer_order_details", {
                state: {
                  order_id: order_id,
                  name: user_name,
                },
              })
            }
           >
              <FontAwesomeIcon icon={faArrowLeft} />{" "}
            </Button>
          </Col>
        </Row>
      </Container>
     
      <Webcam
        height={720}
        width={1280}
        audio={false}
        mirrored={true}
        ref={webcamRef}
        videoConstraints={videoConstraints}
        style={{
          position: "absolute",
          textAlign: "center",
          zIndex: 8,
          right: 0,
          height: "93vh",
          width: "100%",
          objectFit: "cover",
        }}
      />
      <div className="camerBtns">
        {capturing ? (
          <button className="stopCapture" onClick={handleStopCaptureClick}>
            </button>
        ) : (
          <button className="startCapture" onClick={handleStartCaptureClick}>
            
          </button>
        )}
        {recordedChunks.length > 0 && (
          <button onClick={handleDownload}>Download</button>
        )}
      </div>
    </div>
  );
}
