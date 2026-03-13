import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCSoWzYenYYsnuNwneIawjfZmLKN-cGtpQ",
    authDomain: "fp-cameroon.firebaseapp.com",
    projectId: "fp-cameroon",
    storageBucket: "fp-cameroon.firebasestorage.app",
    messagingSenderId: "377846029241",
    appId: "1:377846029241:web:0ada36ee0b2bd3feac3468",
    measurementId: "G-E2QH5ZV8PL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };