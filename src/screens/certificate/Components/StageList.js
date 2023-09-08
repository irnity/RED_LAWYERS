import { StyleSheet, Text, View } from "react-native"
import React from "react"

import { Feather } from "@expo/vector-icons"

const StageList = ({ item }) => {
  return (
    <View style={styles.progress}>
      <View>
        <View
          style={
            item.status === "done"
              ? styles.statusDoneBox
              : item.status === "current"
              ? styles.statusInProcessBox
              : styles.statusNotDoneBox
          }
        >
          <Feather
            style={
              item.status === "done"
                ? styles.statusDone
                : item.status === "current"
                ? styles.statusInProcess
                : styles.statusNotDone
            }
            name={
              item.status === "done"
                ? "check"
                : item.status === "current"
                ? "minimize"
                : "x-square"
            }
            size={35}
            color={"white"}
          />
        </View>
      </View>
      <View style={styles.title}>
        <Text>{item.title}</Text>
      </View>
    </View>
  )
}

export default StageList

const styles = StyleSheet.create({
  //
  // Progress
  //
  progress: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "tomato",
    borderRadius: 10,
    width: "100%",
    height: 85,
    backgroundColor: "white",
    justifyContent: "center",
    padding: 10,
  },
  statusDoneBox: {
    borderRadius: 100,
    backgroundColor: "#5cb85c",
    marginRight: 5,
  },

  statusInProcessBox: {
    borderRadius: 100,
    backgroundColor: "#037fe2",
    marginRight: 5,
  },
  statusNotDoneBox: {
    borderRadius: 100,
    backgroundColor: "white",
    marginRight: 5,
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
    color: "tomato",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    padding: 5,
  },
  title: {
    justifyContent: "center",
    width: "85%",
    height: "100%",
  },
})
