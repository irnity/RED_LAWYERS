import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"

function AboutUs() {
  return (
    <View>
      <View style={styles.border}>
        <Text style={styles.mainText}>Познайомимось?</Text>
      </View>
      <View style={styles.section}>
        <Image
          source={require("../../../../assets/author_1.png")}
          style={styles.image}
        />
        <View style={styles.textBox}>
          <Text style={styles.textCapital}>Назар Костенко</Text>
          <Text style={styles.text}>Розробка договорів</Text>
          <Text style={styles.text}>Супровід підписання угод</Text>
          <Text style={styles.text}>Патентування</Text>
          <Text style={styles.text}>Ліцензування</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Image
          source={require("../../../../assets/author_2.png")}
          style={styles.image}
        />
        <View style={styles.textBox}>
          <Text style={styles.textCapital}>Богдан Кузьмович</Text>
          <Text style={styles.text}>Торговельні марки</Text>
          <Text style={styles.text}>Авторське право</Text>
          <Text style={styles.text}>Корпоративне право</Text>
          <Text style={styles.text}>Вирішення Спорів</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 10,
    borderRadius: 10,
    color: "white",
    textAlign: "center",
  },
  border: {
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#333333",
  },

  section: {
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "tomato",
    marginBottom: 10,
    padding: 2,
  },

  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  textBox: {
    width: "100%",
    alignItems: "center",
  },
  textCapital: {
    fontSize: 22,
    color: "tomato",
    fontWeight: "bold",
  },
  text: {
    width: "100%",
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
  },
})

export default AboutUs
