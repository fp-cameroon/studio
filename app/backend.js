// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCSoWzYenYYsnuNwneIa
wjfZmLKN-cGtpQ",
authDomain: "fp-cameroon.firebaseapp.com",
projectId: "fp-cameroon",
storageBucket: "fp-cameroon.firebasestorage.app",
messagingSenderId: "377846029241",
appId: "1:377846029241:web:0ada36ee0b2bd3feac3468",
measurementId: "G-E2QH5ZV8PL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
