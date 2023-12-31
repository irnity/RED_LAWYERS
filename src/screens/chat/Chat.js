// react
import React from "react"
import { StyleSheet, SafeAreaView, View } from "react-native"
import useChat from "./hooks/useChat"
// components
import ChatElement from "./Components/ChatElement"
import CustomActivityIndicator from "../../components/activityIndicator/CustomActivityIndicator"
import AdminButton from "./Components/AdminButton"
import NotLogedIn from "../../components/notLogedIn/NotLogedIn"
// redux
import { useDispatch, useSelector } from "react-redux"
import CustomButton from "../../components/buttons/CustomButton"

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

  // if (isLoading) {
  //   return <CustomActivityIndicator />
  // }

  return (
    <SafeAreaView style={styles.container}>
      {isAdmin && (
        <View style={styles.button}>
          <CustomButton
            color={"white"}
            text={"Повернутися до адмін чату"}
            handler={goToAdminChat}
          />
        </View>
      )}

      <ChatElement
        data={data}
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
        fetchMessages={fetchMessages}
        isLoading={isLoading}
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
  button: {
    width: "95%",
  },
})

export default Chat
