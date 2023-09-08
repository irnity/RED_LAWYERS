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
import CustomHeaderText from "../../../components/customHeaderText/CustomHeaderText"

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

  const handleChat = async ({ id, name, surname }) => {
    dispatch(authActions.chageUID(id))
    dispatch(authActions.changeUserChatInfo({ name, surname }))
    navigation.navigate("UserChat")
    const update = await updateDoc(doc(firestoreDatabase, "users", id), {
      unreadMessages: 0,
    })
  }

  useEffect(() => {
    fetchUsersMessages()
  }, [])

  if (chats.length === 0) {
    return <CustomActivityIndicator />
  }

  return (
    <View style={styles.container}>
      <CustomHeaderText text={"Чати з клієнтами"} />

      <FlatList
        data={chats}
        style={{ width: "100%" }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          let day = new Date(
            item.lastMessageTime.seconds * 1000
          ).toLocaleDateString()
          let time = new Date(
            item.lastMessageTime.seconds * 1000
          ).toLocaleTimeString()
          let current = time
          if (new Date().toDateString() !== day) {
            current = day
          }

          return (
            <TouchableOpacity
              onPress={() =>
                handleChat({
                  id: item.id,
                  name: item.first_name,
                  surname: item.last_name,
                })
              }
            >
              <View style={styles.chatContainer}>
                <View style={styles.user}>
                  <Text
                    style={styles.name}
                  >{`${item.first_name} ${item.last_name}`}</Text>
                  <Text style={styles.lastMessage}>
                    Повідомлення:
                    {`${item.lastMessage.slice(0, 50)}`}
                  </Text>
                </View>
                <View style={styles.message}>
                  <Text style={styles.unreadMessages}>
                    Нових: {item.unreadMessages}
                  </Text>
                  <Text style={styles.date}>Час: {`${current}`}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )
        }}
      />
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

  chatContainer: {
    flex: 1,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    borderColor: "tomato",
    padding: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
  user: {
    width: "100%",
  },
  message: {
    width: "100%",
  },
  name: {
    width: "100%",
    fontSize: 16,
    padding: 5,
  },
  unreadMessages: {
    width: "100%",
    fontSize: 16,
    color: "tomato",
    padding: 5,
  },
  lastMessage: {
    width: "100%",
    fontSize: 16,
    padding: 5,
  },
  date: {
    fontSize: 16,
    width: "100%",
    padding: 5,
  },
})
