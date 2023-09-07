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
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "tomato",
  },
  secondaryText: {
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "tomato",
  },
})

export default StartingInfo
