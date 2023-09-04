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

const RestorePassword = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState(
    "перевірте пошту, ми відправили вам листа на відновлення паролю"
  )

  const restore = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("email sent")
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // ..
      })
  }
  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TouchableOpacity onPress={restore}>
        <Text>RestorePassword</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})

export default RestorePassword
