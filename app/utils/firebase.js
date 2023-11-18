// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGgMPi0vCEbWUfdJC38-MjFcLS9d5FRLM",
  authDomain: "revitalize-massage.firebaseapp.com",
  projectId: "revitalize-massage",
  storageBucket: "revitalize-massage.appspot.com",
  messagingSenderId: "123171693841",
  appId: "1:123171693841:web:e6994ac4d8a04ad50398b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);