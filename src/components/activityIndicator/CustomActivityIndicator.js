import { StyleSheet, Text, View, ActivityIndicator } from "react-native"
import React from "react"

const CustomActivityIndicator = () => {
  return (
    <>
      <ActivityIndicator size="large" color="tomato" style={styles.container} />
    </>
  )
}

export default CustomActivityIndicator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
