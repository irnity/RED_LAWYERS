import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"

function Chat() {
  return (
    <SafeAreaView
      style={{ justifyContent: "center", flex: 1, alignItems: "center" }}
    >
      <View style={{ width: "90%" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text>Chat</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default Chat
