import React from "react";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/reels.css";
import "./../styles/video-react.css";
import "./../styles/payment-screen.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faEye, faShare } from "@fortawesome/free-solid-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
// import Grid from "@mui/material/Grid";
import Collapse from "react-bootstrap/Collapse";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate, useLocation } from "react-router-dom";
import { Player } from "video-react";
import { useContext } from "react";
import { ContextApiContext } from "../context/ContextApi";
import { Constant } from "../common/Constants";
import Nav_bar_area from "./NavBar";
import axios from "axios"; // Import Axios library
import { loadStripe } from "@stripe/stripe-js";

export default function PaymentScreen() {
  const navigate = useNavigate();
  const { contextState, updateContextState } = useContext(ContextApiContext);
  const [data, setData] = useState([]);
  const location = useLocation();
  const params = location.state;
  const influencer_user_id = location.state.user;
  console.log("user", influencer_user_id);

  const navigateToPath = (path, params) => {
    navigate(path, params);
  };
  const [formData, setFormData] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      let access_token = contextState.user.access_token;
      let user_id = contextState.user.id;
      var formData = new FormData();
      formData.append("user_id", user_id);
      formData.append("influencer_user_id", influencer_user_id);
      const headers = {
        Accept: "application/json",
        Authorization: access_token,
        "Authorization-secure": access_token,
        "client-id": "reelspro-app-mobile",
      };
      // const response = await axios.post(`${Constant.submit_payment}/${user_id}`, formData);
      //   console.log(response.data);

      const response = await fetch(Constant.submit_payment, {
        method: "Post",
        headers: headers,
        body: formData,
      });

      // const data = await response.json();

      const data = await response.json();
      console.log('payment response', data);

      if(data.status){
        navigateToPath('/user_order');
      }

      console.log("payment response", data);
    } catch (error) {
      console.error("Error submitting payment:", error);
      // Handle error
    }
  };

  return (
    <div>
      <div className="pay_header">
        <img src="../images/pay_back.jpg" />
      </div>
      <div className="center">
      

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            maxWidth: "600px", // Adjust the maxWidth based on your design
            padding: "20px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            Payment Information
          </h2>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Card Number"
                variant="outlined"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                fullWidth
                margin="dense"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Expiration Date"
                variant="outlined"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleInputChange}
                fullWidth
                margin="dense"
                placeholder="MM/YY"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="CVV"
                variant="outlined"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                fullWidth
                margin="dense"
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 2 }}>
            {/* <Button variant="contained" color="primary" fullWidth onClick={() => navigateToPath(`/categories`)}>
              Submit Payment
            </Button> */}
            <Button variant="contained" color="primary" fullWidth type="submit">
              Submit Payment
            </Button>
          </Box>
        </form>
      </Container>
      {/* <div className="pay_footer">
      <img src="../images/pay_back.jpg" alt="Footer Image" />
      </div> */}
      </div>
    </div>
  );
}

//7e1c4d
