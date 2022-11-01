// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDclt_Qt6rsX3FjqbgZ3IyZvjPqw9PFITQ",
  authDomain: "moviehub-62987.firebaseapp.com",
  projectId: "moviehub-62987",
  storageBucket: "moviehub-62987.appspot.com",
  messagingSenderId: "1016280537484",
  appId: "1:1016280537484:web:36fbbceed56d1abe751ea9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);