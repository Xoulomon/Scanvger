import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC4j_qk7PwQw8vLR_as9st5lcwmsOJrWLA",
  authDomain: "scavngr-f677a.firebaseapp.com",
  projectId: "scavngr-f677a",
  storageBucket: "scavngr-f677a.firebasestorage.app",
  messagingSenderId: "599985557950",
  appId: "1:599985557950:web:a9425b22a7da5c89ff29ef",
  measurementId: "G-6QP36XM2E3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);