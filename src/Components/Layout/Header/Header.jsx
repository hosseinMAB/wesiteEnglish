import "./Header.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <div className="container">
        <ul>
          <li>
            <NavLink
              to="#home"
              onClick={() => handleScroll("home")}
              className={() => (location.hash === "#home" ? "active" : "")}
            >
              <i className="fa-solid fa-home"></i>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#books"
              onClick={() => handleScroll("books")}
              className={() => (location.hash === "#books" ? "active" : "")}
            >
              <i className="fa-solid fa-book"></i>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="#envelope"
              onClick={() => handleScroll("envelope")}
              className={() => (location.hash === "#envelope" ? "active" : "")}
            >
              <i className="fa-solid fa-envelope"></i>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
