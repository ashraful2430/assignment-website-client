import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqsUgQ_OautjUJLJxoy2t2AFoxAA6UzrM",
  authDomain: "learn-it-write-it.firebaseapp.com",
  projectId: "learn-it-write-it",
  storageBucket: "learn-it-write-it.appspot.com",
  messagingSenderId: "849537468355",
  appId: "1:849537468355:web:610c36fc5266733f035f76",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
