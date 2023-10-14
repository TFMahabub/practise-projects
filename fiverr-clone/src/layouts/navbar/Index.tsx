import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import profileImage from "../../assets/profile-image.jpg";

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
          <div className="notification icon-menu">
            <FaRegBell />
          </div>
          <div className="message icon-menu">
            <GoMail />
          </div>
          <div className="help icon-menu">
            <AiOutlineQuestionCircle />
          </div>
          <div className="profile-image">
            <div />
            <img src={profileImage} alt="" />
          </div>
          <div className="doller">
            <Link to={"/earning"}>$12.12</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
