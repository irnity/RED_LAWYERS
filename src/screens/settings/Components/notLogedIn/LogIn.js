import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native"
import React from "react"
import CustomButton from "../../../../components/buttons/CustomButton"
import useNotLogeIn from "../../hooks/useNotLogeIn"

const LogIn = ({ navigation }) => {
  const {
    // login
    Email,
    setEmail,
    Password,
    setPassword,

    error,

    handleLogin,
    handleGoToRestorePassword,
    handleGoToSignIn,
  } = useNotLogeIn({
    navigation,
  })

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={Email}
          onChangeText={(text) => setEmail(text)}
          style={error === "" ? styles.input : styles.inputError}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
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
        <CustomButton color={"red"} handler={handleLogin} text={"Увійти"} />
        <CustomButton
          color={"red"}
          handler={handleGoToRestorePassword}
          text={"Не пам'ятаю паролю"}
        />
        <CustomButton
          color={"white"}
          handler={handleGoToSignIn}
          text={"Зареєструватися"}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

export default LogIn

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
