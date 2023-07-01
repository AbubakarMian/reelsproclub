import React from "react";
import Container from 'react-bootstrap/Container';
import './../styles/Landing_page.css';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';





export default function Landing_page_export() {
    return (
        <div className="bodybg">

            <Container fluid>

                <Row>
                <div className="hgt"></div>
                    <div className="landing_logo"><img
                        src="../images/Reelsclub-[Recovered].png"
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
