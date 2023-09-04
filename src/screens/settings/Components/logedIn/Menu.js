import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import { useSelector } from "react-redux"
import useSignIn from "../../hooks/useSignIn"

const Menu = ({ navigation }) => {
  const { first_name, last_name, certificateNumber } = useSelector(
    (state) => state.auth
  )

  const { handleSignOut, handleGoToChangeName } = useSignIn({
    navigation,
  })

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          width: "80%",
        }}
      >
        <View style={styles.Container}>
          <View style={styles.nameBox}>
            <Text style={styles.text}>{`${first_name} ${last_name}`}</Text>
          </View>
          <View style={styles.certificateBox}>
            <Text style={styles.text}>Номер вашого документу</Text>
            <Text style={styles.text}>{certificateNumber}</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={handleGoToChangeName}
            >
              <Text style={styles.text}>Змінити Ім'я та Прізвище</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.text}>Змінити дані</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[styles.button, styles.buttonOutline]}
            onPress={handleSignOut}
          >
            <Text style={styles.buttonOutlineText}>Вийти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Menu

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    justifyContent: "center",
    // alignItems: "center",
    marginTop: 40,
  },
  nameBox: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "tomato",
    borderRadius: 10,
    padding: 10,
  },
  certificateBox: {
    width: "100%",
    justifyContent: "center",
    // alignItems: "center",
    borderWidth: 1,
    borderColor: "tomato",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  button: {
    backgroundColor: "tomato",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
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
  buttonOutlineText: {
    color: "tomato",
    fontWeight: "700",
    fontSize: 16,
  },
})
