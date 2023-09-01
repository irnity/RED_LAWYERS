// react
import { useEffect, useState } from "react"
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { Feather } from "@expo/vector-icons"

// navigation
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AsyncStorage from "@react-native-async-storage/async-storage"

// components
import Title from "./src/components/title/Title"
import TabScreen from "./src/components/tabs/TabScreen"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./src/services/firebase"
import { authActions } from "./src/redux/authSlice"
import { Provider, useDispatch } from "react-redux"
import store from "../RED_LAWYERS/src/redux"
import OverAll from "./src/OverAll"

const Tab = createBottomTabNavigator()

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

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <Provider store={store}>
      {isLoading === true ? (
        <ActivityIndicator
          size="large"
          color="tomato"
          style={styles.container}
        />
      ) : (
        <NavigationContainer>
          <OverAll Tab={Tab} />
        </NavigationContainer>
      )}
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: { justifyContent: "center", flex: 1, alignItems: "center" },
})
