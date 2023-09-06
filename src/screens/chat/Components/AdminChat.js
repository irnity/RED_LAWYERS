import {
  FlatList,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {
  Timestamp,
  collection,
  doc,
  getDocs,
  onSnapshot,
  updateDoc,
} from "firebase/firestore"
import { firestoreDatabase } from "../../../services/firebase"
import { authActions } from "../../../redux/authSlice"
import CustomActivityIndicator from "../../../components/activityIndicator/CustomActivityIndicator"

const AdminChat = ({ navigation }) => {
  const [chats, setChats] = useState([])
  const dispatch = useDispatch()

  const fetchUsersMessages = async () => {
    const unsubscribe = onSnapshot(
      collection(firestoreDatabase, "users"),
      (querySnapshot) => {
        const messages = []
        querySnapshot.forEach((doc) => {
          messages.push({
            id: doc.id,
            ...doc.data(),
          })
        })

        setChats(messages.sort((a, b) => b.lastMessageTime - a.lastMessageTime))
      }
    )
  }

  const handleChat = async (id) => {
    await dispatch(authActions.chageUID(id))
    navigation.navigate("UserChat")
    const update = await updateDoc(doc(firestoreDatabase, "users", id), {
      unreadMessages: 0,
    })
  }

  useEffect(() => {
    fetchUsersMessages()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Чати з клієнтами</Text>
      {chats.length === 0 ? (
        <CustomActivityIndicator />
      ) : (
        <FlatList
          data={chats}
          style={{ width: "100%" }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            day = new Date(item.lastMessageTime.seconds * 1000).toDateString()
            let time = new Date(
              item.lastMessageTime.seconds * 1000
            ).toLocaleTimeString()
            let current = time
            if (new Date().toDateString() !== day) {
              current = day
            }

            return (
              <TouchableOpacity onPress={() => handleChat(item.id)}>
                <View style={styles.chatContainer}>
                  <View style={styles.user}>
                    <Text
                      style={styles.name}
                    >{`${item.first_name} ${item.last_name}`}</Text>
                    <Text style={styles.unreadMessages}>
                      Непрочитаних: {item.unreadMessages}
                    </Text>
                  </View>
                  <View style={styles.message}>
                    <Text style={styles.lastMessage}>{`${item.lastMessage.slice(
                      0,
                      50
                    )}`}</Text>
                    <Text style={styles.date}>{`${current}`}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      )}
    </View>
  )
}

export default AdminChat

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

    justifyContent: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    // color: "white",
    borderColor: "tomato",
    borderRadius: 10,
    borderWidth: 1,
    textAlign: "center",
    // backgroundColor: "tomato",
  },
  chatContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    borderColor: "tomato",
    padding: 10,
    marginTop: 5,
    backgroundColor: "white",
  },
  user: {
    // marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  message: {
    flexDirection: "row",
  },
  name: {
    width: "50%",
    fontSize: 16,
    fontWeight: "bold",
    padding: 5,
    // borderWidth: 1,
  },
  unreadMessages: {
    width: "50%",
    fontSize: 16,
    fontWeight: "bold",
    color: "tomato",
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
    textAlign: "right",
    // borderWidth: 1,
  },
  lastMessage: {
    fontSize: 16,
    fontWeight: "bold",
    width: "75%",
    padding: 5,
  },
  date: {
    fontSize: 16,
    marginLeft: 5,
    marginRight: 5,
    width: "25%",
    textAlign: "center",
    padding: 5,
    // borderWidth: 1,
  },
})
