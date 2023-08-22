import { initializeApp } from "firebase/app"

import { getAuth, GoogleAuthProvider } from "firebase/auth"

import { getFirestore } from "firebase/firestore"

import { getFunctions } from "firebase/functions"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIi9Z-Xry214RYKditdB-nTRpi7K6XpH0",
  authDomain: "red-lawyers.firebaseapp.com",
  projectId: "red-lawyers",
  storageBucket: "red-lawyers.appspot.com",
  messagingSenderId: "76389770229",
  appId: "1:76389770229:web:1b7f25760bb31d48e3b6bc",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const functions = getFunctions(app)

// auth
export const auth = getAuth(app)

// auth google
export const googleProvider = new GoogleAuthProvider()

// data
export const db = getFirestore(app)
