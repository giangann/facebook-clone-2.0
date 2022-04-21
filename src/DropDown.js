import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

function DropDown({ dropdown }) {
  return (
    <div className="menu__dropDown">
      <div className="dropDown__title">{dropdown.title}</div>
      <div className="header__search">
        <SearchIcon />
        <div className="input-field">
          <input type="text" placeholder="Search Messenger" />
        </div>
      </div>
      <div className="dropDown__content">
        {dropdown.content.map((item) => (
          <div className="dropDown__item">
            <div className="dropDown__userAvatar">
              <img src={item.userImage} alt="" />
            </div>
            <div>
              <div className="dropDown__userName">{item.userName}</div>
              <div className="dropDown__userChat">
                <p>{item.userChat} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="dropDown__footer">
          <div className="footer__content">
              <p>See all in Messenger</p>
          </div>
      </div>
    </div>
  );
}

export default DropDown;
