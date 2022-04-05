import React from "react";
import "./CreatePost.css";
import "./MainFeedItems.css";
import { Input } from "antd";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";

function CreatePost({ handleAddNewFeed }) {
  const { TextArea } = Input;

  const handleClose = () => {
    document.getElementsByClassName(
      "feeds__createPost--wrapper"
    )[0].style.display = "none";
    console.log("close");
  };

  const handlePost = () => {
      console.log(document.getElementsByTagName('TextArea')[0].value,)
    const newFeed = {
      feedImage: "/image/feeds2_image.jpg",
      userAvatar:
        "https://avatars2.githubusercontent.com/u/24712956?s-D400Su=b71527e605aelb748fc2d4157a842e57e427ad445v=4",
      userName: "Giang Ann",
      userStatus:
      document.getElementsByTagName('TextArea')[0].value,
      feedItemsStatistic: {
        timeStamp: 1,
        numOfInteract: 0,
        numOfComment: 0,
        numOfShare: 0,
      },
    };

    handleAddNewFeed(newFeed);
  };

  return (
    <div className="feeds__createPost--wrapper">
      <div className="feeds__createPost--outer"></div>

      <div className="feeds__createPost mainFeed__items">
        <div className="createPost__closeBtn" onClick={() => handleClose()}>
          <HighlightOffSharpIcon fontSize="large" />
        </div>
        <h3>Create post</h3>

        <TextArea
          style={{ width: "100%" }}
          rows={4}
          placeholder="What's in your mind, Ann?"
        />
        <div className="createPost__submit" onClick={() => handlePost()}>
          <h3 style={{ color: "white" }}>Post</h3>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
