import gigImage from "../../assets/gig-image.jpg";

const GigCart = () => {
  return (
    <div className="gig-cart">
      <div className="gig-img">
        <img src={gigImage} alt="" />
      </div>
      <div className="content">content</div>
    </div>
  );
};

export default GigCart;
