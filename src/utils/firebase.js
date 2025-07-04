// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbvjOSuZyxIpBPR6MXPyoeJV4UKqyzJuE",
  authDomain: "my-guestbook-demo-890d9.firebaseapp.com",
  projectId: "my-guestbook-demo-890d9",
  storageBucket: "my-guestbook-demo-890d9.firebasestorage.app",
  messagingSenderId: "715954290413",
  appId: "1:715954290413:web:d8810bdcf8decb640a56e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)