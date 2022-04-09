import "./App.css";
import HomeIcon from "@mui/icons-material/Home";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import Widget from "./Widget";
import { useEffect } from "react";

function App() {

  const [{user}, setUser] = useStateValue()
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
              {/* <Widget /> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
