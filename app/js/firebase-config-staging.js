// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNZspfE4Jf1vOAI9ql3-abWizJnzp65Wg",
  authDomain: "staging-fp-cameroon.firebaseapp.com",
  projectId: "staging-fp-cameroon",
  storageBucket: "staging-fp-cameroon.firebasestorage.app",
  messagingSenderId: "678312313898",
  appId: "1:678312313898:web:b926ff08a6b6d521b0af53",
  measurementId: "G-0P875Z92LE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth };