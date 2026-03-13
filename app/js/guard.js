import { auth } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

onAuthStateChanged(auth, user => {

  const protectedPage = document.body.dataset.protected;

  if (protectedPage && !user) {
    window.location.href = "/login.html";
  }

  if (user) {
    const el = document.getElementById("user-email");
    if (el) el.textContent = user.email;
  }

});