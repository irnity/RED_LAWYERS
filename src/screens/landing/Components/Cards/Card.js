import React, { useState } from "react"

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native"

import { Feather } from "@expo/vector-icons"

function Card({ title, text }) {
  const [Icon, setIcon] = useState("chevron-right")
  const [toggle, setToggle] = useState(false)

  const handleIcon = () => {
    if (Icon === "chevron-down") return setIcon("chevron-right")
    if (Icon === "chevron-right") return setIcon("chevron-down")
  }

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <View>
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          handleIcon()
          handleToggle()
        }}
      >
        <View style={styles.top}>
          <View
            style={{
              width: "85%",
            }}
          >
            <Text style={styles.mainText}>{title}</Text>
          </View>
          <View
            style={{
              width: "15%",
              alignItems: "center",
            }}
          >
            <Feather name={Icon} size={50} />
          </View>
        </View>
        {toggle ? (
          <View style={styles.bottom}>
            <Text style={styles.secondaryText}>{text}</Text>
          </View>
        ) : null}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  secondaryText: {
    fontSize: 16,
    lineHeight: 25,
  },
  card: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "tomato",
    marginBottom: 10,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottom: {
    marginBottom: 10,
  },
})

export default Card
