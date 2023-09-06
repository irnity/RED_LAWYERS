import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"
import StageList from "./StageList"
import { useSelector } from "react-redux"
import CustomButton from "../../../components/buttons/CustomButton"

const CertificatesList = ({ item }) => {
  const [certificate, setCertificate] = useState([])

  const { certificateNumber } = useSelector((state) => state.auth)

  const fetchCertificates = async () => {
    if (certificateNumber === []) return alert("Введіть номер діловодства")
    try {
      const response = await fetch(
        `https://sis.nipo.gov.ua/api/v1/open-data/${item.documentId}/`
      )
      const data = await response.json()
      setCertificate(data.data.stages)
    } catch (e) {
      setCertificate([])
      Alert.alert("Помилка", "Перевірте номер діловодства")
    }
  }

  return (
    <View style={{ marginTop: 5 }}>
      {certificate.length === 0 ? (
        <CustomButton
          color={"red"}
          text={`Отримати Сертифікат ${item.documentId}`}
          handler={fetchCertificates}
        />
      ) : (
        <>
          {/*  */}
          {/* Stage List */}
          {/*  */}
          <CustomButton
            color={"white"}
            text={`Сертифікат ${item.documentId}`}
            handler={() => setCertificate([])}
          />

          {certificate.map((item) => (
            <StageList item={item} key={item.title} />
          ))}
        </>
      )}
    </View>
  )
}

export default CertificatesList

const styles = StyleSheet.create({})
