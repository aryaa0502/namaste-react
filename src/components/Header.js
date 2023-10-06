import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/img.png";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={logo} />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              {onlineStatus===true ? "Online🟢" : "Offline🔴"}
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About Us</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            <li>
            <Link to="/cart">Cart</Link>
            </li>
            <button className="login" onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;