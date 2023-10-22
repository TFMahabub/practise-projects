import { AiTwotoneStar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { RiSendPlaneFill, RiTimeLine, RiUser3Fill } from "react-icons/ri";
import Level1Bagde from "../../assets/level-2-badge.png";
import profileImage from "../../assets/profile-image.jpg";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import GigCart from "../../components/cart/GigCart";
import BaseText from "../../components/texts/BaseText";

const UserProfilePage = () => {
  return (
    <div className="user-profile-page">
      <aside>
        <div className="user-info">
          <span className="online">Online</span>
          <div className="profile-info">
            <div className="profile-image">
              <img src={profileImage} alt="profile-image" />
              <div className="badge-image">
                <img src={Level1Bagde} alt="" />
              </div>
            </div>
            <h1>Alex Mahabub</h1>
            <BaseText color="light" weight="base">
              @junku946
            </BaseText>
            <BaseText color="dark" weight="base">
              Nothing Beats the Experience!!
            </BaseText>
            <div className="profile-review">
              <div className="stars">
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
              </div>
              <BaseText color="dark" weight="semiBold">
                4.9
              </BaseText>
              <BaseText color="light" weight="base">
                (245 reviews)
              </BaseText>
            </div>
            <SecondaryButton>Preview Fiverr Profile</SecondaryButton>
          </div>
          <hr />
          <div className="contact-info">
            <div className="item">
              <div className="key">
                <MdLocationOn />
                <BaseText color="dark" weight="base">
                  From
                </BaseText>
              </div>
              <BaseText color="dark" weight="bold">
                Bangladesh
              </BaseText>
            </div>
            <div className="item">
              <div className="key">
                <RiUser3Fill />
                <BaseText color="dark" weight="base">
                  Member since
                </BaseText>
              </div>
              <BaseText color="dark" weight="bold">
                Aug 2019
              </BaseText>
            </div>
            <div className="item">
              <div className="key">
                <RiTimeLine />
                <BaseText color="dark" weight="base">
                  Avg. Response Time
                </BaseText>
              </div>
              <BaseText color="dark" weight="bold">
                1 hour
              </BaseText>
            </div>
            <div className="item">
              <div className="key">
                <RiSendPlaneFill />
                <BaseText color="dark" weight="base">
                  Last Delivery
                </BaseText>
              </div>
              <BaseText color="dark" weight="bold">
                1 hour
              </BaseText>
            </div>
          </div>
          <hr />
          <div className="available-info">
            <div className="key">
              <RiSendPlaneFill />
              <BaseText color="dark" weight="base">
                Available
              </BaseText>
            </div>
            <SecondaryButton>Edit</SecondaryButton>
          </div>
        </div>
        <div className="among-my-client"></div>
        <div className="my-portfolio"></div>
      </aside>
      <main>
        <div className="user-gigs">
          <div className="menubar">
            <p className="menu">Active Gigs</p>
          </div>
          <div className="gigs-parent">
            <GigCart />
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfilePage;
