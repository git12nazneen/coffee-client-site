// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX9YScQUnlrygDUH01qjgr3RW6o5vCakg",
  authDomain: "coffee-with-mongo.firebaseapp.com",
  projectId: "coffee-with-mongo",
  storageBucket: "coffee-with-mongo.appspot.com",
  messagingSenderId: "420339471829",
  appId: "1:420339471829:web:6b2052d8c1f57f392b595c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;