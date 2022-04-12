import React, { useState } from "react";
import "./CreatePost.css";
import "./MainFeedItems.css";
import { Input } from "antd";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import { useStateValue } from "./StateProvider";
import db from "./firebaseConfig";
import CircularProgress from "@mui/material/CircularProgress";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import MicExternalOnIcon from "@mui/icons-material/MicExternalOn";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import firebase from "firebase";
import { collection, addDoc } from "firebase/firestore";

function CreatePost() {
  const [{ user }, setUser] = useStateValue();
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const { TextArea } = Input;

  const handleClose = () => {
    document.getElementsByClassName(
      "feeds__createPost--wrapper"
    )[0].style.display = "none";
  };

  const handlePost = async () => {
    setIsLoading(true);
    db.collection("feed")
      .add({
        feedImage:
          "https://scontent.fhan7-1.fna.fbcdn.net/v/t39.30808-6/277570817_538392347645804_872732488301493782_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=xsMcYVcxHp0AX-sGhJA&_nc_ht=scontent.fhan7-1.fna&oh=00_AT9smRF2omnG0eJbZ9mn2rb8XutXiU0L4zvpPO30fDEnkg&oe=62540B88",
        userAvatar: user.photoURL,
        userName: user.displayName,
        userStatus: input,
        feedItemsStatistic: {
          timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
          numOfInteract: 0,
          numOfComment: 0,
          numOfShare: 0,
        },
      })
      .then(() => {
        console.log("Done");
      })
      .catch((error) => {
        console.error(error);
      });

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(2000);
    setIsLoading(false);
    setInput("");
    handleClose();
  };

  function loadImg(event) {
    var image = document.getElementById("image");
    image.src = URL.createObjectURL(event.target.files[0]);
  }

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
          onChange={handleOnChange}
          placeholder={`What's on your mind, ${user.displayName}?`}
          value={input}
        />

        <div className="createPost__image">
          <input
            type="file"
            name="image"
            id="file"
            onChange={(e) => loadImg(e)}
            display="none"
          />
          <div className="createPost__addToPost">
            <p>
              <strong>Add to post</strong>
            </p>
            <div className="createPost__icon">
              <label>
                <AddPhotoAlternateIcon fontSize="medium" />
              </label>
              <GroupAddIcon fontSize="medium" />
              <EmojiEmotionsIcon fontSize="medium" />
              <AddLocationAltIcon fontSize="medium" />
              <MicExternalOnIcon fontSize="medium" />
            </div>
          </div>

          <img src="" alt="" id="image" />
        </div>

        <div className="createPost__submit" onClick={() => handlePost()}>
          <h3 style={{ color: "white" }}>Post</h3>
        </div>
        {isLoading ? (
          <>
            <div className="createPost__loading opacity"></div>
            <div className="createPost__loading">
              <CircularProgress />
              <p>...Loading</p>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default CreatePost;
