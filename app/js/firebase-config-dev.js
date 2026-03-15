// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq_iEOmthuDx2kRUCxxwiFrA4z4Cw66Vc",
  authDomain: "dev-fp-cameroon.firebaseapp.com",
  projectId: "dev-fp-cameroon",
  storageBucket: "dev-fp-cameroon.firebasestorage.app",
  messagingSenderId: "255966225885",
  appId: "1:255966225885:web:6e1298e83c34347cb60234"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };