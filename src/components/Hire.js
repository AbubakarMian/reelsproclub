import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./../styles/hire.css";
import Carousel from "react-bootstrap/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faArrowLeft,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useState ,useEffect} from "react";
import Collapse from "react-bootstrap/Collapse";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate,useLocation } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Dropdown from "react-bootstrap/Dropdown";
import Nav_bar_area from "./NavBar";
import { ContextApiContext } from "../context/ContextApi";
import { Constant } from '../common/Constants';

{
  /* <Nav_bar_area /> */
}

export default function Profile() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { contextState, updateContextState } = useContext(ContextApiContext);
  const [mydata, setData] = useState({});
  const [totalCost, setTotalCost] = useState('0');
  const [numberReels, setNumberReels] = useState('');
  const [comments, setCommments] = useState('');
  const location = useLocation();
  const params = location.state;
  const user_id = location.state.user;

  const navigateToPath = (path,params) => {
    navigate(path,params);
  };
  
  console.log('params user_id', user_id);
  useEffect(() => {
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
        const response = await fetch(`${Constant.get_reel_rate}/${user_id}`, {
          method: 'GET',
          headers: headers,
        });
  
        const data = await response.json();
        console.log('datadata_user_influencer', data);
        console.log('namessssss', data.response.user.name);
        setData(data.response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params]);
  return (
    <div>
      
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
      <section className="bg_color_hire">
        {/* <h3 className="hire_head">Robert</h3> */}
        <Container fluid>
          <Row>
            <Col className="hire_column">
              <div className="hire_pic_area">
                <img src="../images/prof9.jpg" />
              </div>
            </Col>
          </Row>
          <Row>
            <div className="hire_info_area">
              <p>
                <h3 className="hire_head">{mydata?.user?.name}</h3>
              </p>
              <p>
                <FontAwesomeIcon icon={faStar} style={{ color: "#fb9d23" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#fb9d23" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#fb9d23" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#fb9d23" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#bbaeae" }} />
              </p>
              <p>
                <FontAwesomeIcon className="like" icon={faThumbsUp} />
                (112 likes)
              </p>
            </div>
          </Row>
          <Row>
            <Col>
              <div className="flexing">
                <div className="form_cover_profile_hire dual txt_bx">
                  <p>
                    {mydata.details}
                    {/* I am flexible, reliable and possess excellent time keeping
                    skills. I am an enthusiastic, self-motivated, reliable,
                    responsible and hard working person. I am a mature team
                    worker and adaptable to all challenging situations. I am
                    able to work well both in a team environment as well as
                    using own initiative. */}
                  </p>
                </div>

                <div className="form_cover_profile_hire">
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3" style={{width:'50%'}}>
                      Rate Per Reel
                    </InputGroup.Text>
                    <Form.Control
                      id="basic-url"
                      aria-describedby="basic-addon3"
                      value={`$${mydata?.rate_per_reel}`}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3"  style={{width:'50%'}}
                    >
                      Number Of Reels
                    </InputGroup.Text>
                    <Form.Control
                      id="basic-url"
                      aria-describedby="basic-addon3"
                    onChange={(e)=>{
                      // setData(...data,{number_of_reels:e.target.value});
                      setNumberReels(e.target.value);
                      setTotalCost(e.target.value* mydata.rate_per_reel)}}

                      value={numberReels}
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3"  style={{width:'50%'}}
                      
                      >
                      Total Cost
                    </InputGroup.Text>
                    <Form.Control
                      id="basic-url"
                      aria-describedby="basic-addon3"
                      value={'$'+totalCost}
                    />
                  </InputGroup>
                  {/* <Form>
                  <Form.Group
                    className="mb-3 text_cent"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Comments</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form> */}
                  <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    className="commentsbtn"
                  >
                    Comment
                  </Button>
                  <Collapse in={open}>
                    <div id="example-collapse-text">
                      <InputGroup>
                        <Form.Control
                          as="textarea"
                          aria-label="With textarea"
                          className="txt_area"
                          onChange={(e)=>setCommments(e.target.value)}
                        />
                      </InputGroup>
                    </div>
                  </Collapse>
                </div>
              </div>
            </Col>
          </Row>
          {/* <Button  oonClick={() => navigateToPath(`/paymentscreen`,{state:{user:mydata?.user?.id}})} className="hire_btn">Hire</Button> */}
           {/* <Button className="reel_btn" onClick={() => navigateToPath(`/paymentscreen`,{state:{user:mydata?.user?.id}})}> */}
           <Button className="reel_btn" onClick={() => navigateToPath(`/paymentscreen`,{state:{user_object:mydata,numberReels:numberReels,comments:comments,user_influencer:mydata.user_id}})}>
                  Hire
                </Button>
        </Container>
      </section>
    </div>
  );
}
