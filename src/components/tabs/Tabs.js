import React from "react"
import { View, Text, StyleSheet } from "react-native"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Feather } from "@expo/vector-icons"
import Main from "../../screens/main/Main"
import Certificates from "../../screens/certificate/Certificates"
import Settings from "../../screens/settings/Settings"
import Chat from "../../screens/chat/Chat"

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
        component={Certificates}
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
  )
}

export default Tabs
