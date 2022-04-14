import "./ProcessImage.css";
import { useState } from "react";
import { storage } from "./firebaseConfig";
import "firebase/storage";

function ProcessImage() {
  const [imgURL, setImgURL] = useState("");
  // Get a reference to the storage service, which is used to create references in your storage bucket

  // Create a storage reference from our storage service
  var storageRef = storage.ref();

  // Create a reference to feeds1_avata_icon.jpg
  var flagRef = storageRef.child("feeds1_avata_icon.jpg");

  function loadImg(event) {
    // get file from input
    var file = URL.createObjectURL(event.target.files[0]);

    // put file to storage
    flagRef
      .put(file, {
        contentType: "image/jpeg",
      })
      .then((snapshot) => {
        console.log("Uploaded a blob or file!");
      });
  }

  // if click button, render image from Firebase-storage to <img tag
  function handleDownload() {
    flagRef.getDownloadURL().then((url) => {
      setImgURL(url);
    });
  }

  return (
    <div>
      <input type="file" id="uploadFile" onChange={(e) => loadImg(e)} />
      <img src={imgURL} alt="" id="image" />
      <input type="button" value="Button" onClick={handleDownload} name="" />
    </div>
  );
}
export default ProcessImage;
