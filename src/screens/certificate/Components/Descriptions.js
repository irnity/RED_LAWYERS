import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { Feather } from "@expo/vector-icons"

const Descriptions = () => {
  return (
    <>
      <View style={styles.descriptionBox}>
        <View
          style={{
            borderRadius: 100,
            backgroundColor: "white",
            marginRight: 5,
          }}
        >
          <Feather
            style={styles.statusNotDone}
            name={"x-square"}
            size={35}
            color={"tomato"}
          />
        </View>
        <Text>Запланована стадія</Text>
      </View>
      <View style={styles.descriptionBox}>
        <View
          style={{
            borderRadius: 100,
            backgroundColor: "#037fe2",
            marginRight: 5,
          }}
        >
          <Feather
            style={styles.statusInProcess}
            name={"minimize"}
            size={35}
            color={"white"}
          />
        </View>
        <Text>Поточна стадія</Text>
      </View>
      <View style={styles.descriptionBox}>
        <View
          style={{
            borderRadius: 100,
            backgroundColor: "#5cb85c",
            marginRight: 5,
          }}
        >
          <Feather
            style={styles.statusDone}
            name={"check"}
            size={35}
            color={"white"}
          />
        </View>
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
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "tomato",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },
  statusDone: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    padding: 5,
  },

  statusInProcess: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    padding: 5,
  },
  statusNotDone: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    padding: 5,
  },
})
