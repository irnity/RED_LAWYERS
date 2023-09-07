import { StyleSheet, Text, View } from "react-native"
import React from "react"

const CustomHeaderText = ({ text }) => {
  return <Text style={styles.header}>{text}</Text>
}

export default CustomHeaderText

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 10,
    textAlign: "center",
  },
})
