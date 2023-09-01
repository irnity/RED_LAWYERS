import { StyleSheet, Text, View } from "react-native"
import React from "react"
import CustomActivityIndicator from "../activityIndicator/CustomActivityIndicator"
import PleaseLogin from "../please/PleaseLogin"
import useCerificates from "../../screens/certificate/hooks/useCerificates"

const NotLogedIn = ({ goToSettings }) => {
  const { loading } = useCerificates()

  if (loading) return <CustomActivityIndicator />

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PleaseLogin goToSettings={goToSettings} />
    </View>
  )
}

export default NotLogedIn

const styles = StyleSheet.create({})
