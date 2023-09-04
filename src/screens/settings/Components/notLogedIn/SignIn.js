import {
  Alert,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useEffect, useState } from "react"
// firebase
import { useDispatch, useSelector } from "react-redux"
import useNotLogeIn from "../../hooks/useNotLogeIn"

const SignIn = ({ navigation }) => {
  const { isLogedIn } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const {
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
  } = useNotLogeIn({ navigation })

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Реєстрація</Text>
        <KeyboardAvoidingView style={styles.box} behavior="padding">
          <View style={styles.personalInfoContainer}>
            <View>
              <TextInput
                style={
                  firstNameInput.length >= 2
                    ? styles.inputCorrect
                    : styles.input
                }
                placeholder="Ім'я"
                value={firstNameInput}
                onChangeText={(text) => setFirstNameInput(text)}
              />
            </View>
            <View>
              <TextInput
                style={
                  lastNameInput.length >= 2 ? styles.inputCorrect : styles.input
                }
                placeholder="Прізвище"
                value={lastNameInput}
                onChangeText={(text) => setLastNameInput(text)}
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
                  style={Email.length > 5 ? styles.inputCorrect : styles.input}
                  placeholder="Пошта"
                  autoComplete="email"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  value={Email}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>

              <View>
                {/* <Text>Пароль</Text> */}
                <TextInput
                  style={
                    Password.length >= 8 ? styles.inputCorrect : styles.input
                  }
                  placeholder="Пароль"
                  secureTextEntry={true}
                  value={Password}
                  onChangeText={(text) => setPassword(text)}
                />
              </View>
              <View>
                {/* <Text>Пароль</Text> */}
                <TextInput
                  style={
                    Password === passwordConfirm && passwordConfirm >= 8
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
    </ScrollView>
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