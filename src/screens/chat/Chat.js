import { onAuthStateChanged } from "firebase/auth"
import React, { useEffect, useRef, useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native"
import { auth, firestoreDatabase } from "../../services/firebase"
import { Feather } from "@expo/vector-icons"
import {
  Timestamp,
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore"
import ChatElement from "./Components/ChatElement"
import { useDispatch, useSelector } from "react-redux"
import { authActions } from "../../redux/authSlice"
import useChat from "./hooks/useChat"
import CustomActivityIndicator from "../../components/activityIndicator/CustomActivityIndicator"
import AdminButton from "./Components/AdminButton"
import NotLogedIn from "../../components/notLogedIn/NotLogedIn"

function Chat({ navigation }) {
  const dispatch = useDispatch()
  const { isAdmin, isLogedIn, uid } = useSelector((state) => state.auth)
  const {
    isLoading,
    data,
    message,
    setMessage,
    fetchMessages,
    goToSettings,
    goToAdminChat,
    sendMessage,
  } = useChat({ navigation })

  if (isLogedIn === false) {
    return <NotLogedIn goToSettings={goToSettings} />
  }

  if (isLoading) {
    return <CustomActivityIndicator />
  }

  return (
    <SafeAreaView style={styles.container}>
      {isAdmin && <AdminButton goToAdminChat={goToAdminChat} />}

      <ChatElement
        data={data}
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
        fetchMessages={fetchMessages}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
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

export default Chat
