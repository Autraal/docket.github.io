
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
var firebaseConfig = {
    apiKey: "AIzaSyDBZQZ5HYy7zB_DTGf1g4iKDrXjTruqdK4",
    authDomain: "docket-916d2.firebaseapp.com",
    projectId: "docket-916d2",
    storageBucket: "docket-916d2.appspot.com",
    messagingSenderId: "622793346377",
    appId: "1:622793346377:web:71c1a5df90e97ccd721e98",
    measurementId: "G-ZK0RNMGZ7E"
  };
  

  //Initialize Firebase

  

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();

