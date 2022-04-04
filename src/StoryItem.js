import React from "react";
import "./StoryItem.css";

function StoryItem({ storyImage, userAvatar, userName }) {
  return (
    <div className="story__itemWrap">
      <div
        className="story__item"
        style={{ backgroundImage: `url(${storyImage})` }}
      >
        <div className="story__avatar">
          <img src={userAvatar} alt="" />
        </div>
        <div className="story__username">
          <span>{userName}</span>
        </div>
      </div>
    </div>
  );
}

export default StoryItem;
