import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const APIKEY = process.env.FIREBASE_API_KEY;

const firebaseConfig = firebase.initializeApp({
  apiKey: APIKEY,
  authDomain: "grindstone-jturner.firebaseapp.com",
  databaseURL: "",
  projectId: "grindstone-jturner",
  storageBucket: "grindstone-jturner.appspot.com",
  messagingSenderId: "8363354581",
  appId: "1:836335458081:web:3fbd3c80794cdf35923d1060",
});

export { firebaseConfig as firebase };
