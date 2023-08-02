import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/categories.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState,useEffect  } from "react";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate  } from "react-router-dom";
import Nav_bar_area from './NavBar';
import { Constant } from '../common/Constants';

//------
import {ContextApiContext} from '../context/ContextApi';

import {useContext} from "react";
import Common,{googleTranslate} from '../common/Common';
import Language_arr from "../common/Lang";
//------

function Categories(props) {
  const max_length = 13;
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const { contextState, updateContextState } = useContext(ContextApiContext);
  const lang = contextState.language.prefix;

  useEffect(() => {
    // Function to fetch categories from the API
    const fetchCategories = async () => {
      try {
        let access_token = contextState.user.access_token;
        console.log('acces_token',access_token);
        const headers = {
          Accept: 'application/json',
          Authorization: access_token,
          'Authorization-secure': access_token,
          'client-id': 'reelspro-app-mobile',
        };
        console.log('headers',headers);
        const response = await fetch(Constant.get_category, {
          method: 'GET',
          headers: headers,
        });
  
        const data = await response.json();
        console.log('datadata', data);
        setCategories(data.response);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const get_string_lable = (str_n) => {
    if (!str_n) {
      return ""; // Return an empty string if str_n is undefined or null
    }
  
    const str = Language_arr[str_n + lang];
    return str && str.length < max_length ? str : str?.substring(0, max_length) + '....';
  };
  
  const navigateToPath = (path,params) => {
    navigate(path,params);
  };

  return (
    <section className="">
      <Nav_bar_area contextApi={{ contextState }} />

      <Container fluid>
        <Row>
          <Col>
            <div className="top_head">
              {get_string_lable("What do you need help with ?")}
            </div>
          </Col>
        </Row>
        <Row>
          {categories.map((category) => (
            <Col key={category.id} className="colCat">
              <a className="link_dec" onClick={() => navigateToPath(`/people`,{state:{category_id:category.id}})}>
                <div className=" " >
                {/* onClick={() => navigateToPath('/people')} */}
                  <img className="img-fluid" src={category.avatar} alt={category.name} />

                  <div className="img_box_txt">
                    <p>{category.name}</p>
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

export default Categories;
