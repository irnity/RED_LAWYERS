import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useState } from "react"
import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../../../../services/firebase"
import CustomInput from "../../../../components/input/CustomInput"
import CustomButton from "../../../../components/buttons/CustomButton"
import useNotLogeIn from "../../hooks/useNotLogeIn"

const RestorePassword = ({ navigation }) => {
  const { Email, setEmail, handleRestorePassword } = useNotLogeIn({
    navigation,
  })
  const [message, setMessage] = useState("")

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Відновлення паролю</Text>
      <View style={{ gap: 20 }}>
        <CustomInput
          value={Email}
          setValue={setEmail}
          placeHolder={"Введіть вашу пошту"}
          keyboardType={"email-address"}
        />
        <CustomButton
          color={"red"}
          handler={handleRestorePassword}
          text={"Відновити"}
        />
        {message && <Text style={styles.text}>{message}</Text>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    color: "tomato",
    textAlign: "center",
    marginTop: -20,
  },
})

export default RestorePassword
