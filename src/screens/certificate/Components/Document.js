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
import CertificatesList from "./CertificatesList"
import NeedCertificate from "./NeedCertificate"
import CustomButton from "../../../components/buttons/CustomButton"
import CustomHeaderText from "../../../components/customHeaderText/CustomHeaderText"

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

  if (loading) return <CustomActivityIndicator />

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.center}>
          <View style={styles.width}>
            {/*  */}
            {/* description toggle button*/}
            {/*  */}
            <TouchableOpacity onPress={handleToggel} style={styles.toggelBox}>
              <Text style={{ fontWeight: "500", fontSize: 19 }}>Стадії</Text>
              <Feather
                name={Icon}
                size={30}
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
            <View>
              {certificateNumber.map((item) => (
                <CertificatesList item={item} key={item.id} />
              ))}
            </View>
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
    marginTop: 10,
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
  toggelBox: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "tomato",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
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
