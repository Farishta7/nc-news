import { Link } from "react-router-dom";
import loginIcon from "../images/login-icon.png";
// import mainLogo from '../images/main-logo-icon.png'
import globe from "../images/globe.png";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="header">
        <div className="header-content">
          <div className="logo-and-sign-in">
            <Link to={"/"} className="main-logo" onClick={scrollToTop}>
              <p className="news-wave-text">News Wave</p>
              <img src={globe} alt="Main Website logo" className="globe-logo" />
            </Link>
            <div className="header-sign-in">
              <img src={loginIcon} alt="Login icon" className="sign-in-logo" />

              <Button variant="info" className="sign-in-button">
                Sign in
              </Button>
            </div>
          </div>
          <ul className="nav-list">
            <li>
              <Link to="/" onClick={scrollToTop} className="nav-item">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/topics/coding"
                onClick={scrollToTop}
                className="nav-item"
                id="nav-coding-tab"
              >
                Coding
              </Link>
            </li>
            <li>
              <Link
                to="/topics/football"
                onClick={scrollToTop}
                className="nav-item"
                id="nav-football-tab"
              >
                Football
              </Link>
            </li>
            <li>
              <Link
                to="/topics/cooking"
                onClick={scrollToTop}
                className="nav-item"
                id="nav-cooking-tab"
              >
                Cooking
              </Link>
            </li>
            {/* FIX FOLLOWING TO A PAGE WHERE USER CAN INSERT LOCATION AND RECEIVE WEATHER INFORMATION */}
            <li>
              <Link
                to="/weather"
                onClick={scrollToTop}
                className="nav-item"
                id="nav-weather-tab"
              >
                Weather
              </Link>
            </li>
            <li className="drop-down-section">
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="drop-down-more"
                >
                  More
                </Dropdown.Toggle>

                <Dropdown.Menu className="drop-down-items">
                  <Dropdown.Item href="/topics/football" onClick={scrollToTop}>
                    Football
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="/topics/cooking" onClick={scrollToTop}>
                    Cooking
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="/weather" onClick={scrollToTop}>
                    Weather
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>

            {/* <li>
              <Link to="/topics" onClick={scrollToTop}>
                Explore All Topics
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
