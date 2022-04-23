import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { storage } from "./firebaseConfig";

function DropDown({ dropdown }) {
  const [dropDownItem, setDropDownItem] = useState(dropdown);

  useEffect(() => {
    var numOfUser = 6;

    // FUNCTION: GET LINK DOWNLOAD FILE FROM STORAGE:
    const getImageFromStorage = async (ref) => {
      return await ref.getDownloadURL();
    };

    // FUNCTION: GET LIST OF LINK DOWNLOAD FLE FROM STORAGE:
    var imgFileName = [];
    for (let i = 1; i <= numOfUser; i++) {
      imgFileName[i] = "user" + i + ".jpg";
    }

    // Create a storage reference from our storage service
    var storageRef = storage.ref().child("/Widget_Image/Contacts");

    // Create a reference to user_i.jpg
    var userAvatarRef = [];
    for (let i = 1; i <= numOfUser; i++) {
      userAvatarRef[i] = storageRef.child(imgFileName[i]);
    }

    const getUserAvatarLink = async () => {
      // get URL download link of Image have already post
      var imgLink = [];
      for (let i = 1; i <= numOfUser; i++) {
        imgLink[i] = await getImageFromStorage(userAvatarRef[i]);
      }
      console.log(imgLink)
      setDropDownItem({
        title: dropDownItem.title,
        content: dropDownItem.content.map((item, index) => ({
          ...item,
          userImage: imgLink[index+1],
        })),
      });
    };

    getUserAvatarLink();
  }, []);


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
      <div className="dropDown__footer">
        <div className="footer__content">
          <p>See all in Messenger</p>
        </div>
      </div>
    </div>
  );
}

export default DropDown;
