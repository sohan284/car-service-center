// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWCxo3gBIkpl4Z30uwfjtMlYDVY078vV8",
  authDomain: "genious-car-service-304f3.firebaseapp.com",
  projectId: "genious-car-service-304f3",
  storageBucket: "genious-car-service-304f3.appspot.com",
  messagingSenderId: "313901617511",
  appId: "1:313901617511:web:7c9a1ee2cd4741addadfc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;