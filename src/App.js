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

  return (
    <div>
      {!user ? (
        <Login />
      ) : (
        <>
          <div className="app__header">
            <Header />
          </div>
          <div className="app__body">
            <div className="app__sidebar">
              <Sidebar />
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
