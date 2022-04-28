import "./Header.css";
import "../App.css";
import { headerRightSample } from "../SampleData/HeaderSampleObject";

import { useStateValue } from "../Services/ContextAPI/StateProvider";
import MultiLevelMenu from "./MultiLevelMenu";

import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import FlagIcon from "@mui/icons-material/Flag";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";

function Header() {
  const [{ user }, setUser] = useStateValue();

  // get first name in fullName of user to display beside userAvatar
  function getFirstName(fullName) {
    var firstName = fullName.split(" ").slice(1, 2);
    return firstName;
  }

  function handleResponsive() {
    let sidebar = document.getElementsByClassName("app__sidebar")[0];
    let content = document.getElementsByClassName("app__content")[0];
    let Widget = document.getElementsByClassName("app__widget")[0];
    let body = document.getElementsByClassName("app__body")[0];

    if (sidebar.style.display === "none") {
      sidebar.style.display = "block";
      content.style.display = "none";
      Widget.style.display = "none";
      body.style.justifyContent = "flex-start";
    } else {
      sidebar.style.display = "none";
      content.style.display = "block";
      Widget.style.display = "flex";
      body.style.justifyContent = "space-around";
    }
  }

  const [headerRight, setHeaderRight] = useState(headerRightSample);

  // conditional render when user click on 4 icon in headerRight
  const toggleDropDown = (id) => {
    const tempValue = headerRight.map((item, index) =>
      index === id
        ? {
            ...item,
            isSelected: !item.isSelected,
          }
        : {
            ...item,
            isSelected: false,
          }
    );
    setHeaderRight(tempValue);
  };

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
          <a href="#" className="header__options">
            <HomeIcon fontSize="large" />
          </a>
          <a href="#" className="header__options">
            <FlagIcon fontSize="large" />
          </a>
          <a href="#" className="header__options">
            <SupervisedUserCircleIcon fontSize="large" />
          </a>
          <a href="#" className="header__options">
            <StorefrontOutlinedIcon fontSize="large" />
          </a>
          <a href="#" className="header__options">
            <SubscriptionsOutlinedIcon fontSize="large" />
          </a>
          <a
            href="#"
            className="header__bar--responsive header__options"
            onClick={handleResponsive}
          >
            <MenuSharpIcon fontSize="large" />
          </a>
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <img className="user__avatar" src={user.photoURL} alt="" />
          <h4>{getFirstName(user.displayName)}</h4>
        </div>
        <div className="header__option">
          <MultiLevelMenu menu={headerRight} toggleDropDown={toggleDropDown} />
        </div>
      </div>
    </div>
  );
}

export default Header;
