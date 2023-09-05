import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import useLogedIn from "../../hooks/useLogedIn"
import { useDispatch, useSelector } from "react-redux"
import CustomButton from "../../../../components/buttons/CustomButton"

const ChangeName = ({ navigation }) => {
  const { isLogedIn } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const {
    firstNameInput,
    setFirstNameInput,
    lastNameInput,
    setLastNameInput,

    handleGoToMenu,
    handleChangeName,
    handleSignIn,
  } = useLogedIn({ navigation })

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Зміна Імені та Прізвища</Text>
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
          </View>

          <View>
            <CustomButton
              color={"red"}
              text={"Змінити дані"}
              handler={handleChangeName}
            />
            <CustomButton
              color={"white"}
              text={"Повернутися"}
              handler={handleGoToMenu}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  )
}

export default ChangeName

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
    width: "80%",
  },
  personalInfoContainer: {
    marginBottom: 20,
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
