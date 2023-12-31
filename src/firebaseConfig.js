// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJqR9ctMQSdxVQWn81XhZyyaY_4kY8Tu8",
  authDomain: "whisper-23a24.firebaseapp.com",
  projectId: "whisper-23a24",
  storageBucket: "whisper-23a24.appspot.com",
  messagingSenderId: "267377940430",
  appId: "1:267377940430:web:296d9f1e62eac26f4fbd9f",
  measurementId: "G-9Z7CYSFZMX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
