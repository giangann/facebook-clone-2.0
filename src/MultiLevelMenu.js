import React from "react";
import DropDown from "./DropDown";
import "./Header.css";

function MultiLevelMenu({ menu, toggleDropDown }) {
  return (
    <>
      {menu.map((item, index) => (
        <div
          className={
            item.isSelected ? "header__options--selected" : "header__options"
          }
          onClick={() => toggleDropDown(index)}
        >
          {item.headerRightIcon}
          {item.isSelected ? (
            <DropDown key={index} dropdown={item.headerRightSubmenu} />
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
}

export default MultiLevelMenu;
