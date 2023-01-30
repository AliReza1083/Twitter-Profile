import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, TwitterAuthProvider, signInWithPopup } from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const storage = getStorage();
export const auth = getAuth();

const provider = new TwitterAuthProvider();

export const signWithTwitter = () => signInWithPopup(auth, provider);
