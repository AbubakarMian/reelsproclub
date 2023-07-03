import React from "react";
import Container from 'react-bootstrap/Container';
import './../styles/Landing_page.css';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from "react-router-dom";






export default function Home_page_style() {
    const navigate = useNavigate();

    const navigateToPath = (path) => {
      navigate(path);
    };
    return (
        
        <div className="bodybg" onClick={()=>navigateToPath('/login')}>

            <Container fluid>

                <Row>
                <div className="hgt"></div>
                    <div className="landing_logo"><img
                        src="../images/new2.png"
                    /></div>
                </Row>
                <Row>
                    <div className="spinner_area">
                        {/* <Spinner animation="border" variant="warning" /> */}
                    </div>
                </Row>

            </Container>
        </div>

    );
}
