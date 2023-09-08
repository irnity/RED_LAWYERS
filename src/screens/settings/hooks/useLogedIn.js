import { doc, setDoc, updateDoc } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { authActions } from "../../../redux/authSlice"
import { createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { Alert } from "react-native"
import { auth, firestoreDatabase } from "../../../services/firebase"

const useLogedIn = ({ navigation }) => {
  const dispatch = useDispatch()

  const { isLogedIn, uid, first_name, last_name, certificateNumber } =
    useSelector((state) => state.auth)

  // state for sign in or change information
  const [firstNameInput, setFirstNameInput] = useState("")
  const [lastNameInput, setLastNameInput] = useState("")
  const [certificateInput, setCertificateInput] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")

  const [error, setError] = useState("")

  const [docsTM, setDocsTM] = useState([])

  useEffect(() => {
    if (isLogedIn) {
      setFirstNameInput(first_name)
      setLastNameInput(last_name)
      setCertificateInput(certificateNumber)
      setDocsTM(certificateNumber)
    }
  }, [])

  const handleChangeName = async () => {
    if (isLogedIn) {
      ref = doc(firestoreDatabase, "users", uid)
      await updateDoc(ref, {
        first_name: firstNameInput.trim(),
        last_name: lastNameInput.trim(),
      })
      dispatch(
        authActions.changeName({
          first_name: firstNameInput.trim(),
          last_name: lastNameInput.trim(),
        })
      )
      navigation.navigate("Профіль", { screen: "Menu" })
      dispatch(
        authActions.changeSuccess({ success: true, message: "Дані змінені" })
      )
    } else {
      Alert.alert("Помилка", "Ви не увійшли в систему")
    }
  }

  const handlePush = async () => {
    if (isLogedIn) {
      const toLowLength = docsTM.every((doc) => doc.documentId.length >= 8)
      // console.log(docsTM, toLowLength)
      //
      try {
        if (toLowLength) {
          console.log(docsTM)
          ref = doc(firestoreDatabase, "users", uid)
          await updateDoc(ref, {
            certificate: docsTM,
          })
          dispatch(authActions.changeCertificate(docsTM))
          navigation.navigate("Профіль", { screen: "Menu" })
          dispatch(
            authActions.changeSuccess({
              success: true,
              message: "Дані змінені",
            })
          )
        } else {
          return
        }
      } catch (error) {
        console.log(error)
        Alert.alert("Розмір ТМ повинен бути більше за 7 символів")
      }
    }
  }

  const handleGoToMenu = () => {
    navigation.navigate("Профіль", { screen: "Menu" })
  }

  const handleGoToChangeName = () => {
    navigation.navigate("Профіль", { screen: "ChangeName" })
  }

  const handleGoToChangeTM = () => {
    navigation.navigate("Профіль", { screen: "ChangeDocs" })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out")
        dispatch(authActions.signOut())
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return {
    isLogedIn,
    docsTM,
    setDocsTM,

    firstNameInput,
    setFirstNameInput,
    lastNameInput,
    setLastNameInput,
    certificateInput,
    setCertificateInput,

    email,
    setEmail,
    password,
    setPassword,
    passwordConfirm,
    setPasswordConfirm,

    handlePush,
    handleChangeName,
    handleSignOut,
    handleGoToChangeName,

    handleGoToMenu,
    handleGoToChangeTM,
  }
}

export default useLogedIn
