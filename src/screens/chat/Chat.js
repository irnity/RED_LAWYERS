import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"

function Chat() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Text>Chat</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})

export default Chat
