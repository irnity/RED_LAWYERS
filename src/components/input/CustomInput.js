import { StyleSheet, Text, TextInput, View } from "react-native"
import React from "react"

const CustomInput = ({ value, setValue, placeHolder, keyboardType }) => {
  return (
    <TextInput
      placeholder={placeHolder}
      keyboardType={keyboardType}
      autoCapitalize="none"
      value={value}
      onChangeText={(text) => setValue(text)}
      style={styles.input}
    />
  )
}

export default CustomInput

const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
})
