import "./ProcessImage.css";
import { useState } from "react";
import { storage } from "./firebaseConfig";
import firebase from "firebase/app";
import "firebase/storage";

function ProcessImage() {
  // 

  const [imgURL, setImgURL] = useState("");
  // Get a reference to the storage service, which is used to create references in your storage bucket

  // Create a storage reference from our storage service
  var storageRef = storage.ref();

  // Create a reference to feeds1_avata_icon.jpg
  var flagRef = storageRef.child("feeds1_avata_icon.jpg");

  function loadImg(event) {
    console.log(event.target.files[0]);
    // put file to storage
    flagRef
      .put(event.target.files[0], {
        contentType: "image/jpeg",
      })
      .on(
        "state_changed",
        (snapshot) => {
          //check snapshot
          console.log("check snapshot: ",snapshot,typeof(snapshot)) 

          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log("Upload is running");
              break;
            default:
              return;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          console.log("File available at storage");
        }
      );
  }

  // if click button, render image from Firebase-storage to <img tag
  function handleDownload() {
    flagRef.getDownloadURL().then((url) => {
      console.log(url)
      setImgURL(url);
    });
  }

  return (
    <div>
      <input type="file" id="uploadFile" onChange={(e) => loadImg(e)} />
      <img src={imgURL} alt="" id="processImg__image" />
      <input type="button" value="Button" onClick={handleDownload} name="" />
    </div>
  );
}
export default ProcessImage;
