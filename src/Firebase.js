// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB9bSIm_M6w2n5Ibh8msqTAdBDup1tk_k",
  authDomain: "login-quiz-9c0e1.firebaseapp.com",
  projectId: "login-quiz-9c0e1",
  storageBucket: "login-quiz-9c0e1.appspot.com",
  messagingSenderId: "55856935309",
  appId: "1:55856935309:web:b496339624b67ca29e8dc4",
  measurementId: "G-NNM0EB2W91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
