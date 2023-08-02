import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/categories.css";
import "./../styles/mechanic.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState,useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate,useLocation  } from "react-router-dom";
import Nav_bar_area from './NavBar';
import {useContext} from "react";
import {ContextApiContext} from '../context/ContextApi';
import { Constant } from '../common/Constants';



{/* <Nav_bar_area /> */}


// //------ yaha sa 
// import Common,{googleTranslate} from '../common/Common';
// import Language_arr from "../common/Lang";
// import {ContextApiContext} from '../context/ContextApi';
// import {useContext} from "react";
// //------yaha tk utthalo 


export default function People_page_export(props) {
  const navigate = useNavigate();
  const { contextState, updateContextState } = useContext(ContextApiContext);


  const location = useLocation();
  const params = location.state;
  const people_id = location.state.category_id;

  console.log('params aaa', params);

  const navigateToPath = (path,params) => {
    navigate(path,params);
  };
    const [data, setData] = useState([]);

    useEffect(() => {
      // Fetch data using the params variable here
      // For example, you can use the fetch() function
      // and pass the params to the API endpoint
      const fetchData = async () => {
        try {
          let access_token = contextState.user.access_token;
          console.log('acces_token',access_token);
          const headers = {
            Accept: 'application/json',
            Authorization: access_token,
            'Authorization-secure': access_token,
            'client-id': 'reelspro-app-mobile',
          };
          console.log('headers_people',headers);
          const response = await fetch(`${Constant.get_people}/${people_id}`, {
            method: 'GET',
            headers: headers,
          });
    
          const data = await response.json();
          console.log('datadata_people', data);
          setData(data.response);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, [params]);
    return (
      <section className="">
        {/* Your JSX code to display the data goes here */}
        <Container fluid>
          <Row>
            <Col>
              <div className="top_head_mec">Professionals</div>
            </Col>
          </Row>
          <Row>
            {/* Display the fetched data here */}
            {data.map((item) => (
              <Col key={item.id}>
                <a className="link_dec" onClick={() => navigateToPath(`/reels`,{state:{profile:item.id}})}>
                <div className="img_box">
                  <img src={item.avatar} alt={item.name} />
                  <div className="img_box_txt">
                    <p>{item.name}</p>
                  </div>
                </div>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    );
}

