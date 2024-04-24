import { initializeApp } from "firebase/app";
import { getFirestore }   from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSD2AQa2OwZGQW5mPSNBVQPRskEIPOL78",
  authDomain: "meet-ur-teacher.firebaseapp.com",
  databaseURL: "https://meet-ur-teacher-default-rtdb.firebaseio.com",
  projectId: "meet-ur-teacher",
  storageBucket: "meet-ur-teacher.appspot.com",
  messagingSenderId: "341506206962",
  appId: "1:341506206962:web:54140243b82ebd018af46b",
  measurementId: "G-E5J98KQLLP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
