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
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate, useLocation } from "react-router-dom";
import Nav_bar_area from "./NavBar";
import { useContext } from "react";
import { ContextApiContext } from "../context/ContextApi";
import { Constant } from "../common/Constants";

{
  /* <Nav_bar_area /> */
}

// //------ yaha sa
// import Common,{googleTranslate} from '../common/Common';
// import Language_arr from "../common/Lang";
// import {ContextApiContext} from '../context/ContextApi';
// import {useContext} from "react";
// //------yaha tk utthalo

export default function People_page_export(props) {
  const navigate = useNavigate();
  const { contextState, updateContextState } = useContext(ContextApiContext);

  const [open, setOpen] = useState(false);

  const location = useLocation();
  const params = location.state;
  // const category_id = location.state?location.state.category_id?location.state.category_id:0:0;
  const [category_id, setCategoryId] = useState(location.state?location.state.category_id?location.state.category_id:0:0);
  const [category_list, setCategoryList] = useState([]);

  console.log("params aaa", params);

  const navigateToPath = (path, params) => {
    navigate(path, params);
  };
  const [data, setData] = useState([]);
  const [is_all, setAll] = useState(0);
  const [is_featured, setFeatured] = useState(0);
  const [is_nearby, setNearby] = useState(0);
  const [search, setSearch] = useState('');

    useEffect(() => {
      // Fetch data using the params variable here
      // For example, you can use the fetch() function
      // and pass the params to the API endpoint
      get_categories();
      fetchData();
    }, [params]);

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
        // const response = await fetch(`${Constant.get_people}/${category_id}`, {
        const response = await fetch(`${Constant.get_people}?category_id=${category_id}&is_all=${is_all}
            &is_featured=${is_featured}&is_nearby=${is_nearby}&search=${search}`, {
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

    
  const get_categories = async () => {
    // const [category,setCategory] = useState('');
    // const [rate_per_reel, setRatePerReel] = useState(0);
    try {
      // let access_token = contextState.user.access_token;
      let access_token = Constant.basic_token;
      console.log("acces_token", access_token);
      const headers = {
        Accept: "application/json",
        Authorization: access_token,
        "Authorization-secure": access_token,
        "client-id": "reelspro-app-mobile",
      };

      const response = await fetch(Constant.get_category, {
        method: "GET",
        headers: headers,
      });

      const data = await response.json();
      console.log("res datadata", data);
      if (data.status) {
        console.log("category data", data.response);
        setCategoryList(data.response);
      } else {
      }
      // setCategories(data.response);
    } catch (error) {
      console.error("Error fetching :", error);
    }
  };

  

    const cal_distance = (distance)=>{
      if(distance < 10){
        return 'Less than 10KM';
      }
      if(distance < 50){
        return 'Less than 50KM';
      }
      if(distance < 100){
        return 'Less than 100KM';
      }
      if(distance < 500){
        return 'Less than 500KM';
      }
      if(distance < 1000){
        return 'Less than 1000KM';
      }
      else{
        return 'More than 1000KM';
      }
    }
    return (
      <section className="">
         <Container fluid>
        <Row>
          <Col>
            <Button
              className="profile-backbtnsignup"
              onClick={() => navigate(-1)}
            >
              <FontAwesomeIcon icon={faArrowLeft} />{" "}
            </Button>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <div className="top_head_mec">Professionals</div>
          </Col>
          <Col>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              className="filtr_btn"
            >
              <FontAwesomeIcon icon={faFilter} />
            </Button>{" "}
          </Col>
        </Row>
        <Row className="fliter_bx">
          <Collapse in={open}>
            <div id="example-collapse-text">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                  className="search_br"
                  onChange={(e)=>{setSearch(e.target.value)}}
                />
                <InputGroup.Text id="basic-addon1">
                  <Button className="srch_btn" onClick={()=>fetchData()}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Button>
                </InputGroup.Text>
              </InputGroup>

              <Row>
            <Col>
              <div className="form_area">
                <Form.Label>Categories*</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => {
                    setCategoryId(e.target.value);
                  }}
                >
                  <option key={0} value={0}>
                        All
                      </option>
                  {category_list.map((category, index) => {
                    return (
                      <option key={category.id} value={category.id} selected={category.id == category_id}>
                        {category.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </div>
            </Col>
          </Row>
           
              <Button className={is_all?"isactive":"flt_btn"} onClick={()=>{setAll(is_all?0:1);
                setFeatured(0);
                // setNearby(0);
              }}>All</Button>
              <Button className={is_featured?"isactive":"flt_btn"} onClick={()=>{
                  setAll(0);
                  setFeatured(is_featured?0:1)
                }}>Featured</Button>
              <Button className={is_nearby?"isactive":"flt_btn"} onClick={()=>{
                  // setAll(0);
                  setNearby(is_nearby?0:1)
                  }}>NearBy</Button>
            </div>
          </Collapse>
        </Row>

        <div className="row-flex-container">
          {data.map((item) => (
            <div key={item.id} className="col-md-4 flex-item">
              <a
                className="link_dec"
                onClick={
                  () =>
                    // navigateToPath(`/reels`, { state: { category: item.id } })
                    navigateToPath(`/hire`, { state: { user: item.id } })
                  // navigateToPath(`/hire`, { state: { user: reel.user.id } })
                }
              >
                <div className="img_box">
                  <p>{cal_distance(item.distance)}</p>
                  <img src={item.image?item.image:item.avatar} alt={item.name} />
                  <div className="img_box_txt">
                    <p>{item.name}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
