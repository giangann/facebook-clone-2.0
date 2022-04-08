import React from "react";
import "./Login.css";
import { auth, providers } from "./firebaseConfig";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state,dispatch] = useStateValue()

  const signIn = () => {
    auth
      .signInWithPopup(providers)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        })
        // console.log(result.user.photoURL)
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <input type="submit" name="login" id="login" onClick={signIn}/>
    </div>
  );
}

export default Login;
