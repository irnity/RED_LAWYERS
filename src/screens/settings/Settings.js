// import PASSWORD_ADMIN from "@env"
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import { auth, firestoreDatabase } from "../../services/firebase"
import React, { useEffect, useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native"

import { ADMIN_KEY } from "@env"
import { useDispatch, useSelector } from "react-redux"
import { authActions } from "../../redux/authSlice"
import Menu from "./Components/Menu"
import { doc, getDoc } from "firebase/firestore"

function Settings({ navigation }) {
  const dispatch = useDispatch()
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const { isAdmin, isLogedIn, uid } = useSelector((state) => state.auth)

  const [error, setError] = useState("")

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        const user = userCredential.user
        const fetchUser = async () => {
          const data = {
            uid: user.uid,
            first_name: "",
            last_name: "",
            certificate: "",
          }

          const docRef = doc(firestoreDatabase, "users", user.uid)
          const docSnap = await getDoc(docRef)
          const information = docSnap.data()
          data.first_name = information.first_name
          data.last_name = information.last_name
          data.certificate = information.certificate
          dispatch(authActions.isLogedInCheck(data))
        }
        fetchUser()
      })
      .catch((error) => {
        setError("Невірний логін або пароль")
        const errorCode = error.code
        const errorMessage = error.message
        console.log("code:", errorCode, "message:", errorMessage)
        // alert(errorCode, errorMessage)
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out")
        dispatch(authActions.signOut())
      })
      .catch((error) => {
        // An error happened.
        console.log(error)
      })
  }

  const handleGoToSignIn = () => {
    navigation.navigate("Профіль", { screen: "SignIn" })
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError("")
    }, 2000)
    return () => clearTimeout(timeout)
  }, [error])

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {isLogedIn === false ? (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              // autoCapitalize="none"
              value={Email}
              onChangeText={(text) => setEmail(text)}
              style={error === "" ? styles.input : styles.inputError}
            />
            <TextInput
              placeholder="Password"
              value={Password}
              onChangeText={(text) => setPassword(text)}
              style={error === "" ? styles.input : styles.inputError}
            />
            {error && (
              <Text
                style={{ color: "red", textAlign: "center", marginBottom: -26 }}
              >
                {error}
              </Text>
            )}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
              <Text style={styles.buttonText}>Увійти</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("Профіль", { screen: "RestorePassword" })
              }}
            >
              <Text style={styles.buttonText}>Не пам'ятаю пароль</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonOutline]}
              onPress={handleGoToSignIn}
            >
              <Text style={styles.buttonOutlineText}>Зареєструватися</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : null}

      {isLogedIn && (
        <Menu
          handleSignOut={handleSignOut}
          handleGoToSignIn={handleGoToSignIn}
        />
      )}
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  inputError: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "tomato",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "tomato",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  buttonOutline: {
    color: "white",
    marginTop: 5,
    borderColor: "tomato",
    backgroundColor: "white",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "tomato",
    fontWeight: "700",
    fontSize: 16,
  },
})

export default Settings
