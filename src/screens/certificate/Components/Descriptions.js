import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { Feather } from "@expo/vector-icons"

const Descriptions = () => {
  return (
    <>
      <View style={styles.descriptionBox}>
        <Feather
          style={styles.statusNotDone}
          name={"x-square"}
          size={35}
          color={"white"}
        />
        <Text>Запланована стадія</Text>
      </View>
      <View style={styles.descriptionBox}>
        <Feather
          style={styles.statusInProcess}
          name={"minimize"}
          size={35}
          color={"white"}
        />
        <Text>Поточна стадія</Text>
      </View>
      <View style={styles.descriptionBox}>
        <Feather
          style={styles.statusDone}
          name={"check"}
          size={35}
          color={"white"}
        />
        <Text>Пройдена стадія</Text>
      </View>
    </>
  )
}

export default Descriptions

const styles = StyleSheet.create({
  //
  // description
  //

  descriptionBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  statusDone: {
    backgroundColor: "#5cb85c",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
  },

  statusInProcess: {
    backgroundColor: "#037fe2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  statusNotDone: {
    backgroundColor: "#fff",
    color: "tomato",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
  },
})
