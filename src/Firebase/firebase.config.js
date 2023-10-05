// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWYRzeCrKZatWikB_A8vLPvgmoyMSbuP4",
  authDomain: "dragun-news-auth.firebaseapp.com",
  projectId: "dragun-news-auth",
  storageBucket: "dragun-news-auth.appspot.com",
  messagingSenderId: "21203250861",
  appId: "1:21203250861:web:73814b1b4d720507f06024"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;