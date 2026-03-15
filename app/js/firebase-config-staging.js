// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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