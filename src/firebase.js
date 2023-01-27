// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDOKm27l9Hz08g1VtsGEUWM9MkM2u5RYg",
  authDomain: "patria-grande.firebaseapp.com",
  projectId: "patria-grande",
  storageBucket: "patria-grande.appspot.com",
  messagingSenderId: "1064733011718",
  appId: "1:1064733011718:web:35ceebad061458071bf887",
  measurementId: "G-LEP7FG323B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);