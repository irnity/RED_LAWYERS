import { initializeApp } from "firebase/app"
import { getReactNativePersistence, initializeAuth } from "firebase/auth"
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"

import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChbeE60Cr-dzmaq2tZ2mh-gTrNMdq85n8",
  authDomain: "redlawyers-445ba.firebaseapp.com",
  databaseURL:
    "https://redlawyers-445ba-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "redlawyers-445ba",
  storageBucket: "redlawyers-445ba.appspot.com",
  messagingSenderId: "155594055583",
  appId: "1:155594055583:web:87ac72c1b0fbeffe1fa7aa",
}

export const app = initializeApp(firebaseConfig)

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
})

export const firestoreDatabase = getFirestore(app)
