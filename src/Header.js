import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import FlagIcon from "@mui/icons-material/Flag";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import MessageIcon from "@mui/icons-material/Message";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import { useStateValue } from "./StateProvider";
import "./App.css";

function Header() {
  const [{ user }, setUser] = useStateValue();

  function getFirstName(fullName) {
    var firstName = fullName.split(" ").slice(1, 2);
    return firstName;
  }

  function handleResponsive() {
    var x = document.getElementsByClassName("header__mid")[0];
    if (x.className === "header__mid") {
      x.className += " header__responsive";
    } else {
      x.className = "header__mid";
    }
  }
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <div className="input-field">
            <input type="text" placeholder="Search Facebook" />
          </div>
        </div>
      </div>

      <div className="header__mid">
        <div className="header__mid wrap">
          <div
            className="header__bar--responsive"
            onClick={() => handleResponsive()}
          >
            <MenuSharpIcon fontSize="large" />
          </div>
          <div className="header__options">
            <HomeIcon fontSize="large" />
          </div>
          <div className="header__options">
            <FlagIcon fontSize="large" />
          </div>
          <div className="header__options">
            <SupervisedUserCircleIcon fontSize="large" />
          </div>
          <div className="header__options">
            <StorefrontOutlinedIcon fontSize="large" />
          </div>
          <div className="header__options">
            <SubscriptionsOutlinedIcon fontSize="large" />
          </div>
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <img className="user__avatar" src={user.photoURL} alt="" />
          <h4>
            {getFirstName(user.displayName)} 
          </h4>
        </div>
        <div className="header__option">
          <div className="header__options">
            <AppsIcon className="header__icon" />
          </div>
          <div className="header__options">
            <MessageIcon className="header__icon" />
          </div>
          <div className="header__options">
            <NotificationsIcon className="header__icon" />
          </div>
          <div className="header__options">
            <ExpandMoreIcon className="header__icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
