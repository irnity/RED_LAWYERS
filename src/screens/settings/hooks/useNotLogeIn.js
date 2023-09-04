import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import React, { useEffect, useState } from "react"
import { auth, firestoreDatabase } from "../../../services/firebase"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { useDispatch, useSelector } from "react-redux"
import { authActions } from "../../../redux/authSlice"

const useNotLogeIn = ({ navigation }) => {
  const dispatch = useDispatch()
  const { isLogedIn, uid, first_name, last_name, certificateNumber } =
    useSelector((state) => state.auth)

  const [isLoading, setIsLoading] = useState(true)
  // input states
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  // error
  const [error, setError] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError("")
    }, 2000)
    return () => clearTimeout(timeout)
  }, [error])

  // login
  const handleSignIn = async () => {
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

      dispatch(authActions.isLogedInCheck(data))

      if (await isAdmin) {
        await navigation.navigate("Чат", { screen: "AdminChat" })
      } else {
        await navigation.navigate("Чат", { screen: "UserChat" })
      }
    } catch (error) {
      setError("Невірний логін або пароль")
      const errorCode = error.code
      const errorMessage = error.message
      console.log("code:", errorCode, "message:", errorMessage)
    }
  }

  // state for sign in or change information
  const [firstNameInput, setFirstNameInput] = useState("")
  const [lastNameInput, setLastNameInput] = useState("")
  const [certificateInput, setCertificateInput] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")

  const handleCreateUser = async () => {
    if (
      Password === passwordConfirm &&
      Password.length >= 8 &&
      Email !== "" &&
      firstNameInput !== "" &&
      lastNameInput !== ""
    ) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          Email,
          Password
        )
        await setDoc(doc(firestoreDatabase, "users", userCredential.user.uid), {
          email: Email,
          first_name: firstNameInput,
          last_name: lastNameInput,
          certificate: certificateInput,
        })
        await setDoc(
          doc(firestoreDatabase, "messages", userCredential.user.uid),
          {
            messages: [],
          }
        )
        navigation.navigate("Профіль", { screen: "SignIn" })
      } catch (error) {
        const errorCode = error.code
        const errorMessage = error.message
        alert(errorCode, errorMessage)
        console.log(error)
      }
    } else {
      Alert.alert(
        "Помилка",
        "Пароль повинен містити не менше 8 символів і співпадати з підтвердженням"
      )
    }
  }

  const handleGoToSignIn = () => {
    navigation.navigate("Профіль", { screen: "SignIn" })
  }

  return {
    isLoading,
    Email,
    setEmail,
    Password,
    setPassword,

    firstNameInput,
    setFirstNameInput,
    lastNameInput,
    setLastNameInput,
    certificateInput,
    setCertificateInput,

    passwordConfirm,
    setPasswordConfirm,

    error,
    handleCreateUser,
    handleSignIn,
    handleGoToSignIn,
  }
}
export default useNotLogeIn
