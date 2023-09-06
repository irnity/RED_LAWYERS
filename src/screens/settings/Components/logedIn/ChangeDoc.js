import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native"
import React, { useState } from "react"
import CustomButton from "../../../../components/buttons/CustomButton"
import useLogedIn from "../../hooks/useLogedIn"
import DocField from "./DocField"
import { useSelector } from "react-redux"

const ChangeDoc = ({ navigation }) => {
  const { docsTM, setDocsTM, handleGoToMenu, handlePush } = useLogedIn({
    navigation,
  })

  const handleDelete = async (id) => {
    const newArr = []

    docsTM.forEach((doc) => {
      if (doc.id !== id) {
        newArr.push(doc)
      } else {
      }
    })
    setDocsTM((prev) => (prev = newArr))
  }

  const { certifaicateNumber } = useSelector((state) => state.auth)

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Ваші наяві ТМ</Text>
        <KeyboardAvoidingView style={styles.box} behavior="padding">
          {docsTM.map((doc) => (
            <DocField
              doc={doc}
              docsTM={docsTM}
              key={doc.id}
              setDocsTM={setDocsTM}
              handleDelete={handleDelete}
            />
          ))}

          <View style={{ marginTop: 15 }}>
            <CustomButton
              color={"red"}
              text={"Додати ще одну ТМ"}
              handler={() => {
                setDocsTM([...docsTM, { documentId: "", id: docsTM.length }])
              }}
            />

            <CustomButton
              color={"red"}
              text={"Змінити номери ТМ"}
              handler={handlePush}
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

export default ChangeDoc

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
