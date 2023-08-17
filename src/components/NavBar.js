import { useContext } from 'react';
import loginContext from '../context/login/loginContext';
// import {ContextApiContext} from '../context/ContextApi';


import '../App.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers,faHouse,
  faCamera,
  faCircleUser,
  faMagnifyingGlass,
  faRightToBracket,
  faBoxesStacked,
  faPhotoFilm,
  faFilm,
  faCalendarDay,
      faArrowRightFromBracket 
    } from '@fortawesome/free-solid-svg-icons'

    import { useNavigate } from "react-router-dom";



export default function Nav_bar_area(props) {
  // const { contextState, updateContextState } = useContext(ContextApiContext);

  // const context = useContext(ContextApiContext);
  const contextState = props.contextApi.contextState;
  const lang = contextState.language.prefix;
        // const context = useContext(ContextApiContext);
        const authUser = {name:'use1'};
        const langUser = {name:'use1'};
        // const authUser = useContext(ContexApifun);
        // const langUser = useContext(lanuageContext);
        console.log('context',contextState);
        console.log('context 2',contextState.language);
        const navigate = useNavigate();

    const navigateToPath = (path) => {
      navigate(path);
    };
        return (
            <>
            {/* {[false, 'sm', 'lg', 'lg', 'xl', 'xxl'].map((expand) => ( */}
            <Navbar key='xl' expand='lg' className="bg-body-tertiary" variant="light">
              <Container fluid className="nav_back">
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                <Navbar.Brand href="#"> <img className="logo_brand" src="./../images/new1.png"></img></Navbar.Brand>
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-lg`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                  placement="start"
                >
                  <Offcanvas.Header>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                      <div onClick={()=>{
                      }}>{contextState.user.name} {contextState.language.name}</div>
                      <div>
                        <img className="collapse_logo" src="./../images/new1.png"></img>
      
                      </div>
                      <div>
      
                      </div>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    {/* <Button  onClick={()=>navigateToPath('/camera')}  className="" variant="primary"> */}
                                {/* GO */}
                                {/* {Language_arr["GO"+lang]} */}
                            {/* New Reel */}
                    {/* </Button> */}
                    {/* <Button  onClick={()=>navigateToPath('/categories')}  className="" variant="primary"> */}
                                {/* GO */}
                                {/* {Language_arr["GO"+lang]} */}
                            {/* Categories */}
                    {/* </Button> */}


                       <div className='nav_bottom'><Nav.Link href="camera"><FontAwesomeIcon icon={faCamera} /> New Reel</Nav.Link></div>
                      {/* <div className='nav_bottom'><Nav.Link href="contactus"><FontAwesomeIcon icon={faPhoneVolume} /> contactus</Nav.Link></div>
                      <div className='nav_bottom'><Nav.Link href="users"><FontAwesomeIcon icon={faUsers} /> users</Nav.Link></div> */}
                      <div className='nav_bottom'><Nav.Link href="search"><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</Nav.Link></div>
                      {/* <div className='nav_bottom'><Nav.Link href="categories"><FontAwesomeIcon icon={faBoxesStacked} />Categories</Nav.Link></div> */}
                      <div className='nav_bottom'><Nav.Link href="myreels"><FontAwesomeIcon icon={faFilm} /> My Reels</Nav.Link></div>
                      <div className='nav_bottom'><Nav.Link href="profile"><FontAwesomeIcon icon={faCircleUser} /> Profile</Nav.Link></div>
                      <div className='nav_bottom'><Nav.Link href="viewreels"><FontAwesomeIcon icon={faPhotoFilm} /> View Reels</Nav.Link></div>
                      <div className='nav_bottom'><Nav.Link href="orderdetails"><FontAwesomeIcon icon={faCalendarDay} /> Order Details</Nav.Link></div>
                      <div className='nav_bottom'><Nav.Link href="login"><FontAwesomeIcon icon={faRightToBracket} />Login</Nav.Link></div>
                      {/* <div className='nav_bottom'><Nav.Link href="payment"><FontAwesomeIcon icon={faRightToBracket} />Login</Nav.Link></div> */}


                      {/* <NavDropdown
      
      
                        title="Dropdown"
                        id={`offcanvasNavbarDropdown-expand-lg`}
                      >
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                          Something else here
                        </NavDropdown.Item>
                      </NavDropdown>  */}
      
                    </Nav>
                    {/* <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button className='search_btn' variant="outline-success"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                    </Form> */}
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
            {/* ))} */}
          </>
        
        
    );
  }
  
