import {
  Alert,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useEffect, useState } from "react"
// firebase
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"
import { auth, firestoreDatabase } from "../../../services/firebase"
import { doc, setDoc, updateDoc } from "firebase/firestore"
import { useDispatch, useSelector } from "react-redux"
import { authActions } from "../../../redux/authSlice"

const SignIn = ({ navigation }) => {
  const { isLogedIn, uid, first_name, last_name, certificateNumber } =
    useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [first_nameInput, setFirst_nameInput] = useState("")
  const [last_nameInput, setLast_nameInput] = useState("")
  const [certificateInput, setCertificateInput] = useState("")

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")

  const handleSignIn = async () => {
    if (isLogedIn) {
      ref = doc(firestoreDatabase, "users", uid)
      await updateDoc(ref, {
        first_name: first_nameInput,
        last_name: last_nameInput,
        certificate: certificateInput,
      })
      dispatch(authActions.changeCertificate(certificateInput))
      navigation.navigate("Профіль", { screen: "LoggIn" })
    } else {
      if (
        password === passwordConfirm &&
        password.length >= 8 &&
        email !== "" &&
        first_nameInput !== "" &&
        last_nameInput !== ""
      ) {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          )
          await setDoc(
            doc(firestoreDatabase, "users", userCredential.user.uid),
            {
              email: email,
              first_name: first_nameInput,
              last_name: last_nameInput,
              certificate: "",
            }
          )
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
  }

  useEffect(() => {
    if (isLogedIn) {
      setFirst_nameInput(first_name)
      setLast_nameInput(last_name)
      setCertificateInput(certificateNumber)
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Реєстрація</Text>
      <KeyboardAvoidingView style={styles.box} behavior="padding">
        <View style={styles.personalInfoContainer}>
          <View>
            <TextInput
              style={
                first_nameInput.length >= 2 ? styles.inputCorrect : styles.input
              }
              placeholder="Ім'я"
              value={first_nameInput}
              onChangeText={(text) => setFirst_nameInput(text)}
            />
          </View>
          <View>
            <TextInput
              style={
                last_nameInput.length >= 2 ? styles.inputCorrect : styles.input
              }
              placeholder="Прізвище"
              value={last_nameInput}
              onChangeText={(text) => setLast_nameInput(text)}
            />
          </View>
          <View>
            <TextInput
              style={
                certificateInput.length >= 2
                  ? styles.inputCorrect
                  : styles.input
              }
              placeholder="Сертифікат"
              value={certificateInput}
              onChangeText={(text) => setCertificateInput(text)}
            />
            <Text
              style={{
                color: "gray",
                fontSize: 12,
                textAlign: "left",
                marginLeft: 15,
              }}
            >
              Необов'язково
            </Text>
          </View>
        </View>
        {isLogedIn ? null : (
          <>
            <View>
              {/* <Text>Пошта</Text> */}
              <TextInput
                style={email.length > 5 ? styles.inputCorrect : styles.input}
                placeholder="Пошта"
                autoComplete="email"
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>

            <View>
              {/* <Text>Пароль</Text> */}
              <TextInput
                style={
                  password.length >= 8 ? styles.inputCorrect : styles.input
                }
                placeholder="Пароль"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            <View>
              {/* <Text>Пароль</Text> */}
              <TextInput
                style={
                  password === passwordConfirm && passwordConfirm >= 8
                    ? styles.inputCorrect
                    : styles.input
                }
                placeholder="Підтвердити"
                secureTextEntry={true}
                value={passwordConfirm}
                onChangeText={(text) => setPasswordConfirm(text)}
              />
            </View>
          </>
        )}
        <View>
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonOutlineText}>
              {isLogedIn ? "Змінити дані" : "Зареєструватися"}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "tomato",
  },
  container: {
    marginTop: 10,
    flex: 1,
    alignItems: "center",
  },
  box: {
    flex: 1,
    marginTop: 10,
  },
  personalInfoContainer: {
    marginBottom: 50,
  },
  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    borderColor: "tomato",
    borderWidth: 1,
    marginTop: 15,
    width: "100%",
    fontSize: 16,
  },
  inputCorrect: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 15,
    width: "100%",
    fontSize: 16,
    borderColor: "#45c71e",
  },
  inputIncorrect: {
    borderWidth: 1,
    borderColor: "#f01d1d",
  },
  button: {
    backgroundColor: "white",
    // borderColor: "#45c71e",
    borderColor: "tomato",
    borderWidth: 2,
    alignItems: "center",
    width: 300,
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
    // alignItems: "center",
  },
  buttonOutlineText: {
    // color: "#45c71e",
    color: "tomato",
    fontWeight: "700",
    fontSize: 16,
  },
})

export default SignIn
