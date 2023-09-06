import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import CustomActivityIndicator from "../activityIndicator/CustomActivityIndicator"
import useCerificates from "../../screens/certificate/hooks/useCerificates"

const NotLogedIn = ({ goToSettings }) => {
  const { loading } = useCerificates()

  if (loading) return <CustomActivityIndicator />

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.text}>Будь ласка, увійдіть в систему</Text>

      <TouchableOpacity onPress={goToSettings} style={styles.button}>
        <Text style={styles.textButton}>Увійти</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NotLogedIn

const styles = StyleSheet.create({
  button: {
    width: "80%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "tomato",
  },
  textButton: {
    textAlign: "center",
    color: "tomato",
    fontSize: 20,
  },
  text: {
    marginBottom: 10,
    color: "black",
    fontSize: 20,
  },
})
