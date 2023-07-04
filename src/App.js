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
import { faUsers,faHouse,
  faCamera,
  faPhoneVolume,
  faMagnifyingGlass,
  faRightToBracket,
  faHandHoldingHand,
  faFilm,
      faArrowRightFromBracket 
    } from '@fortawesome/free-solid-svg-icons'
import Home from './components/Home';
import Nav_bar_area from './components/NavBar';
import Contactus from './components/Contactus';
import Users from './components/Users';
import Landing_page from './components/Landing_page';
import Login from './components/Login';
import Camera from './components/Camera';
import Categories from './components/Categories';
import Search_page from './components/Search_page';
import People from './components/People';
import Reels from './components/Reels';
import ReelVideo from './components/ReelVideo';
import MyReels from './components/MyReels';
import LoginState from './context/login/LoginState';
import SignUp from './components/SignUp';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      {/* <Router basename='/reelsproclub/build'> */}
      <LoginState>
      <Router>
        {/* <Nav_bar_area /> */}
        <Routes>
        <Route Component={Map} path='map'></Route>
        <Route Component={SignUp} path='signup'></Route>
        <Route Component={MyReels} path='myreels'></Route>
        <Route Component={Reels} path='reels'></Route>
        {/* <Route Component={Home} path='home'></Route> */}
        <Route Component={People} path='people'></Route>
        <Route Component={Categories} path='categories'></Route>
        <Route Component={Search_page} path='search'></Route>
        <Route Component={Login} path='login'></Route>
        <Route Component={Landing_page} path='landing'></Route>
        <Route Component={Camera} path='camera'></Route>
        <Route Component={Contactus} path='contactus'></Route>
        <Route Component={Users} path='users'></Route>
        <Route Component={ReelVideo} path='reelvideo'></Route>
        <Route Component={Landing_page} path='/'></Route>

        </Routes>
      </Router>
      </LoginState>
    </div>
  );
}

export default App;


