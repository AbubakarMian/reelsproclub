import React, { useCallback, useRef, useState, useContext } from "react";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
// import { ContextApiContext } from '../context/ContextApi';
import { Constant } from '../common/Constants';

export default function WebcamVideo(props) {
  // const { contextState } = useContext(ContextApiContext);

  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const handleDataAvailable = useCallback(({ data }) => {
    if (data.size > 0) {
      setRecordedChunks((prev) => prev.concat(data));
    }
  }, [setRecordedChunks]);

  const handleStartCaptureClick = useCallback(() => {
    if (webcamRef.current && webcamRef.current.video.srcObject) {
      setCapturing(true);
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.video.srcObject, {
        mimeType: "video/webm",
      });
      mediaRecorderRef.current.addEventListener("dataavailable", handleDataAvailable);
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
  if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
    mediaRecorderRef.current.stop();
  }

  if (recordedChunks.length) {
    const blob = new Blob(recordedChunks, { type: "video/webm" });

    // Convert the video blob to base64
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = async function() {
      const base64data = reader.result;

      const formData = new FormData();
      formData.append("video", blob); // Change this line to use the blob, not the base64data

      let access_token = props.contextApi.contextState.user.access_token;
      console.log('urlss',Constant.video_upload);
      const headers = {
        Accept: 'application/json',
        Authorization: access_token,
        'Authorization-secure': access_token,
        'client-id': 'reelspro-app-mobile',
      };

      try {
        const response = await fetch(Constant.video_upload, {
          method: "POST",
          headers: headers,
          body: formData,
        });

        if (response.ok) {
          // Video upload was successful, handle the response if needed
          const data = await response.json();
          console.log("Server response:", data);
        } else {
          // Handle the case where the server responded with an error
          console.error("Video upload failed:", response.statusText);
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

  const navigateToPath = (path) => {
    navigate(path);
  };

  return (
    <div className="Container">
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
            Stop Capture
          </button>
        ) : (
          <button className="startCapture" onClick={handleStartCaptureClick}>
            Start Capture
          </button>
        )}
        {recordedChunks.length > 0 && (
          <button onClick={handleDownload}>Download</button>
        )}
        <button onClick={() => navigateToPath('/myreels')}>
          Back
        </button>
      </div>
    </div>
  );
}
