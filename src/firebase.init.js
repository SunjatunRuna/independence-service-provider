// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx4TNc7nj2p_ICGX8GcRDHE7FwXUfbho4",
  authDomain: "service-provider-auth.firebaseapp.com",
  projectId: "service-provider-auth",
  storageBucket: "service-provider-auth.appspot.com",
  messagingSenderId: "741988624206",
  appId: "1:741988624206:web:15119199a099577034a01f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;