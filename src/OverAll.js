// react
import React, { useEffect, useState } from "react"
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native"
// redux
import { useDispatch } from "react-redux"
import { authActions } from "./redux/authSlice"
// components
import Title from "./components/title/Title"
import TabScreen from "./TabScreen"
// firebase
import { auth, firestoreDatabase } from "./services/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"

const OverAll = ({ Tab }) => {
  const dispatch = useDispatch()

  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const data = {
          uid: user.uid,
          first_name: "",
          last_name: "",
          certificate: "",
        }
        const fetchUser = async () => {
          const docRef = doc(firestoreDatabase, "users", user.uid)
          const docSnap = await getDoc(docRef)
          const information = docSnap.data()
          data.first_name = information.first_name
          data.last_name = information.last_name
          data.certificate = information.certificate
          dispatch(authActions.isLogedInCheck(data))
          setisLoading(false)
        }
        fetchUser()
      } else {
        setisLoading(false)
        return
      }
    })
  }, [])

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <Image
          source={require(".././assets/Red.png")}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
          }}
        />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Title />
      {/* <View style={styles.congradulation}>
        <Text>Вітаємо з днем незалежності</Text>
      </View> */}
      <TabScreen />
    </SafeAreaView>
  )
}

export default OverAll

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  congradulation: {
    width: "100%",
    height: 50,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
  },
})
