import { BsThreeDots } from "react-icons/bs";
import gigImage from "../../assets/gig-image.jpg";

const GigCart = () => {
  return (
    <div className="gig-cart">
      <div className="gig-img">
        <img src={gigImage} alt="" />
      </div>
      <div className="content">
        <h2 className="title">
          I will do modern music studio, dj, tv, radio and entertainment logo in
          24 hours
        </h2>
        <div className="action">
          <BsThreeDots />
          <p className="text">
            Starting At
            <strong>$10</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GigCart;
