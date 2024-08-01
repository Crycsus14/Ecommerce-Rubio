import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDQH964Iww8R3hRv_6iabrxra-uZcR3wL8",
  authDomain: "program-autos.firebaseapp.com",
  projectId: "program-autos",
  storageBucket: "program-autos.appspot.com",
  messagingSenderId: "527660231345",
  appId: "1:527660231345:web:836c1dc97a3bc6c91d5090",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
