import React from "react";
import DropDown from "./DropDown";
import "./Header.css";

function MultiLevelMenu({ menu, toggleDropDown, resetDropDown }) {
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
            <div id="headerRight__dropDown">
              <DropDown
                key={index}
                dropdown={item.headerRightSubmenu}
                index={index}
                toggleDropDown={toggleDropDown}
                resetDropDown={resetDropDown}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
}

export default MultiLevelMenu;
