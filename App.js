import { StyleSheet, Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"

// components
import Title from "./src/components/title/Title"
import Tabs from "./src/components/tabs/Tabs"

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Title />
        <Tabs />
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
