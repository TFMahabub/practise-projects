import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="mainMenu">
        <div className="logo">
          <img src={logo} alt="paypal-logo" />
        </div>
        <ul className="menus_container">
          <li className="d_menus">
            Home
            <RiArrowDownSLine className="icon" />
            <div className="d_content">
              <p>menus</p>
              <p>menus</p>
              <p>menus</p>
            </div>
          </li>
          <li className="d_menus">
            About
            <RiArrowDownSLine className="icon" />
            <div className="d_content">
              <p>menus</p>
              <p>menus</p>
              <p>menus</p>
            </div>
          </li>
          <li className="d_menus">
            Contact
            <RiArrowDownSLine className="icon" />
            <div className="d_content">
              <p>menus</p>
              <p>menus</p>
              <p>menus</p>
            </div>
          </li>
          <li>
            <Link to={"/develop"} className="linkBTN">
              Developer
            </Link>
          </li>
        </ul>
      </div>
      <div className="action_menus">
        <Link to={"/"} className="linkBTN">
          Help
        </Link>
        <button className="primaryBTN">Login</button>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
