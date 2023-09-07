import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import React, { useEffect, useState } from "react"
import { auth, firestoreDatabase } from "../../../services/firebase"
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore"
import { useDispatch, useSelector } from "react-redux"
import { authActions } from "../../../redux/authSlice"
import { Alert } from "react-native"

const useNotLogeIn = ({ navigation }) => {
  const dispatch = useDispatch()
  const { isAdmin, isLogedIn, uid, first_name, last_name, certificateNumber } =
    useSelector((state) => state.auth)

  const [isLoading, setIsLoading] = useState(true)
  // state for login
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  // state for signIn
  const [firstNameInput, setFirstNameInput] = useState("")
  const [lastNameInput, setLastNameInput] = useState("")
  const [certificateInput, setCertificateInput] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  // error
  const [error, setError] = useState("")

  // loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // error timeout
  useEffect(() => {
    const timeout = setTimeout(() => {
      setError("")
    }, 2000)
    return () => clearTimeout(timeout)
  }, [error])

  // login
  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, Email, Password)
      const data = {
        uid: user.user.uid,
        first_name: "",
        last_name: "",
        certificate: "",
      }

      const docRef = doc(firestoreDatabase, "users", user.user.uid)
      const docSnap = await getDoc(docRef)
      const information = docSnap.data()

      data.first_name = information.first_name
      data.last_name = information.last_name
      data.certificate = information.certificate

      navigation.navigate("Чат")

      dispatch(authActions.isLogedInCheck(data))
    } catch (error) {
      setError("Невірний логін або пароль")
      const errorCode = error.code
      const errorMessage = error.message
      console.log("code:", errorCode, "message:", errorMessage)
    }
  }

  // signIn
  const handleCreateUser = async () => {
    if (
      Password === passwordConfirm &&
      Password.length >= 8 &&
      Email !== "" &&
      firstNameInput !== "" &&
      lastNameInput !== ""
    ) {
      try {
        const user = await createUserWithEmailAndPassword(auth, Email, Password)
        const data = {
          uid: user.user.uid,
          first_name: firstNameInput,
          last_name: lastNameInput,
          certificate: [],
        }
        await setDoc(doc(firestoreDatabase, "users", user.user.uid), {
          email: Email,
          first_name: firstNameInput,
          last_name: lastNameInput,
          certificate: [],
          lastMessageTime: Timestamp.now(),
          lastMessage: "",
          unreadMessages: 0,
        })
        await setDoc(doc(firestoreDatabase, "messages", user.user.uid), {
          messages: [],
        })
        await dispatch(authActions.isLogedInCheck(data))
        await navigation.navigate("Чат", { screen: "UserChat" })
      } catch (error) {
        // Alert.alert("Помилка", `${Перевірте правильність написання даних}`)
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("Помилка", "Ця пошта вже зареєстрована")
        } else {
          Alert.alert("Помилка", "Перевірте правильність написання даних")
        }
      }
    } else {
      Alert.alert(
        "Помилка",
        "Пароль повинен містити не менше 8 символів і співпадати з підтвердженням"
      )
    }
  }

  // handle restore password
  const handleRestorePassword = async () => {
    try {
      await sendPasswordResetEmail(auth, Email)
      handleGoToLogin()
      await dispatch(
        authActions.changeSuccess({ success: true, message: "Перевірте пошту" })
      )
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      Alert.alert("Помилка", "Перевірте правильність написання даних")
    }
  }

  // go to login
  const handleGoToLogin = () => {
    navigation.navigate("Профіль", { screen: "LogIn" })
  }

  // go to signIn
  const handleGoToSignIn = () => {
    navigation.navigate("Профіль", { screen: "SignIn" })
  }

  // go to restore password
  const handleGoToRestorePassword = () => {
    navigation.navigate("Профіль", { screen: "RestorePassword" })
  }

  return {
    isLoading,
    // login
    Email,
    setEmail,
    Password,
    setPassword,
    // signIn
    firstNameInput,
    setFirstNameInput,
    lastNameInput,
    setLastNameInput,
    certificateInput,
    setCertificateInput,
    passwordConfirm,
    setPasswordConfirm,

    error,

    handleRestorePassword,
    handleGoToLogin,
    handleCreateUser,
    handleLogin,
    handleGoToRestorePassword,
    handleGoToSignIn,
  }
}
export default useNotLogeIn
