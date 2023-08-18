// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-l7Sq4zyMbYehDahFw-h-r3ijrcHJ-cA",
  authDomain: "pcweb6-1b93c.firebaseapp.com",
  projectId: "pcweb6-1b93c",
  storageBucket: "pcweb6-1b93c.appspot.com",
  messagingSenderId: "352631288182",
  appId: "1:352631288182:web:45158c1e67f87eaa8d4a57",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
