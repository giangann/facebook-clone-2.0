import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { storage } from "../Services/Firebase/firebaseConfig";
import MultiLevelMenu from "./MultiLevelMenu";

function DropDown({ index, dropdown, resetDropDown }) {
  const [dropDownItem, setDropDownItem] = useState(dropdown);

  useEffect(() => {
    var ignoreClickOnMeElement = document.getElementById(
      "headerRight__dropDown"
    );

    document.addEventListener("click", function (event) {
      var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
      if (!isClickInsideElement) {
        resetDropDown();
      }
    });
  });
  // close dropDown when click outside

  return (
    <div className="menu__dropDown">
      <div className="dropDown__above">
        <div className="dropDown__title">{dropdown.title}</div>
        <div className="header__search">
          <SearchIcon />
          <div className="input-field">
            <input type="text" placeholder="Search Messenger" />
          </div>
        </div>
        <div className="dropDown__content">
          {dropDownItem.content.map((item) => (
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
