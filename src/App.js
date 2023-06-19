import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contactus from './components/Contactus';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" data-bs-theme="light">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="contactus">Contact us</Link></Nav.Link>
            <Nav.Link><Link to="users">Users</Link></Nav.Link>
          </Nav>
        </Navbar>
        <Routes>
          <Route Component={Contactus} path='contactus'></Route>
          <Route Component={Users} path='users'></Route>
          <Route Component={Home} path='/'></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
