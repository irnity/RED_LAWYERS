import React from "react"
import { View, Text, StyleSheet } from "react-native"

function WhyWe() {
  return (
    <View>
      <View style={styles.backgroundRound}>
        <Text style={styles.mainText}>Чому ми?</Text>
      </View>
      <Text style={styles.secondaryText}>
        <Text style={styles.textCapital}>Оперативність</Text>
        {"\n"}
        Вам не потрібно чекати декілька днів на дзвінок від юриста. Кожен запит
        опрацьовується протягом декількох годин.
      </Text>
      <Text style={styles.secondaryText}>
        <Text style={styles.textCapital}>Чесна ціна</Text>
        {"\n"}
        Вартість наших послуг пропорційна результату.З нами ви отримуєте більше,
        ніж вкладаєте.
      </Text>
      <Text style={styles.secondaryText}>
        <Text style={styles.textCapital}>Гарантія результату</Text>
        {"\n"}
        Перед початком співпраці ми комплексно аналізуємо ваше питання,
        об’єктивно оцінюємо результат і всі можливі ризики.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 10,
    color: "white",
    textAlign: "center",
  },
  backgroundRound: {
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "tomato",
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

  //
  textCapital: {
    fontSize: 25,
    fontWeight: "bold",
    color: "tomato",
  },
})

export default WhyWe
