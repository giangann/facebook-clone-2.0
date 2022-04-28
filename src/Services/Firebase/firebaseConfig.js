import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBU8gkh5H0NwfTTbZ-VQNaF8lAcdkyV31Y",
  authDomain: "facebook-clone-f4938.firebaseapp.com",
  projectId: "facebook-clone-f4938",
  storageBucket: "facebook-clone-f4938.appspot.com",
  messagingSenderId: "584659342846",
  appId: "1:584659342846:web:b1b19535364ca4f1e6dcaf",
  measurementId: "G-FQH967H0YJ",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const storage = getStorage(firebaseApp)
const auth = firebaseApp.auth();
const providers = new firebase.auth.GoogleAuthProvider();
var storage = firebaseApp.storage();
export { auth, providers, storage, firebaseConfig };
export default db;
