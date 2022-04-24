import React from "react";
import "./Login.css";
import { auth, providers } from "../Services/Firebase/firebaseConfig";
import { useStateValue } from "../Services/ContextAPI/StateProvider";
import { actionTypes } from "../Services/ContextAPI/reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(providers)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="loginPage">
      <div className="loginPage__logo">
        <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" />
      </div>
      <div className="loginPage__loginBtn">
        <button onClick={signIn}>Login with Gmail</button>
      </div>

      {/* <input type="submit" name="login" id="login" onClick={signIn}/> */}
    </div>
  );
}

export default Login;
