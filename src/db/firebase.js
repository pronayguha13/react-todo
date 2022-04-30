// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz-Dp2KNKf2QGLmgz9lLBX8PvKuWQSX0U",
  authDomain: "react-ts-todo-39f2f.firebaseapp.com",
  projectId: "react-ts-todo-39f2f",
  storageBucket: "react-ts-todo-39f2f.appspot.com",
  messagingSenderId: "219313926040",
  appId: "1:219313926040:web:3b02f1b110a1934408c5ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
