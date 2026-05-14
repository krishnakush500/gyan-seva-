// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAq1iPy7MHA_0MtnZnjHGSMq0Wfd9HlzDw",
  authDomain: "gyan-seva-web.firebaseapp.com",
  projectId: "gyan-seva-web",
  storageBucket: "gyan-seva-web.firebasestorage.app",
  messagingSenderId: "568662476769",
  appId: "1:568662476769:web:a77176e0b8094d845c34a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
