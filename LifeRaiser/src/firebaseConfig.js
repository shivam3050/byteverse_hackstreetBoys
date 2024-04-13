// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD75ndB8Q40Tm__tF32vKoqmVJ2zAWBACw",
  authDomain: "life-raiser.firebaseapp.com",
  databaseURL: "https://life-raiser-default-rtdb.firebaseio.com",
  projectId: "life-raiser",
  storageBucket: "life-raiser.appspot.com",
  messagingSenderId: "100922496120",
  appId: "1:100922496120:web:9c522932e7362c5640c98d",
  databaseURL: "https://life-raiser-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);