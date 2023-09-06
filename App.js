// react
import { StyleSheet } from "react-native"

// navigation
import { NavigationContainer } from "@react-navigation/native"

// components
import { Provider } from "react-redux"
import store from "./src/redux"
import OverAll from "./src/OverAll"

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <OverAll />
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: { justifyContent: "center", flex: 1, alignItems: "center" },
})
