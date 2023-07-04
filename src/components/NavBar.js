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
  faPhoneVolume,
  faMagnifyingGlass,
  faRightToBracket,
  faHandHoldingHand,
  faUserPlus,
  faFilm,
      faArrowRightFromBracket 
    } from '@fortawesome/free-solid-svg-icons'
import Home from './Home';
import Contactus from './Contactus';
import Users from './Users';
import Landing_page from './Landing_page';
import Login from './Login';
import Camera from './Camera';
import Categories from './Categories';
import Search_page from './Search_page';
import People from './People';
import Reels from './Reels';
import ReelVideo from './ReelVideo';
import MyReels from './MyReels';



export default function Nav_bar_area() {
        return (
            <>
            {/* {[false, 'sm', 'lg', 'lg', 'xl', 'xxl'].map((expand) => ( */}
            <Navbar key='xl' expand='lg' className="bg-body-tertiary" variant="light">
              <Container fluid className="nav_back">
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                <Navbar.Brand href="#">Reels Pro Club</Navbar.Brand>
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-lg`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                  placement="start"
                >
                  <Offcanvas.Header>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                      <div>
                        <img className="collapse_logo" src="./../images/new1.png"></img>
      
                      </div>
                      <div>
      
                      </div>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                       <div className='nav_bottom'><Nav.Link href="camera"><FontAwesomeIcon icon={faCamera} /> New Reel</Nav.Link></div>
                      {/* <div className='nav_bottom'><Nav.Link href="contactus"><FontAwesomeIcon icon={faPhoneVolume} /> contactus</Nav.Link></div>
                      <div className='nav_bottom'><Nav.Link href="users"><FontAwesomeIcon icon={faUsers} /> users</Nav.Link></div> */}
                      <div className='nav_bottom'><Nav.Link href="login"><FontAwesomeIcon icon={faRightToBracket} /> Login</Nav.Link></div>
                      <div className='nav_bottom'><Nav.Link href="landing"><FontAwesomeIcon icon={faUsers} /> Landing</Nav.Link></div>
                      <div className='nav_bottom'><Nav.Link href="search"><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</Nav.Link></div>
                      <div className='nav_bottom'><Nav.Link href="categories"><FontAwesomeIcon icon={faHandHoldingHand} /> Categories</Nav.Link></div>
                      <div className='nav_bottom'><Nav.Link href="people"><FontAwesomeIcon icon={faUsers} /> People</Nav.Link></div>
                      <div className='nav_bottom'><Nav.Link href="reels"><FontAwesomeIcon icon={faCamera} /> Reels</Nav.Link></div>
                      <div className='nav_bottom'><Nav.Link href="myreels"><FontAwesomeIcon icon={faFilm} /> My Reels</Nav.Link></div>
                      <div className='nav_bottom'><Nav.Link href="signup"><FontAwesomeIcon icon={faUserPlus} /> Sign Up</Nav.Link></div>
                      <div className='nav_bottom'><Nav.Link href="profile"><FontAwesomeIcon icon={faUsers} /> Profile</Nav.Link></div>
                    
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
  
