import React from "react";
import "./MessageSender.css";
import "./SidebarRow.css";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import CollectionsBookmarkSharpIcon from "@mui/icons-material/CollectionsBookmarkSharp";
import SentimentVerySatisfiedSharpIcon from "@mui/icons-material/SentimentVerySatisfiedSharp";
import VideoCameraFrontSharpIcon from "@mui/icons-material/VideoCameraFrontSharp";

function MessageSender() {
  const handleCreatePost = () => {
    console.log("create post");
    var element = document.getElementsByClassName("feeds__messageSender")[0];
    console.log(element);
  };

  const handleClose = () => {};
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
              placeholder="What's on your mind, Ann?"
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
      <div className="feeds__createPost">
        <h3>Create post</h3>
        <input type="text" placeholder="What's on your mind, Ann?"/>

      </div>
    </div>
  );
}

export default MessageSender;
