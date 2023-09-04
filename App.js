// react
import { useEffect } from "react"
import { StyleSheet } from "react-native"

// navigation
import { NavigationContainer } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"

// components
import { Provider, useDispatch } from "react-redux"
import store from "../RED_LAWYERS/src/redux"
import OverAll from "./src/OverAll"

export default function App() {
  // // const [counter, setCounter] = useState(0)
  // // const getData = async () => {
  // //   // multiGet
  // //   const values = await AsyncStorage.multiGet(["@count", "@greeting"])

  // //   values.forEach((value) => {
  // //     if (value[0] === "@count") {
  // //       const count = parseInt(value[1])
  // //       setCounter(isNaN(count) ? 0 : count)
  // //     } else if (value[0] === "@greeting") {
  // //       setGreeting(JSON.parse(value[1]))
  // //     }
  // //   })
  // // }
  // // const incrementCountr = async () => {
  // //   await AsyncStorage.setItem("@count", (counter + 1).toString())
  // //   setCounter(counter + 1)
  // // }

  useEffect(() => {}, [])

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

{
  /* <ActivityIndicator
size="large"
color="tomato"
style={styles.container}
/> */
}
