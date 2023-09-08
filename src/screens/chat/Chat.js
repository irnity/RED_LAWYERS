// react
import React from "react"
import { StyleSheet, SafeAreaView, View, Text } from "react-native"
import useChat from "./hooks/useChat"
// components
import ChatElement from "./Components/ChatElement"
import CustomActivityIndicator from "../../components/activityIndicator/CustomActivityIndicator"
import AdminButton from "./Components/AdminButton"
import NotLogedIn from "../../components/notLogedIn/NotLogedIn"
// redux
import { useDispatch, useSelector } from "react-redux"
import CustomButton from "../../components/buttons/CustomButton"
import CustomHeaderText from "../../components/customHeaderText/CustomHeaderText"

function Chat({ navigation }) {
  const dispatch = useDispatch()
  const { isAdmin, isLogedIn, uid, userChatName, userChatSurname } =
    useSelector((state) => state.auth)
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
        <>
          <View style={styles.button}>
            <CustomButton
              color={"white"}
              text={"Aдмін чат"}
              handler={goToAdminChat}
            />
          </View>
          <CustomHeaderText text={`${userChatName} ${userChatSurname}`} />
        </>
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
    marginTop: 10,
  },
  button: {
    width: "90%",
    marginBottom: -10,
  },
})

export default Chat
