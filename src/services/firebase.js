import { initializeApp } from "firebase/app"
import {
  getAuth,
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth"
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"
// import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChbeE60Cr-dzmaq2tZ2mh-gTrNMdq85n8",
  authDomain: "redlawyers-445ba.firebaseapp.com",
  projectId: "redlawyers-445ba",
  storageBucket: "redlawyers-445ba.appspot.com",
  messagingSenderId: "155594055583",
  appId: "1:155594055583:web:87ac72c1b0fbeffe1fa7aa",
}

export const FIREBASE_APP = initializeApp(firebaseConfig)

export const auth = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
})
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP)

// export const googleProvider = new GoogleAuthProvider()

// export const FIREBASE_FIRESTORE = getFirestore(FIREBASE_APP)
