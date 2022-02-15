import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "",
  authDomain: "grindstone-jturner.firebaseapp.com",
  databaseURL: "",
  projectId: "grindstone-jturner",
  storageBucket: "grindstone-jturner.appspot.com",
  messagingSenderId: "836335458081",
  appId: "1:836335458081:web:3fbd3c794cdf35923d1060",
});

export { firebaseConfig as firebase };
