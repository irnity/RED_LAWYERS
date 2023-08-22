import React from "react"
import { View, Text, StyleSheet } from "react-native"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Feather } from "@expo/vector-icons"
import Main from "../../screens/main/Main"

const Tab = createBottomTabNavigator()
function Tabs() {
  return (
    <Tab.Navigator
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
        // top text
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
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"home"}
              size={25}
              color={focused ? "tomato" : "gray"}
            />
          ),
        }}
      >
        {() => (
          <View
            style={{ justifyContent: "center", flex: 1, alignItems: "center" }}
          >
            <Main />
          </View>
        )}
      </Tab.Screen>
      <Tab.Screen
        name={"Договір"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"briefcase"}
              size={25}
              color={focused ? "tomato" : "gray"}
            />
          ),
        }}
      >
        {() => (
          <View>
            <Text>2</Text>
          </View>
        )}
      </Tab.Screen>
      <Tab.Screen
        name={"Чат"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"message-square"}
              size={25}
              color={focused ? "tomato" : "gray"}
            />
          ),
        }}
      >
        {() => (
          <View>
            <Text>3</Text>
          </View>
        )}
      </Tab.Screen>
      <Tab.Screen
        name={"Налаштування"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"menu"}
              size={25}
              color={focused ? "tomato" : "gray"}
            />
          ),
        }}
      >
        {() => (
          <View>
            <Text>4</Text>
          </View>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default Tabs
