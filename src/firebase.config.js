// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgul9Yw3M2T4NPkXHUZvhBgYPKH7haULY",
  authDomain: "ink-scape-10.firebaseapp.com",
  projectId: "ink-scape-10",
  storageBucket: "ink-scape-10.appspot.com",
  messagingSenderId: "940230547157",
  appId: "1:940230547157:web:31bda94b0e9e806c7d345c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;