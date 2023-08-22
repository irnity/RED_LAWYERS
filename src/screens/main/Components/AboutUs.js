import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"

function AboutUs() {
  return (
    <View>
      <Text style={styles.mainText}>Познайомимось?</Text>
      <View style={styles.section}>
        <Text style={styles.aboutUsText}>
          <Text style={styles.textCapital}>Назар Костенко</Text>
          {"\n"}
          Розробка договорів, супровід підписання угод, патентування,
          ліцензування.
        </Text>
        <Image
          source={require("../../../../assets/author_1.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.aboutUsText}>
          <Text style={styles.textCapital}>Богдан Кузьмович</Text>
          {"\n"}
          Торговельні марки, авторське право, корпоративне право, вирішення
          спорів.
        </Text>
        <Image
          source={require("../../../../assets/author_2.png")}
          style={styles.image}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 30,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#333333",
    color: "white",
    textAlign: "center",
    backgroundColor: "#333333",
  },
  section: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "tomato",
    marginBottom: 30,
  },

  image: {
    width: "40%",
    height: "100%",
    resizeMode: "stretch",
  },
  aboutUsText: {
    fontSize: 18,
    lineHeight: 23,
    width: "60%",
  },
  textCapital: {
    fontSize: 20,
    fontWeight: "bold",
    color: "tomato",
  },
})

export default AboutUs
