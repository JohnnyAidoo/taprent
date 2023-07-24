// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_1UcXSaFMHTuY2JOPvJ-8vKGFJqDzeXI",
  authDomain: "onerent-2d4b2.firebaseapp.com",
  projectId: "onerent-2d4b2",
  storageBucket: "onerent-2d4b2.appspot.com",
  messagingSenderId: "255919672394",
  appId: "1:255919672394:web:785c300c921a968007aab3",
  measurementId: "G-VJCWW5TCVC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
 