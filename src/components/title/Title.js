import React from "react"
import { View, Text, StyleSheet } from "react-native"

function Title({ counter }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>RED LAWYERS {counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: 30,
    position: "relative",
    backgroundColor: "white",
    zIndex: 555,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "tomato",
  },
})

export default Title
