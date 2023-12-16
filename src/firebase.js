// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJfoVHaUEomBO1uQc5meS2uhUWBRIJ9f4",
  authDomain: "chillpilltv.firebaseapp.com",
  databaseURL: "https://chillpilltv-default-rtdb.firebaseio.com",
  projectId: "chillpilltv",
  storageBucket: "chillpilltv.appspot.com",
  messagingSenderId: "300140418722",
  appId: "1:300140418722:web:e73e9bae435274767929fb",
  measurementId: "G-WSTQBTVLL9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
