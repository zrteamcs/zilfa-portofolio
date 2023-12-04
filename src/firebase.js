import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_LcsMbBolRSeHW9RdKzEXMoWBzIOrvr4",
  authDomain: "porto-ba87f.firebaseapp.com",
  projectId: "porto-ba87f",
  storageBucket: "porto-ba87f.appspot.com",
  messagingSenderId: "213562389192",
  appId: "1:213562389192:web:5c13e8ea4eef73a6c4ebfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };