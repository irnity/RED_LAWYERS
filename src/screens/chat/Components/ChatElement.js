import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useState } from "react"
import { Feather } from "@expo/vector-icons"
import { useSelector } from "react-redux"

const ChatElement = ({
  data,
  message,
  setMessage,
  sendMessage,
  fetchMessages,
}) => {
  const [refresh, setRefresh] = useState(false)
  const { isLogedIn } = useSelector((state) => state.auth)

  return (
    <>
      <View style={styles.constainer}>
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
            multiline
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
            <Feather style={styles.send} name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: "center",
    width: "95%",
  },
  boxForFlatList: {
    flex: 1,
    width: "100%",
    borderWidth: 1,
    borderColor: "tomato",
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
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
    margin: 5,
  },
  userMessage: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    margin: 5,
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
    justifyContent: "center",
    marginBottom: 5,
    marginTop: 5,
  },

  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    // borderWidth: 1,
    margin: 5,
    width: "80%",
    // height: "80%",
    fontSize: 15,
  },
  button: {
    backgroundColor: "tomato",
    padding: 10,
    borderRadius: 10,
    width: "20%",
    // height: "80%",
    alignItems: "center",
  },
  send: {
    color: "white",
  },
})
export default ChatElement
