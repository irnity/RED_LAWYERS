import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Feather } from "@expo/vector-icons"

// Navigations Stacks
import ChatStack from "./Stacks/ChatStack"
import SettingsStack from "./Stacks/SettingsStack"
import CertificatesStack from "./Stacks/CertificatesStack"
import LandingStack from "./Stacks/LandingStack"
import { useSelector } from "react-redux"

const TabScreen = ({ Tab, name, icon }) => {
  const { isAdmin, isLogedIn, uid } = useSelector((state) => state.auth)
  return (
    <Tab.Navigator
      initialRouteName="Головна"
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
      {/*  */}
      {/* Головна */}
      {/*  */}
      <Tab.Screen
        name={"Головна"}
        component={LandingStack}
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
      {/*  */}
      {/* Сертифікати */}
      {/*  */}
      <Tab.Screen
        name={"Сертифікат"}
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
      {/*  */}
      {/* Чат */}
      {/*  */}
      <Tab.Screen
        name={"Чат"}
        component={ChatStack}
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
      {/*  */}
      {/* Налаштування */}
      {/*  */}
      <Tab.Screen
        name={"Профіль"}
        component={SettingsStack}
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

export default TabScreen

const styles = StyleSheet.create({})
