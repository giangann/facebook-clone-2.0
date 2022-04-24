import React from "react";
import SidebarRow from "./SidebarRow";
import './Sidebar.css'
import { useStateValue } from "../Services/ContextAPI/StateProvider";
import '../App.css'

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FlagIcon from "@mui/icons-material/Flag";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import StoreSharpIcon from "@mui/icons-material/StoreSharp";
import GroupWorkSharpIcon from "@mui/icons-material/GroupWorkSharp";
import LiveTvSharpIcon from "@mui/icons-material/LiveTvSharp";
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";

function Sidebar() {
  const [{user}, setUser] = useStateValue()
  const title = [
    `${user.displayName}`,
    "Friends",
    "Live Video",
    "Group",
    "Marketplace",
    "Watch",
    "Memories",
    "Saved",
    "Pages",
    "See more",
  ];
  const icons = [
    <img className="user__avatar" src= {user.photoURL} alt="" />,
    <FlagIcon fontSize="medium" />,
    <BookmarkIcon fontSize="medium" />,
    <AccessTimeIcon fontSize="medium" />,
    <LiveTvIcon fontSize="medium" />,
    <StoreSharpIcon fontSize="medium" />,
    <GroupWorkSharpIcon fontSize="medium" />,
    <LiveTvSharpIcon fontSize="medium" />,
    <PeopleSharpIcon fontSize="medium" />,
    <ExpandMoreIcon fontSize="medium" />,
  ];

  const merge = (title, icons) => {
    var mergeArr = [];
    for (let i = 0; i < title.length; i++) {
      mergeArr.push({ icon: icons[i], title: title[i] });
    }
    return mergeArr;
  };

  const rowData = merge(title, icons);

  return (
    <div className="sidebar__wrap">
      {rowData.map((component, index) => (
        <SidebarRow key={index} icon={component.icon} title={component.title} />
      ))}
    </div>
  );
}

export default Sidebar;
