import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
  Button,
} from "react-native"
import StartingInfo from "./Components/StartingInfo"
import Information from "./Components/Information"
import WhyWe from "./Components/WhyWe"
import AboutUs from "./Components/AboutUs"
import Cards from "./Components/Cards/Cards"
import WorkWith from "./Components/WorkWith"
import Contacts from "./Components/Contacts"

function Main() {
  return (
    <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* starting info */}
          <StartingInfo />
          {/* information */}
          <Information />
          {/* why you need us */}
          <WhyWe />
          {/* about us */}
          <AboutUs />
          {/* cards */}
          <Cards />
          {/* WorkWith */}
          <WorkWith />
          {/* Numbers */}
          <Contacts />
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    width: "95%",
    height: "100%",
  },
})

export default Main
