import logo from './logo.svg';
import './App.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers,faHouse, faMagnifyingGlass, faPlay, faFileCircleQuestion, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Home from './components/Home';
import Contactus from './components/Contactus';
import Users from './components/Users';
import Landing_page from './components/Landing_page';
import Login from './components/Login';
import Cammera from './components/Cammera';
import Help_page from './components/Help_page';
import Search_page from './components/Search_page';
import Mechanic from './components/Mechanic';
import Reels from './components/Reels';

function App() {
  return (
    <div className="App">
      {/* <Router basename='/reelsproclub/build'> */}
      <Router>
        <Nav_bar_area />
        <Routes>
        <Route Component={Reels} path='reels'></Route>
        {/* <Route Component={Home} path='home'></Route> */}
        <Route Component={Mechanic} path='mechanic'></Route>
        <Route Component={Help_page} path='help_page'></Route>
        <Route Component={Search_page} path='search_page'></Route>
        <Route Component={Login} path='login'></Route>
        <Route Component={Landing_page} path='landing_page'></Route>
        <Route Component={Cammera} path='cammera'></Route>
        <Route Component={Contactus} path='contactus'></Route>
        <Route Component={Users} path='users'></Route>
        <Route Component={Landing_page} path='/'></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;



const Nav_bar_area = () => {
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
                  <img className="collapse_logo" src="./../images/1.png"></img>

                </div>
                <div>

                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                 <div className='nav_bottom'><Nav.Link href="Cammera"><FontAwesomeIcon icon={faUsers} /> Cammera</Nav.Link></div>
                <div className='nav_bottom'><Nav.Link href="contactus"><FontAwesomeIcon icon={faUsers} /> contactus</Nav.Link></div>
                <div className='nav_bottom'><Nav.Link href="users"><FontAwesomeIcon icon={faUsers} /> users</Nav.Link></div>
                <div className='nav_bottom'><Nav.Link href="login"><FontAwesomeIcon icon={faUsers} /> login</Nav.Link></div>
                <div className='nav_bottom'><Nav.Link href="Landing_page"><FontAwesomeIcon icon={faUsers} /> Landing_page</Nav.Link></div>
                <div className='nav_bottom'><Nav.Link href="Search_page"><FontAwesomeIcon icon={faUsers} /> Search_page</Nav.Link></div>
                <div className='nav_bottom'><Nav.Link href="Help_page"><FontAwesomeIcon icon={faUsers} /> Help_page</Nav.Link></div>
                <div className='nav_bottom'><Nav.Link href="Mechanic"><FontAwesomeIcon icon={faUsers} /> Mechanic</Nav.Link></div>
                <div className='nav_bottom'><Nav.Link href="Reels"><FontAwesomeIcon icon={faUsers} /> Reels</Nav.Link></div>
                {/* <div className='nav_bottom'><Nav.Link href="Home"><FontAwesomeIcon icon={faUsers} /> Home</Nav.Link></div> */}
              
                <NavDropdown

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
                </NavDropdown> 
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
