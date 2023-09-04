// react
import React from "react"
import { SafeAreaView, View, StyleSheet, ScrollView } from "react-native"
// components
import StartingInfo from "./Components/StartingInfo"
import Information from "./Components/Information"
import WhyWe from "./Components/WhyWe"
import AboutUs from "./Components/AboutUs"
import Cards from "./Components/Cards/Cards"
import WorkWith from "./Components/WorkWith"
import Contacts from "./Components/Contacts"

function Landing() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "90%" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/*  */}
          {/* starting info */}
          {/*  */}
          <StartingInfo />
          {/*  */}
          {/* information */}
          {/*  */}
          <Information />
          {/*  */}
          {/* why you need us */}
          {/*  */}
          <WhyWe />
          {/*  */}
          {/* about us */}
          {/*  */}
          <AboutUs />
          {/*  */}
          {/* cards */}
          {/*  */}
          <Cards />
          {/*  */}
          {/* WorkWith */}
          {/*  */}
          <WorkWith />
          {/*  */}
          {/* Numbers */}
          {/*  */}
          <Contacts />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { justifyContent: "center", flex: 1, alignItems: "center" },
})

export default Landing
