// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXlUCfzSuo3xTNv5HfdVBJpxIFyh6jbkE",
  authDomain: "personal-expense-tracker-9dea7.firebaseapp.com",
  projectId: "personal-expense-tracker-9dea7",
  storageBucket: "personal-expense-tracker-9dea7.firebasestorage.app",
  messagingSenderId: "752427443514",
  appId: "1:752427443514:web:c495f3577f4058f1de9c03",
  measurementId: "G-N6S8JSY5YD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);