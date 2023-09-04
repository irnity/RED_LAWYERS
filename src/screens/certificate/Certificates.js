// react
import React, { useEffect, useState } from "react"
import { StyleSheet } from "react-native"
// redux
import { useSelector } from "react-redux"
// components
import NotLogedIn from "../../components/notLogedIn/NotLogedIn"
import NeedCertificate from "./Components/NeedCertificate"
import Document from "./Components/Document"

function Certificates({ navigation }) {
  const { isLogedIn, certificateNumber } = useSelector((state) => state.auth)

  const goToSettings = () => {
    navigation.navigate("Профіль", { screen: "LogIn" })
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
