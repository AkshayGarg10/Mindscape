// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHKGDnm2cnNyreWKDiis0BfDkiAtKLVhY",
  authDomain: "teen-mental-health-app.firebaseapp.com",
  projectId: "teen-mental-health-app",
  storageBucket: "teen-mental-health-app.appspot.com",
  messagingSenderId: "329386662476",
  appId: "1:329386662476:web:6012a7383667e51d6e32e9",
  measurementId: "G-E30B2HM8M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
