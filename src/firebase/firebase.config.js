
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJyyCNLwlK4GVKums4R2zV3IGmfTgmgqg",
  authDomain: "arts-and-craft-6d550.firebaseapp.com",
  projectId: "arts-and-craft-6d550",
  storageBucket: "arts-and-craft-6d550.appspot.com",
  messagingSenderId: "91650639685",
  appId: "1:91650639685:web:871e0b61624a3c6ea1602c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;