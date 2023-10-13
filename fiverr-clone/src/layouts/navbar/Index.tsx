import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="right-side">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul>
            <li>Dashboard</li>
            <li>
              My Business <MdOutlineKeyboardArrowDown />
            </li>
            <li>
              Growth & Marketing
              <MdOutlineKeyboardArrowDown />
            </li>
            <li>
              Analytics
              <MdOutlineKeyboardArrowDown />
            </li>
          </ul>
        </div>
        <div className="left-side">
          <div className="notification">notification</div>
          <div className="message">message</div>
          <div className="help">help</div>
          <div className="profile-image"></div>
          <div className="personal-usd"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
