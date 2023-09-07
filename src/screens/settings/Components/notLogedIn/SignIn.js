import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native"
import React from "react"
// firebase
import useNotLogeIn from "../../hooks/useNotLogeIn"
import CustomButton from "../../../../components/buttons/CustomButton"
import CustomHeaderText from "../../../../components/customHeaderText/CustomHeaderText"
const SignIn = ({ navigation }) => {
  const {
    Email,
    setEmail,
    Password,
    setPassword,

    firstNameInput,
    setFirstNameInput,
    lastNameInput,
    setLastNameInput,

    passwordConfirm,
    setPasswordConfirm,

    handleCreateUser,
  } = useNotLogeIn({ navigation })

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <CustomHeaderText text={"Реєстрація"} />
        <KeyboardAvoidingView style={styles.box} behavior="padding">
          {/*  */}
          {/* first name & last name */}
          {/*  */}
          <View style={styles.personalInfoContainer}>
            <TextInput
              style={
                firstNameInput.length >= 2
                  ? styles.inputCorrect
                  : styles.inputIncorrect
              }
              placeholder="Ім'я"
              value={firstNameInput}
              onChangeText={(text) => setFirstNameInput(text)}
            />
            <TextInput
              style={
                lastNameInput.length >= 2
                  ? styles.inputCorrect
                  : styles.inputIncorrect
              }
              placeholder="Прізвище"
              value={lastNameInput}
              onChangeText={(text) => setLastNameInput(text)}
            />
          </View>
          {/*  */}
          {/* email & password */}
          {/*  */}
          <View>
            <TextInput
              style={
                Email.length > 5 ? styles.inputCorrect : styles.inputIncorrect
              }
              placeholder="Пошта"
              autoComplete="email"
              autoCapitalize="none"
              keyboardType="email-address"
              value={Email}
              onChangeText={(text) => setEmail(text)}
            />

            <TextInput
              style={
                Password.length >= 8
                  ? styles.inputCorrect
                  : styles.inputIncorrect
              }
              placeholder="Пароль"
              secureTextEntry
              value={Password}
              onChangeText={(text) => setPassword(text)}
            />

            <TextInput
              style={
                Password == passwordConfirm && passwordConfirm.length >= 8
                  ? styles.inputCorrect
                  : styles.inputIncorrect
              }
              placeholder="Підтвердити пароль"
              secureTextEntry
              value={passwordConfirm}
              onChangeText={(text) => setPasswordConfirm(text)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              color={"white"}
              handler={handleCreateUser}
              text={"Зареєструватися"}
            />
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
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  box: {
    flex: 1,
    marginBottom: 10,
    width: "80%",
  },
  personalInfoContainer: {
    marginBottom: 10,
  },
  inputIncorrect: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    borderColor: "tomato",
    borderWidth: 1,
    marginBottom: 10,
    width: "100%",
    fontSize: 16,
  },
  inputCorrect: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
    width: "100%",
    fontSize: 16,
    borderColor: "#45c71e",
  },
  button: {
    backgroundColor: "white",
    borderColor: "tomato",
    borderWidth: 2,
    alignItems: "center",
    width: 300,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonOutlineText: {
    color: "tomato",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonContainer: {
    marginBottom: 10,
    gap: 20,
  },
})

export default SignIn
