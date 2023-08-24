import { getAuth, signInWithPopup, signInWithRedirect } from "firebase/auth"
import { FIREBASE_AUTH, googleProvider } from "../../services/firebase"
import React from "react"
import { View, Text, StyleSheet, ScrollView, Button } from "react-native"

function Settings() {
  const signInWithGoogle = async () => {
    try {
      const auth = getAuth()
      signInWithRedirect(auth, googleProvider)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Button title="Sign in with Google" onPress={signInWithGoogle} />
        <Text>Налаштування</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})

export default Settings
