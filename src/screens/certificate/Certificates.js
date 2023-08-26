import React, { useEffect, useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Pressable,
  FlatList,
  ActivityIndicator,
} from "react-native"

import { Feather } from "@expo/vector-icons"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

const CertificatesStack = createNativeStackNavigator()

function Certificates({ navigation }) {
  const [certificate, setCertificate] = useState([])

  const [indicator, setIndicator] = useState(true)

  const fetchCertificates = async () => {
    const response = await fetch(
      "https://sis.nipo.gov.ua/api/v1/open-data/m202300894/"
    )
    const data = await response.json()
    return data
  }

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        const data = await fetchCertificates()
        setCertificate(data.data.stages)
      }
      fetchData()
      setIndicator(false)
    }, 1000)
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        {indicator ? (
          <ActivityIndicator size="large" color="tomato" />
        ) : (
          <View style={styles.container}>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  borderWidth: 1,
                  borderColor: "tomato",
                  padding: 10,
                  borderRadius: 10,
                  marginBottom: 10,
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                Стан діловодства {"\n"}
                m202300894
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Text style={{ marginLeft: 15, fontSize: 15 }}>Позначення</Text>
              <View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Feather
                    style={styles.statusNotDone}
                    name={"x-square"}
                    size={35}
                    color={"white"}
                  />
                  <Text>Запланована стадія</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Feather
                    style={styles.statusInProcess}
                    name={"minimize"}
                    size={35}
                    color={"white"}
                  />
                  <Text>Поточна стадія</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Feather
                    style={styles.statusDone}
                    name={"check"}
                    size={35}
                    color={"white"}
                  />
                  <Text>Пройдена стадія</Text>
                </View>
              </View>
            </View>
            {certificate.map((item) => (
              <View style={styles.progress} key={item.title}>
                <View>
                  <Feather
                    style={
                      item.status === "done"
                        ? styles.statusDone
                        : item.status === "current"
                        ? styles.statusInProcess
                        : styles.statusNotDone
                    }
                    name={
                      item.status === "done"
                        ? "check"
                        : item.status === "current"
                        ? "minimize"
                        : "x-square"
                    }
                    size={35}
                    color={"white"}
                  />
                </View>
                <View style={styles.title}>
                  <Text>{item.title}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "90%",
    marginTop: 20,
  },
  progress: {
    width: "100%",
    height: 85,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "tomato",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  statusDone: {
    backgroundColor: "#5cb85c",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
  },

  statusInProcess: {
    backgroundColor: "#037fe2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  statusNotDone: {
    backgroundColor: "#fff",
    color: "tomato",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  title: {
    justifyContent: "center",
    width: "85%",
    height: "100%",
    fontSize: 13,
    fontWeight: "400",
    // borderWidth: 1,
    padding: 10,
  },
})

export default Certificates

// {
//   justifyContent: "center",
//   alignItems: "center",
//   backgroundColor:
//     item.status === "done"
//       ? "green"
//       : item.status === "current"
//       ? "blue"
//       : "red",
//   borderRadius: 100,
//   padding: 5,
//   marginLeft: 5,
//   marginRight: 5,
// }
