// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF7xiO282COihW4qygAqJAHn0Yw6yVSL8",
  authDomain: "assignment-11-57128.firebaseapp.com",
  projectId: "assignment-11-57128",
  storageBucket: "assignment-11-57128.firebasestorage.app",
  messagingSenderId: "378325392233",
  appId: "1:378325392233:web:8ff2f747131e8f462b7bf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)