import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_uBNfCbsq4-nvHUp81RqamAOHvXy9ev0",
  authDomain: "cooking-app-42208.firebaseapp.com",
  projectId: "cooking-app-42208",
  storageBucket: "cooking-app-42208.appspot.com",
  messagingSenderId: "405444464297",
  appId: "1:405444464297:web:c70d5cce4c7ccb0d83a3b8",
  measurementId: "G-5SFQ01M237",
};

initializeApp(firebaseConfig);
const auth = getAuth();

//LOGIN AND REGISTER METHODS
//Register with mail
export const registerWithEmail = (email, password, userName) => {
console.log(userName)
  createUserWithEmailAndPassword(auth, email, password);
};

//Login with mail
export const loginWithEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};

//CHECK AUTH STATE
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    //const uid = user.uid;
  } else {
    // User is signed out
  }
});
