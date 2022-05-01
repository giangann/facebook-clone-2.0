import "./App.css";
import "./Header/Header.css";
import HomeIcon from "@mui/icons-material/Home";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";
import Login from "./Login/Login";
import { useStateValue } from "./Services/ContextAPI/StateProvider";
import Widget from "./Widget/Widget";
import { useEffect, useState } from "react";
import { storage } from "./Services/Firebase/firebaseConfig";

function App() {
  const [{ user }, setUser] = useStateValue();
  const [change, setChange] = useState(0);

  const handleResponsive = () => {
    let sidebar = document.getElementsByClassName("app__sidebar")[0];
    let content = document.getElementsByClassName("app__content")[0];
    let Widget = document.getElementsByClassName("app__widget")[0];
    let body = document.getElementsByClassName("app__body")[0];

    console.log(sidebar);

    if (sidebar.style.display === "none") {
      sidebar.style.display = "block";
      content.style.display = "none";
      Widget.style.display = "none";
      body.style.justifyContent = "flex-start";
    } else {
      sidebar.style.display = "none";
      content.style.display = "block";
      Widget.style.display = "flex";
      body.style.justifyContent = "space-around";
    }

    setChange(change + 1);
    console.log(change)
  };

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <>
          <div className="app__header">
            <Header  handleResponsive = {handleResponsive}/>
          </div>
          <div className="app__body">
            <div className="app__sidebar">
              <Sidebar  />
            </div>

            <div className="app__content">
              <Content />
            </div>
            <div className="app__widget">
              <Widget />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
