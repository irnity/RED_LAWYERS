import { initializeApp } from "firebase/app"
import { GoogleAuthProvider, getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIi9Z-Xry214RYKditdB-nTRpi7K6XpH0",
  authDomain: "red-lawyers.firebaseapp.com",
  projectId: "red-lawyers",
  storageBucket: "red-lawyers.appspot.com",
  messagingSenderId: "76389770229",
  appId: "1:76389770229:web:1b7f25760bb31d48e3b6bc",
}

export const FIREBASE_APP = initializeApp(firebaseConfig)

export const FIREBASE_AUTH = getAuth(FIREBASE_APP)

export const googleProvider = new GoogleAuthProvider()

export const FIREBASE_FIRESTORE = getFirestore(FIREBASE_APP)
