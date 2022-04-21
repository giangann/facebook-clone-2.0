import React, { useState } from "react";
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
import MultiLevelMenu from "./MultiLevelMenu";

function Header() {
  const [{ user }, setUser] = useStateValue();

  // get first name in fullName of user to display beside userAvatar
  function getFirstName(fullName) {
    var firstName = fullName.split(" ").slice(1, 2);
    return firstName;
  }

  // hide header__mid when decrease width of screen
  function handleResponsive() {
    var x = document.getElementsByClassName("header__mid")[0];
    if (x.className === "header__mid") {
      x.className += " header__responsive";
    } else {
      x.className = "header__mid";
    }
  }
  const chatList = [
    {
      userImage:
        "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-1/277536821_1197823971023935_880481891021830613_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ghFSjuRPRQUAX9Tfd2s&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8Lw01ObnREkvuNLJpxNENSgm76k9HbY6RWA7xbl5Qxog&oe=626012C2",
      userName: "Kevin De Bruyne",
      userChat: "Lorem ipsum dolor sit amet ",
    },
    {
      userImage:
        "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-1/277536821_1197823971023935_880481891021830613_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ghFSjuRPRQUAX9Tfd2s&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8Lw01ObnREkvuNLJpxNENSgm76k9HbY6RWA7xbl5Qxog&oe=626012C2",
      userName: "Peter Parker",
      userChat: "Lorem ipsum dolor sit amet ",
    },
    {
      userImage:
        "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-1/277536821_1197823971023935_880481891021830613_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ghFSjuRPRQUAX9Tfd2s&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8Lw01ObnREkvuNLJpxNENSgm76k9HbY6RWA7xbl5Qxog&oe=626012C2",
      userName: "Ngọc Ngọc",
      userChat: "Lorem ipsum dolor sit amet ",
    },
    {
      userImage:
        "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-1/277536821_1197823971023935_880481891021830613_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ghFSjuRPRQUAX9Tfd2s&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8Lw01ObnREkvuNLJpxNENSgm76k9HbY6RWA7xbl5Qxog&oe=626012C2",
      userName: "Rumelo Lukaku",
      userChat: "Lorem ipsum dolor sit amet ",
    },
    {
      userImage:
        "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-1/277536821_1197823971023935_880481891021830613_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ghFSjuRPRQUAX9Tfd2s&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8Lw01ObnREkvuNLJpxNENSgm76k9HbY6RWA7xbl5Qxog&oe=626012C2",
      userName: "Herry Kane",
      userChat: "Lorem ipsum dolor sit amet ",
    },
    {
      userImage:
        "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-1/277536821_1197823971023935_880481891021830613_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ghFSjuRPRQUAX9Tfd2s&_nc_ht=scontent.fhan3-3.fna&oh=00_AT8Lw01ObnREkvuNLJpxNENSgm76k9HbY6RWA7xbl5Qxog&oe=626012C2",
      userName: "Kevin De Bruyne",
      userChat: "Lorem ipsum dolor sit amet ",
    },
  ];

  // multi-level menu dropdown
  const [headerRight, setHeaderRight] = useState([
    {
      headerRightIcon: <AppsIcon className="header__icon" />,
      headerRightSubmenu: {
        title: "Menu",
        content: chatList,
      },
      isSelected: false,
    },
    {
      headerRightIcon: <MessageIcon className="header__icon" />,
      headerRightSubmenu: {
        title: "Messenger",
        content: chatList,
      },
      isSelected: false,
    },
    {
      headerRightIcon: <NotificationsIcon className="header__icon" />,
      headerRightSubmenu: {
        title: "Notifications",
        content: chatList,
      },
      isSelected: false,
    },
    {
      headerRightIcon: <ExpandMoreIcon className="header__icon" />,
      headerRightSubmenu: {
        title: "Account",
        content: chatList,
      },
      isSelected: false,
    },
  ]);

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
          <div
            className="header__bar--responsive"
            onClick={() => handleResponsive()}
          >
            <MenuSharpIcon fontSize="large" />
          </div>
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
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <img className="user__avatar" src={user.photoURL} alt="" />
          <h4>{getFirstName(user.displayName)}</h4>
        </div>
        <div className="header__option">
          <MultiLevelMenu menu={headerRight} toggleDropDown = {toggleDropDown} />
        </div>
      </div>
    </div>
  );
}

export default Header;
