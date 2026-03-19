// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwQxlRH-L0z2BWlhdd8f6tAggOkKZGxvg",
  authDomain: "netflixgpt-57fdc.firebaseapp.com",
  projectId: "netflixgpt-57fdc",
  storageBucket: "netflixgpt-57fdc.firebasestorage.app",
  messagingSenderId: "375703241225",
  appId: "1:375703241225:web:bad479125c6a0cf1f8eed8",
  measurementId: "G-6DWGTFVS1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();