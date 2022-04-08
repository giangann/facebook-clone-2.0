import React from "react";
import "./MessageSender.css";
import "./SidebarRow.css";

import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import CollectionsBookmarkSharpIcon from "@mui/icons-material/CollectionsBookmarkSharp";
import SentimentVerySatisfiedSharpIcon from "@mui/icons-material/SentimentVerySatisfiedSharp";
import VideoCameraFrontSharpIcon from "@mui/icons-material/VideoCameraFrontSharp";
import { useStateValue } from "./StateProvider";

function MessageSender() {
  const handleCreatePost = () => {
    document.getElementsByClassName("feeds__createPost--wrapper")[0].style.display = 'block';
  };

  const [{user}, setUser] = useStateValue()


  return (
    <div>
      <div className="feeds__messageSender">
        <div className="sender__top">
          <div className="sender__avatar">
            <AccountCircleTwoToneIcon fontSize="large" />
          </div>
          <div className="sender__input header__search">
            <input
              onClick={() => handleCreatePost()}
              type="text"
              placeholder={`What's on your mind, ${user.displayName}?`}
              />
          </div>
        </div>
        <div className="sender__bottom">
          <div className="sender__icon">
            <VideoCameraFrontSharpIcon fontSize="large" />
            <span className="sidebar__title">Live video</span>
          </div>
          <div className="sender__icon">
            <CollectionsBookmarkSharpIcon fontSize="large" />
            <span className="sidebar__title">Photo/video</span>
          </div>
          <div className="sender__icon ">
            <SentimentVerySatisfiedSharpIcon fontSize="large" />
            <span className="sidebar__title">Feeling/Activity</span>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default MessageSender;
