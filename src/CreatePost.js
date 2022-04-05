import React from "react";
import "./CreatePost.css";
import "./MainFeedItems.css";
import { Input } from "antd";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";

function CreatePost() {
  const { TextArea } = Input;

  const handleClose = () => {
    document.getElementsByClassName("feeds__createPost--wrapper")[0].style.display =
      "none";
    console.log("close");
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
        <div className="createPost__submit">
          <h3>Post</h3>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
