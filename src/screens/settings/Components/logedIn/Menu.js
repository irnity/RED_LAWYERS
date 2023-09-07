import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import useLogedIn from "../../hooks/useLogedIn"
import CustomButton from "../../../../components/buttons/CustomButton"
import CustomHeaderText from "../../../../components/customHeaderText/CustomHeaderText"
const Menu = ({ navigation }) => {
  const { isAdmin, isLogedIn, first_name, last_name, certificateNumber } =
    useSelector((state) => state.auth)

  const { handleSignOut, handleGoToChangeName, handleGoToChangeTM } =
    useLogedIn({
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
          width: "90%",
        }}
      >
        <View style={styles.Container}>
          <CustomHeaderText text={"Ваш профіль"} />
          <View style={styles.nameBox}>
            <Text style={styles.text}>{`${first_name} ${last_name}`}</Text>
          </View>

          <CustomButton
            color={"red"}
            text={"Змінити Ім'я та Прізвище"}
            handler={handleGoToChangeName}
          />
          <CustomButton
            color={"red"}
            text={"Змінити номери ваших ТМ"}
            handler={handleGoToChangeTM}
          />
          <CustomButton
            color={"white"}
            text={"Вийти"}
            handler={handleSignOut}
          />
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
    // marginTop: 40,
  },
  nameBox: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "tomato",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
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
    marginBottom: 10,
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
