import { AiTwotoneStar } from "react-icons/ai";
import Level1Bagde from "../../assets/level-2-badge.png";
import profileImage from "../../assets/profile-image.jpg";
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
            <button></button>
          </div>
          <div className="contact-info"></div>
          <div className="available-info"></div>
        </div>
      </aside>
      <main>main part</main>
    </div>
  );
};

export default UserProfilePage;
