import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { authActions } from "./redux/authSlice"
import Title from "./components/title/Title"
import TabScreen from "./components/tabs/TabScreen"
import { auth, firestoreDatabase } from "./services/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"

const OverAll = ({ Tab }) => {
  const dispatch = useDispatch()
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
        }
        fetchUser()
      } else {
        return
      }
    })
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <Title />
      <TabScreen Tab={Tab} />
    </SafeAreaView>
  )
}

export default OverAll

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
