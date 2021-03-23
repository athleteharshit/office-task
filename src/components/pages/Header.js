import { Switch } from "@material-ui/core";
import "./Header.css";
import companyLogo from "../../assets/img/logo@2x.png";

const Header = ({ handleThemeChange, darkState }) => {
  return (
    <div id="header">
      <div className="search">
        <i class="fas fa-search"></i>
        <input
          type="text"
          name=""
          className="searchInput"
          placeholder="Search anything"
        />
      </div>
      <div className="leftIcon">
        <Switch checked={darkState} onChange={handleThemeChange} />
        <i class="far fa-heart"></i>
        <i class="fas fa-cart-plus"></i>
        <i class="far fa-bell"></i>
        <div className="profile">
          <img src={companyLogo} alt="" />
          <h2>Hi Harshit</h2>
          <i class="fas fa-sort-down"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
