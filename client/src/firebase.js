// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "pure-homes.firebaseapp.com",
  projectId: "pure-homes",
  storageBucket: "pure-homes.appspot.com",
  messagingSenderId: "210380140488",
  appId: "1:210380140488:web:12ccd2c2e5efe33849dafd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);