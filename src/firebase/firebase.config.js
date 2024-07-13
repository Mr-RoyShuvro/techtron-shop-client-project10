// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfAaIrfAVe0jTotC_dVSHN-fsDA8z4-PY",
  authDomain: "techtron-shop.firebaseapp.com",
  projectId: "techtron-shop",
  storageBucket: "techtron-shop.appspot.com",
  messagingSenderId: "757534168476",
  appId: "1:757534168476:web:2fe107818b307826486459"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;