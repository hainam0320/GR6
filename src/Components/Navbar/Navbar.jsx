import About from '../../Pages/About';
import Contact from '../../Pages/Contact';
import Home from '../../Pages/Home';
import Header from '../Header';
import './Navbar.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../../Pages/Login';
const Navbar = () => {



  return (
    <>
      <div class="top-bar">
        <p class="top-bar-text">
          GET EXTRA 20% OFF ALL SALE STYLES | USE CODE: EXTRA20
        </p>
      </div>
      <div className="navbar">
        <div className="logo">
          <h2>Exclusive</h2>
        </div>
        <ul className="nav-menu">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </ul>
        <div className="nav-login-cart">
          <button onClick={() => (window.location.href = "/login")}>
            Login
          </button>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>

          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-shopping-cart-1433158-1211836.png?f=webp"
            alt=""
          />
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </>
  );
}


export default Navbar