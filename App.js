// react
import { useEffect, useState } from "react"
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { Feather } from "@expo/vector-icons"

// navigation
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AsyncStorage from "@react-native-async-storage/async-storage"

// components
import Title from "./src/components/title/Title"
import Main from "./src/screens/main/Main"
import Certificates from "./src/screens/certificate/Certificates"
import Chat from "./src/screens/chat/Chat"
import Settings from "./src/screens/settings/Settings"

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const CertificatesStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Certificates" component={Certificates} />
  </Stack.Navigator>
)

export default function App() {
  const [isLoading, setisLoading] = useState(false)
  const [counter, setCounter] = useState(0)
  const [greeting, setGreeting] = useState("")
  const [name, setName] = useState("")
  const [greetingInfo, setGreetingInfo] = useState("")

  const getData = async () => {
    // multiGet
    const values = await AsyncStorage.multiGet(["@count", "@greeting"])

    values.forEach((value) => {
      if (value[0] === "@count") {
        const count = parseInt(value[1])
        setCounter(isNaN(count) ? 0 : count)
      } else if (value[0] === "@greeting") {
        setGreeting(JSON.parse(value[1]))
      }
    })

    // alternative is to call getItem for each key but better to use multiGet if getting more than one value
    // const countValue = await AsyncStorage.getItem("@count")
    // const count = parseInt(countValue)
    // setCount(isNaN(count) ? 0 : count)

    // const greetingValue = await AsyncStorage.getItem("@greeting")
    // setGreeting(JSON.parse(greetingValue))
  }

  useEffect(() => {
    getData()
  }, [])

  const incrementCountr = async () => {
    await AsyncStorage.setItem("@count", (counter + 1).toString())
    setCounter(counter + 1)
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={{ justifyContent: "center", flex: 1 }}>
        <Title counter={counter} />
        <Button title="button" onPress={incrementCountr} />

        <Tab.Navigator
          initialRouteName="Налаштування"
          screenOptions={{
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            // bottom
            tabBarStyle: {
              backgroundColor: "white",
            },
            // top
            headerStyle: {
              backgroundColor: "white",
            },
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              color: "tomato",
            },
            headerShown: false,
          }}
        >
          <Tab.Screen
            name={"Головна"}
            component={Main}
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather
                  name={"home"}
                  size={25}
                  color={focused ? "tomato" : "gray"}
                />
              ),
            }}
          />
          <Tab.Screen
            name={"Сертифікати"}
            component={CertificatesStack}
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather
                  name={"briefcase"}
                  size={25}
                  color={focused ? "tomato" : "gray"}
                />
              ),
            }}
          />
          <Tab.Screen
            name={"Чат"}
            component={Chat}
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather
                  name={"message-square"}
                  size={25}
                  color={focused ? "tomato" : "gray"}
                />
              ),
            }}
          />
          <Tab.Screen
            name={"Налаштування"}
            component={Settings}
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather
                  name={"menu"}
                  size={25}
                  color={focused ? "tomato" : "gray"}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
