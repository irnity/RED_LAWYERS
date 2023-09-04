// react
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useState } from "react"
import useCerificates from "../hooks/useCerificates"
import { Feather } from "@expo/vector-icons"
// componets
import CustomActivityIndicator from "../../../components/activityIndicator/CustomActivityIndicator"
import StageList from "./StageList"
import Descriptions from "./Descriptions"
// redux
import { useSelector } from "react-redux"

const Document = () => {
  const { loading } = useCerificates()
  const { certificateNumber } = useSelector((state) => state.auth)

  // description toggle
  const [toggel, setToggel] = useState(false)
  const [Icon, setIcon] = useState("chevron-right")

  const handleToggel = () => {
    setToggel(!toggel)

    if (Icon === "chevron-down") return setIcon("chevron-right")
    if (Icon === "chevron-right") return setIcon("chevron-down")
  }

  // fetch certificates
  const [certificate, setCertificate] = useState([])

  const fetchCertificates = async () => {
    if (certificateNumber === "") return alert("Введіть номер діловодства")
    try {
      const response = await fetch(
        `https://sis.nipo.gov.ua/api/v1/open-data/${certificateNumber}/`
      )
      const data = await response.json()
      setCertificate(data.data.stages)
    } catch (e) {
      Alert.alert("Помилка", "Перевірте номер діловодства")
    }
  }

  if (loading) return <CustomActivityIndicator />

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.center}>
          <View style={styles.width}>
            {/*  */}
            {/* Title text */}
            {/*  */}
            <View>
              <Text style={styles.titleText}>
                Стан діловодства {"\n"}
                {certificateNumber}
              </Text>
            </View>

            {/*  */}
            {/* description toggle button*/}
            {/*  */}
            <TouchableOpacity onPress={handleToggel} style={styles.toggelBox}>
              <Text style={{ fontWeight: "500", fontSize: 25 }}>Стадії</Text>
              <Feather
                name={Icon}
                size={35}
                color={"black"}
                style={{ marginTop: 5 }}
              />
            </TouchableOpacity>

            {/*  */}
            {/* description */}
            {/*  */}
            {toggel && <Descriptions />}

            {/*  */}
            {/* Fetch Certificates Button*/}
            {/*  */}
            {certificate.length === 0 ? (
              <TouchableOpacity
                onPress={fetchCertificates}
                style={styles.fetchButton}
              >
                <Text>Отримати Сертифікат</Text>
              </TouchableOpacity>
            ) : (
              <>
                {/*  */}
                {/* Stage List */}
                {/*  */}
                {certificate.map((item) => (
                  <StageList item={item} key={item.title} />
                ))}
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Document

const styles = StyleSheet.create({
  //
  // container
  //
  container: {
    flex: 1,
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
  },
  width: {
    width: "90%",
  },

  //
  // Title text
  //
  titleText: {
    fontSize: 25,
    borderWidth: 1,
    borderColor: "tomato",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    fontWeight: "500",
    textAlign: "center",
  },
  toggelBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "tomato",
    borderRadius: 10,
    padding: 10,
  },

  //
  // fetch button
  //
  fetchButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "tomato",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
})
