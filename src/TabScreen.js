// react
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Feather } from "@expo/vector-icons"
// Navigations Stacks
import { UserChatStack, AdminChatStack } from "./screens/chat/stack/ChatStack"
import SettingsStack from "./screens/settings/stack/SettingsStack"
import LandingStack from "./screens/landing/stack/LandingStack"
// redux
import { useSelector } from "react-redux"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import CertificatesStack from "./screens/certificate/stack/CertificatesStack"

const Tab = createBottomTabNavigator()

const TabScreen = () => {
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
        name={"Заявки"}
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
        component={isAdmin ? AdminChatStack : UserChatStack}
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
