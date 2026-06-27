// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// ✅ Firebase Config (Mobile + Web dono ke liye same)
const firebaseConfig = {
  apiKey: "AIzaSyCtrUQKvT-B66fXgxAF8yJA1e_9i98ddpA",
  authDomain: "gyan-seva.firebaseapp.com",
  projectId: "gyan-seva",
  storageBucket: "gyan-seva.firebasestorage.app",
  messagingSenderId: "451862212887",
  appId: "1:451862212887:web:637fd8785c4c01bd448752",
  measurementId: "G-R375P3YCHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };
