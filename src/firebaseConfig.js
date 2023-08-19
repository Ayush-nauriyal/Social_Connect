// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWZz4JXPpiZgls8LnnoDhu-wcD-9mmSds",
  authDomain: "social-connect-708cf.firebaseapp.com",
  projectId: "social-connect-708cf",
  storageBucket: "social-connect-708cf.appspot.com",
  messagingSenderId: "1065981886650",
  appId: "1:1065981886650:web:2504fd2af5fe0b3ef10283",
  measurementId: "G-NZ1LC9SJY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore=getFirestore(app);
const auth= getAuth(app);

const storage = getStorage(app);
export { auth, app, firestore, storage };