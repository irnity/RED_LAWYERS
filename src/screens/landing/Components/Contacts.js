import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"

function Contacts() {
  return (
    <View>
      <View style={styles.block}>
        <View
          style={{
            width: "15%",
          }}
        >
          <Feather name={"instagram"} size={40} color={"tomato"} />
        </View>
        <View
          style={{
            width: "85%",
          }}
        >
          <Text style={styles.text}>@red_lawyers</Text>
        </View>
      </View>
      <View style={styles.block}>
        <View
          style={{
            width: "15%",
          }}
        >
          <Feather name={"mail"} size={40} color={"tomato"} />
        </View>
        <View
          style={{
            width: "85%",
          }}
        >
          <Text style={styles.text}>office@redlawyers.ua</Text>
        </View>
      </View>
      <View style={styles.block}>
        <View
          style={{
            width: "15%",
          }}
        >
          <Feather name={"map-pin"} size={40} color={"tomato"} />
        </View>
        <View
          style={{
            width: "85%",
          }}
        >
          <Text style={styles.text}>Київ, Голосіївський проспект, 30Б</Text>
        </View>
      </View>
      <View style={styles.block}>
        <View
          style={{
            width: "15%",
          }}
        >
          <Feather name={"phone"} size={40} color={"tomato"} />
        </View>
        <View
          style={{
            width: "85%",
          }}
        >
          <Text style={styles.text}>+38 (096) 671 09 63</Text>
        </View>
      </View>
      <View style={styles.block}>
        <View
          style={{
            width: "15%",
          }}
        >
          <Feather name={"phone"} size={40} color={"tomato"} />
        </View>
        <View
          style={{
            width: "85%",
          }}
        >
          <Text style={styles.text}>+38 (066) 597 92 22</Text>
        </View>
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
    fontSize: 16,
    marginLeft: 5,
  },
})

export default Contacts
