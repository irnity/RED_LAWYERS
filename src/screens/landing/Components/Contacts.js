import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"

function Contacts() {
  return (
    <View>
      <View style={styles.block}>
        <Feather name={"instagram"} size={40} color={"tomato"} />
        <Text style={styles.text}>@red_lawyers</Text>
      </View>
      <View style={styles.block}>
        <Feather name={"mail"} size={40} color={"tomato"} />
        <Text style={styles.text}>office@redlawyers.ua</Text>
      </View>
      <View style={styles.block}>
        <Feather name={"map-pin"} size={40} color={"tomato"} />
        <Text style={styles.text}>Голосіївський проспект, 30Б</Text>
      </View>
      <View style={styles.block}>
        <Feather name={"phone"} size={40} color={"tomato"} />
        <Text style={styles.text}>+38 (096) 671 09 63</Text>
      </View>
      <View style={styles.block}>
        <Feather name={"phone"} size={40} color={"tomato"} />
        <Text style={styles.text}>+38 (066) 597 92 22</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "tomato",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
  },
})

export default Contacts
