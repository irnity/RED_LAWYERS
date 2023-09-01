import {
  Timestamp,
  addDoc,
  collection,
  doc,
  increment,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { auth, firestoreDatabase } from "../../../services/firebase"
import { authActions } from "../../../redux/authSlice"

const useChat = ({ navigation }) => {
  const dispatch = useDispatch()
  // redux state
  const { isAdmin, isLogedIn, uid } = useSelector((state) => state.auth)

  // loading state
  const [isLoading, setIsLoading] = useState(true)

  // data that we get from firebase
  const [data, setData] = useState([])
  // message that we send to firebase
  const [message, setMessage] = useState("")

  // check if user is admin and loged in and uid is empty
  // if true then navigate to admin chat
  // if user is loged in and uid is not empty then fetch messages
  useEffect(() => {
    if (isAdmin && isLogedIn && uid === "") {
      navigation.navigate("AdminChat")
    } else if (isLogedIn && uid !== "") {
      fetchMessages()
    }
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [isAdmin, isLogedIn, uid])

  // navigate to settings screen
  const goToSettings = () => {
    navigation.navigate("Профіль", { screen: "LoggIn" })
  }

  // navigate to admin chat screen
  const goToAdminChat = () => {
    navigation.navigate("Чат", { screen: "AdminChat" })
    setTimeout(() => {
      dispatch(authActions.chageUID(""))
      setData([])
      setMessage("")
    }, 500)
  }

  // fetch messages from firebase
  // and set data
  // and sort data by createdAt
  const fetchMessages = async () => {
    const q = query(
      collection(firestoreDatabase, "messages", uid, "messages"),
      orderBy("createdAt", "desc")
    )
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = []
      querySnapshot.forEach((doc) => {
        messages.push({
          id: doc.id,
          ...doc.data(),
        })
      })
      setData(messages)
    })
  }

  // send message to firebase
  const sendMessage = async () => {
    if (message === "" || message.length > 149) return
    // add message to messages collection
    const responce = await addDoc(
      collection(firestoreDatabase, "messages", uid, "messages"),
      {
        message: message,
        by: isAdmin ? "admin" : "user",
        createdAt: Timestamp.now(),
      }
    )
    setMessage("")
    if (isAdmin) return
    // update last message and last message time in users collection
    const update = await updateDoc(doc(firestoreDatabase, "users", uid), {
      lastMessage: message,
      lastMessageTime: Timestamp.now(),
      unreadMessages: increment(1),
    })
  }

  return {
    isLoading,
    setIsLoading,
    data,
    setData,
    message,
    setMessage,
    fetchMessages,
    goToSettings,
    goToAdminChat,
    sendMessage,
  }
}

export default useChat
