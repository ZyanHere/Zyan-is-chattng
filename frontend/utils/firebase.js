// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cortextai-f288e.firebaseapp.com",
  projectId: "cortextai-f288e",
  storageBucket: "cortextai-f288e.firebasestorage.app",
  messagingSenderId: "939815307161",
  appId: "1:939815307161:web:e10430cd8336f06dbb7508",
  measurementId: "G-QKFP0HY8TM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();