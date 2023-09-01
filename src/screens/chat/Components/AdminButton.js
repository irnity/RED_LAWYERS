import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"

const AdminButton = ({ goToAdminChat }) => {
  return (
    <TouchableOpacity style={styles.getBack} onPress={goToAdminChat}>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "600", color: "white" }}>
          Повернутися
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default AdminButton

const styles = StyleSheet.create({
  getBack: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "tomato",
  },
})
