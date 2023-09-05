import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"

const CustomButton = ({ color, handler, text }) => {
  if (color === "red") {
    return (
      <TouchableOpacity style={styles.button} onPress={handler}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    )
  }
  if (color === "white") {
    return (
      <TouchableOpacity
        style={[styles.button, styles.buttonOutline]}
        onPress={handler}
      >
        <Text style={styles.buttonOutlineText}>{text}</Text>
      </TouchableOpacity>
    )
  }
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: "tomato",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
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
  buttonOutlineText: {
    color: "tomato",
    fontWeight: "700",
    fontSize: 16,
  },
})
