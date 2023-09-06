import React from "react"
import { View, Text, StyleSheet } from "react-native"

function Information() {
  return (
    <View>
      <View style={styles.block}>
        <Text style={styles.blockText}>
          <Text style={{ color: "tomato" }}>Ми – команда юристів,</Text> які
          займаються інтелектуальною власністю.
        </Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.blockText}>
          У нас <Text style={{ color: "tomato" }}>прозоре ціноутворення</Text> і
          клієнти знають, за що вони нам платять. Ми завжди домовляємось про
          вартість послуг заздалегідь.
        </Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.blockText}>
          <Text style={{ color: "tomato" }}>Мета</Text> наших юристів –
          перевищити <Text style={{ color: "tomato" }}>ваші очікування.</Text>
          Ці риси виділяють нас серед інших компаній, та дозволяють
          співпрацювати з вами на значно вищому рівні довіри.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    marginBottom: 30,
  },
  blockText: {
    fontSize: 18,
    lineHeight: 30,
    color: "white",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#333333",
  },
})

export default Information
