// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwJ521RIuqc-uQk5kdm128vBNh7IAwXa8",
  authDomain: "ema-john-simple-6059e.firebaseapp.com",
  projectId: "ema-john-simple-6059e",
  storageBucket: "ema-john-simple-6059e.appspot.com",
  messagingSenderId: "257274881283",
  appId: "1:257274881283:web:31c0f3cf8b7c696a5d3536"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
