import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJ7U-cWHqjyVyh9fY_shcaoydoveR8DGc",
  authDomain: "pie-tracker.firebaseapp.com",
  projectId: "pie-tracker",
  storageBucket: "pie-tracker.appspot.com",
  messagingSenderId: "837360597684",
  appId: "1:837360597684:web:64faca381666c8204e75e1",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore();
