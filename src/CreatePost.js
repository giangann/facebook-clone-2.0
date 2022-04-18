import React, { useState } from "react";
import "./CreatePost.css";
import "./MainFeedItems.css";
import { Input } from "antd";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import { useStateValue } from "./StateProvider";
import db, { storage } from "./firebaseConfig";
import CircularProgress from "@mui/material/CircularProgress";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import MicExternalOnIcon from "@mui/icons-material/MicExternalOn";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import firebase from "firebase";

function CreatePost({ feedItemsData }) {
  const [{ user }, setUser] = useStateValue();

  // save URL after put image file to Storage
  const [preImgURL, setPreImgURL] = useState(""); //user preview
  const [putImgURL, setPutImgURL] = useState(null);

  // save user's caption and Loading process
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // create name to prepare for put Image file
  const feedListLength = feedItemsData.length + 1;
  const imgFileName = "FeedImage" + feedListLength;

  // handle when user type input
  const handleOnChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  // Prepare antd input element
  const { TextArea } = Input;

  // Handle when press X to close post form
  const handleClose = () => {
    document.getElementsByClassName(
      "feeds__createPost--wrapper"
    )[0].style.display = "none";
  };

  // Handle when load image (setState for imageURL)
  const loadImg = (event) => {
    setPreImgURL(URL.createObjectURL(event.target.files[0]));
    setPutImgURL(event.target.files[0]);
  };

  // FUNCTION: PUT FILE TO STORAGE:
  const addImageToStorage = async (ref, file) => {
    return await ref.put(file, { contentType: "image/jpeg" });
  };

  // FUNCTION: GET LINK DOWNLOAD FILE FROM STORAGE:
  const getImageFromStorage = async (ref) => {
    return await ref.getDownloadURL();
  };

  // Handle when press submit button
  const handlePost = async () => {
    setIsLoading(true);

    // Prepare to Put image
    // Create a storage reference from our storage service
    var storageRef = storage.ref();
    // Create a reference to feeds1_avata_icon.jpg
    var feedImageRef = storageRef.child(imgFileName);

    // Put file to Firebase-storage, check the result
    const imgAdded = await addImageToStorage(feedImageRef, putImgURL);
    console.log("Done!, result: ", imgAdded);

    // get URL download link of Image have already post
    const imgLink = await getImageFromStorage(feedImageRef);
    console.log(imgLink);

    // console.log("2. prepare .add to Firestorage, check downloadImgURL again", downloadImgURL)

    // // set state to change URL feed image link
    db.collection("feed")
      .add({
        feedImage: imgLink,
        userAvatar: user.photoURL,
        userName: user.displayName,
        userStatus: input,
        feedItemsStatistic: {
          timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
          numOfInteract: 0,
          numOfComment: 0,
          numOfShare: 0,
          listUserInteract:[]
        },
      })
      .then(() => {
        console.log("3. Done");
      })
      .catch((error) => {
        console.error(error);
      });

    setIsLoading(false);
    setInput("");
    handleClose();
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
              <label for="file">
                <AddPhotoAlternateIcon fontSize="medium" />
              </label>
              <GroupAddIcon fontSize="medium" />
              <EmojiEmotionsIcon fontSize="medium" />
              <AddLocationAltIcon fontSize="medium" />
              <MicExternalOnIcon fontSize="medium" />
            </div>
          </div>

          <img src={preImgURL} alt="" id="image" />
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
