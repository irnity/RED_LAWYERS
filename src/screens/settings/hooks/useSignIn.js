import { doc, setDoc, updateDoc } from "firebase/firestore"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { authActions } from "../../../redux/authSlice"
import { createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { Alert } from "react-native"
import { auth } from "../../../services/firebase"

const useSignIn = ({ navigation }) => {
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

  useEffect(() => {
    if (isLogedIn) {
      setFirstNameInput(first_name)
      setLastNameInput(last_name)
      setCertificateInput(certificateNumber)
    }
  }, [])

  const handleCreateUser = async () => {
    if (
      password === passwordConfirm &&
      password.length >= 8 &&
      email !== "" &&
      firstNameInput !== "" &&
      lastNameInput !== ""
    ) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )
        await setDoc(doc(firestoreDatabase, "users", userCredential.user.uid), {
          email: email,
          first_name: firstNameInput,
          last_name: lastNameInput,
          certificate: "",
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

  const ChangeName = async () => {
    if (isLogedIn) {
      ref = doc(firestoreDatabase, "users", uid)
      await updateDoc(ref, {
        first_name: firstNameInput,
        last_name: lastNameInput,
        certificate: certificateInput,
      })
      dispatch(authActions.changeCertificate(certificateInput))
      navigation.navigate("Профіль", { screen: "LoggIn" })
    } else {
      Alert.alert("Помилка", "Ви не увійшли в систему")
    }
  }

  const handleGoToChangeName = () => {
    navigation.navigate("Профіль", { screen: "ChangeName" })
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

    handleSignOut,
    handleGoToChangeName,
  }
}

export default useSignIn
