import React from "react";
import './SidebarRow.css'


function SidebarRow({ icon, title }) {
  return (
    <div className="sidebar__row">
      <div className="sidebar__icon">{icon}</div>
      <span className="sidebar__title">{title}</span>
    </div>
  );
}

export default SidebarRow;
