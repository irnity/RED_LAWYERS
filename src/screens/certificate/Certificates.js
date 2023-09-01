import React, { useEffect, useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Pressable,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native"

import { Feather } from "@expo/vector-icons"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useSelector } from "react-redux"
import PleaseLogin from "../../components/please/PleaseLogin"
import CustomActivityIndicator from "../../components/activityIndicator/CustomActivityIndicator"
import NotLogedIn from "../../components/notLogedIn/NotLogedIn"
import NeedCertificate from "./Components/NeedCertificate"
import Document from "./Components/Document"

function Certificates({ navigation }) {
  const { isLogedIn, certificateNumber } = useSelector((state) => state.auth)

  const goToSettings = () => {
    navigation.navigate("Профіль", { screen: "LoggIn" })
  }

  useEffect(() => {}, [])

  // if not loged in
  if (isLogedIn === false) {
    return <NotLogedIn goToSettings={goToSettings} />
  }

  // if loged in but no certificate number
  if (certificateNumber === "") {
    return <NeedCertificate goToSettings={goToSettings} />
  }

  // if loged in and have certificate number
  return <Document />
}

const styles = StyleSheet.create()

export default Certificates
