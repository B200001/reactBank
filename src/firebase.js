// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTSJRfLgdjAAh5LFNoqVaHSVULt-oqtmw",
  authDomain: "editable-table-a6fbd.firebaseapp.com",
  databaseURL: "https://editable-table-a6fbd-default-rtdb.firebaseio.com",
  projectId: "editable-table-a6fbd",
  storageBucket: "editable-table-a6fbd.appspot.com",
  messagingSenderId: "680602135988",
  appId: "1:680602135988:web:1b803c0060165d343356e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);