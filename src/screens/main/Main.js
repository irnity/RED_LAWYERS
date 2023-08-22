import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    width: "95%",
    height: "100%",
    marginTop: 5,
    // borderWidth: 1,
  },
  informationBlock: {
    // justifyContent: "center",
    // alignItems: "center",
  },
  mainText: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "tomato",
  },
  secondaryText: {
    fontSize: 15,
    lineHeight: 30,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "tomato",
  },
  //
  block: {
    marginBottom: 20,
  },
  blockText: {
    fontSize: 15,
    lineHeight: 25,
    color: "white",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "black",
    position: "relative",
  },
  //
  textCenter: {
    fontSize: 25,
    padding: 5,
    fontWeight: "500",
    textAlign: "center",
  },
  //
  textCapital: {
    fontSize: 20,
    fontWeight: "500",
  },
  // about us
  section: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "tomato",
    marginBottom: 20,
  },
  image: {
    width: "40%",
    height: "100%",
    resizeMode: "stretch",
  },
  aboutUsText: {
    fontSize: 15,
    lineHeight: 25,
    width: "60%",
  },
})

export default Main
