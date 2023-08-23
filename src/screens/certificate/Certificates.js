import React, { useEffect, useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native"

import { createNativeStackNavigator } from "@react-navigation/native-stack"

const CertificatesStack = createNativeStackNavigator()

function Certificates({ navigation }) {
  const [certificate, setCertificate] = useState({})

  const fetchCertificates = async () => {
    const response = await fetch(
      "https://sis.nipo.gov.ua/api/v1/open-data/m202011127/"
    )
    const data = await response.json()
    return data
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCertificates()
      console.log(data)
      console.log({
        // (111) Порядковий номер реєстрації
        serial_registration_number: data.registration_number,
        // (151) Дата реєстрації
        date_of_registration: data.registration_date,
        // (181) Очікувана дата закінчення строку дії реєстрації
        expiry_date: data.data.ExpiryDate,
        // (210) Порядковий номер заявки
        serial_number_of_the_application: data.app_number,
        // (220) Дата подання заявки
        application_submission_date: data.app_date,
        // (731) Ім'я та адреса заявника
        name_and_address_of_the_applicant: `${data.data.HolderDetails.Holder[0].HolderAddressBook.FormattedNameAddress.Address.FreeFormatAddress.FreeFormatNameLine} ${data.data.HolderDetails.Holder[0].HolderAddressBook.FormattedNameAddress.Address.FreeFormatAddress.FreeFormatAddressLine}`,
        // (732) Ім'я та адреса володільця реєстрації
        name_and_address_of_registration_holder: `${data.data.HolderDetails.Holder[0].HolderAddressBook.FormattedNameAddress.Address.FreeFormatAddress.FreeFormatNameLine} ${data.data.HolderDetails.Holder[0].HolderAddressBook.FormattedNameAddress.Address.FreeFormatAddress.FreeFormatAddressLine}`,
        // (740) Ім'я та адреса представника
        name_and_address_of_representative:
          data.data.RepresentativeDetails.Representative[0]
            .RepresentativeAddressBook.FormattedNameAddress.Name.FreeFormatName
            .FreeFormatNameDetails.FreeFormatNameDetails.FreeFormatNameLine,
      })
      // setCertificate(data)
    }
    fetchData()
  }, [])

  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
      }}
    >
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.navigation}>
            <Pressable
              onPress={() => {
                navigation.navigate("Data")
              }}
              style={styles.textContainer}
            >
              <Text style={styles.navText}>Бібліографічні дані</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate("Data")
              }}
              style={styles.textContainer}
            >
              <Text style={styles.navText}>Стан діловодства</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "95%",
    borderWidth: 1,
    marginTop: 20,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "tomato",
    borderRadius: 10,
    alignItems: "center",
    width: "50%",
  },
  navText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "tomato",
    paddingTop: 15,
    paddingBottom: 15,
  },
})

export default Certificates
