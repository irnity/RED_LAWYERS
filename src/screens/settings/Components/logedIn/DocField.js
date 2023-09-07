import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useState } from "react"
import { Feather } from "@expo/vector-icons"
import useLogedIn from "../../hooks/useLogedIn"

const DocField = ({ doc, handleDelete, setDocsTM }) => {
  const [documentId, setdocumentId] = useState(doc)

  const handleDeleted = async () => {
    handleDelete(documentId.id)
  }

  const handleEdit = (text) => {
    setDocsTM((prev) => {
      const newDocs = [...prev]
      newDocs[documentId.id] = { documentId: text, id: documentId.id }
      return newDocs
    })
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Номер ТМ"
        value={documentId.documentId}
        onChangeText={(text) => {
          handleEdit(text)
          setdocumentId({
            documentId: text,
            id: documentId.id,
          })
        }}
      />
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          handleDeleted(documentId.id)
        }}
      >
        <Feather
          name="x"
          size={35}
          color="black"
          style={{
            backgroundColor: "tomato",
            borderRadius: 50,
            // width: "25%",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default DocField

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    borderColor: "tomato",
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
    backgroundColor: "white",
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    width: "80%",
    fontSize: 16,
  },
  icon: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
})
