// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2JY0d5L84gtGCsO4JJaRTT1noUMMjmbY",
  authDomain: "cozy-house-9d154.firebaseapp.com",
  databaseURL: "https://cozy-house-9d154-default-rtdb.firebaseio.com",
  projectId: "cozy-house-9d154",
  storageBucket: "cozy-house-9d154.appspot.com",
  messagingSenderId: "942843098137",
  appId: "1:942843098137:web:14c308ae10c3ba6bb66688",
  measurementId: "G-38QBHMD4QV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics);