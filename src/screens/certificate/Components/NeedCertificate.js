import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import useCerificates from "../hooks/useCerificates"
import CustomActivityIndicator from "../../../components/activityIndicator/CustomActivityIndicator"

const NeedCertificate = ({ goToSettings }) => {
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
      <TouchableOpacity onPress={goToSettings}>
        <Text
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            borderWidth: 1,
            borderColor: "tomato",
            borderRadius: 10,
            padding: 10,
          }}
        >
          Введіть номер діловодства
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default NeedCertificate

const styles = StyleSheet.create({})
