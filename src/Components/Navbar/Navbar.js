import { useEffect, useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import "./Navbar.css";

const HeaderNavbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  const [show, handleShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);
  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav
        className={`navbar ${show && "navbar__active"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="nav-container">
          <NavHashLink to="/#" className="nav-logo">
            {/* <img src="images/logo3x.png" alt="logo" /> */}
            SoftverCasa.
          </NavHashLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavHashLink
                smooth
                to={"/#home"}
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink
                smooth
                to={"/#about"}
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About Us
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink
                smooth
                to={"/#services"}
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Services
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink
                smooth
                to={"/#team"}
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Team
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink
                smooth
                to={"/contact"}
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </NavHashLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-bars" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderNavbar;
