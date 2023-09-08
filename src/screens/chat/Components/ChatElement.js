import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useState } from "react"
import { Feather } from "@expo/vector-icons"
import { useSelector } from "react-redux"
import CustomActivityIndicator from "../../../components/activityIndicator/CustomActivityIndicator"

const ChatElement = ({
  data,
  message,
  setMessage,
  sendMessage,
  fetchMessages,
  isLoading,
}) => {
  const [refresh, setRefresh] = useState(false)
  const { isLogedIn } = useSelector((state) => state.auth)

  return (
    <>
      <KeyboardAvoidingView
        style={styles.constainer}
        behavior={"position"}
        keyboardVerticalOffset={80}
      >
        <View style={styles.boxForFlatList}>
          {data.length === 0 && isLogedIn === false ? (
            <View
              style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Напишіть ваше перше повідомлення</Text>
            </View>
          ) : isLoading ? (
            <CustomActivityIndicator />
          ) : (
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              inverted
              keyExtractor={(item) => item.id}
              refreshing={refresh}
              onRefresh={() => {
                console.log("refresh")
                setRefresh(false)
                fetchMessages()
              }}
              renderItem={({ item }) => (
                <View
                  style={
                    item.by === "admin"
                      ? styles.adminMessageBox
                      : styles.userMessageBox
                  }
                >
                  <View
                    style={
                      item.by === "admin"
                        ? styles.adminMessage
                        : styles.userMessage
                    }
                  >
                    <Text
                      style={
                        item.by === "admin" ? styles.adminText : styles.userText
                      }
                    >
                      {item.message}
                    </Text>
                  </View>
                </View>
              )}
            />
          )}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Напишіть ваше повідомлення"
            style={styles.input}
            maxLength={100}
            multiline={true}
            value={message}
            onChangeText={(text) => {
              setMessage(text)
            }}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={sendMessage}
            disabled={message.length === 0}
          >
            <Feather style={styles.send} name="send" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  )
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: "center",
    width: "90%",
  },
  boxForFlatList: {
    flex: 1,
    width: "100%",
    borderWidth: 1,
    borderColor: "tomato",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  adminMessageBox: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
  },
  userMessageBox: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-end",
  },
  adminMessage: {
    backgroundColor: "tomato",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  userMessage: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  adminText: {
    color: "white",
  },
  userText: {
    color: "black",
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  input: {
    backgroundColor: "white",
    padding: 7,
    paddingTop: 10,
    height: 40,
    borderRadius: 10,
    width: "78%",
    fontSize: 12,
  },
  button: {
    height: 40,
    backgroundColor: "tomato",
    borderRadius: 10,
    width: "20%",
    // marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  send: {
    color: "white",
  },
})
export default ChatElement
