import React from "react"
import { View, Text, StyleSheet } from "react-native"

function StartingInfo() {
  return (
    <View style={styles.informationBlock}>
      <Text style={styles.mainText}>
        Вирішуємо питання{" "}
        <Text style={{ color: "tomato" }}>інтелектуальної</Text> власності
      </Text>
      <Text style={styles.secondaryText}>
        Пріоритет нашої команди – максимально швидке та якісне вирішення ваших
        питань. Ми об’єктивно оцінюємо кожну ситуацію, щоб не допускати зайвих
        витрат, економити ваш час та ресурси.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  informationBlock: {
    // justifyContent: "center",
    // alignItems: "center",
  },
  mainText: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 30,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "tomato",
  },
  secondaryText: {
    fontSize: 18,
    lineHeight: 30,
    marginBottom: 30,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "tomato",
  },
})

export default StartingInfo
