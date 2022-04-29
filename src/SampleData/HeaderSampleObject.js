import MessageIcon from "@mui/icons-material/Message";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import { firebaseConfig } from "../Services/Firebase/firebaseConfig";

function importAll(r) {
  return r.keys().map(r);
}

// return array of image address ()
function loadImageFromFolder() {
  let images = importAll(
    require.context("../../public/image/Widget_Image/Contacts", false, /\.(png|jpe?g|svg)$/)
  );
  return images;
}

const images = loadImageFromFolder();

// add full URL for images
// images.map((img) => firebaseConfig.projectId + ".web.app" + img);

const chatList = [
  {
    userImage: images[1],
    userName: "Kevin De Bruyne",
    userChat: "Lorem ipsum dolor sit amet ",
  },
  {
    userImage: images[1],
    userName: "Peter Parker",
    userChat: "Lorem ipsum dolor sit amet ",
  },
  {
    userImage: images[2],
    userName: "Ngọc Ngọc",
    userChat: "Lorem ipsum dolor sit amet ",
  },
  {
    userImage: images[3],
    userName: "Rumelo Lukaku",
    userChat: "Lorem ipsum dolor sit amet ",
  },
  {
    userImage: images[4],
    userName: "Herry Kane",
    userChat: "Lorem ipsum dolor sit amet ",
  },
  {
    userImage: images[5],
    userName: "Kevin De Bruyne",
    userChat: "Lorem ipsum dolor sit amet ",
  },
];

// multi-level menu dropdown
export const headerRightSample = [
  {
    headerRightIcon: <AppsIcon className="header__icon" />,
    headerRightSubmenu: {
      title: "Menu",
      content: chatList,
    },
    isSelected: false,
  },
  {
    headerRightIcon: <MessageIcon className="header__icon" />,
    headerRightSubmenu: {
      title: "Messenger",
      content: chatList,
    },
    isSelected: false,
  },
  {
    headerRightIcon: <NotificationsIcon className="header__icon" />,
    headerRightSubmenu: {
      title: "Notifications",
      content: chatList,
    },
    isSelected: false,
  },
  {
    headerRightIcon: <ExpandMoreIcon className="header__icon" />,
    headerRightSubmenu: {
      title: "Account",
      content: chatList,
    },
    isSelected: false,
  },
];
