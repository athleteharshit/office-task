import companyLogo from "../../assets/img/logo@2x.png";
import "./Slidebar.css";

const Slidebar = () => {
  return (
    <div id="slidebar">
      <div className="logo">
        <img src={companyLogo} alt="" className="logoImg" />
        <h1 className="companyName">Virdrobe</h1>
      </div>
      <ul>
        <li className="item">
          <i class="fas fa-home"></i>
          <a href="" className="link">
            Home
          </a>
        </li>
        <li className="item">
          <i class="fas fa-user-secret"></i>
          <a href="" className="link">
            My Wardrobe
          </a>
        </li>
        <li className="item">
          <i class="fab fa-jedi-order"></i>
          <a href="" className="link">
            Order
          </a>
        </li>
        <li className="item">
          <i class="fas fa-user-friends"></i>
          <a href="" className="link">
            My Friends
          </a>
        </li>
        <li className="item">
          <i class="fas fa-desktop"></i>
          <a href="" className="link">
            My Background
          </a>
        </li>
        <li className="item">
          <i class="fas fa-comments-dollar"></i>
          <a href="" className="link">
            Chats
          </a>
        </li>
        <li className="item">
          <i class="fas fa-gifts"></i>
          <a href="" className="link">
            Gifts
          </a>
        </li>
        <li className="item">
          <i class="fas fa-calendar-week"></i>
          <a href="" className="link">
            My Calender
          </a>
        </li>
        <li className="item">
          <i class="fas fa-cog"></i>
          <a href="" className="link">
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Slidebar;
