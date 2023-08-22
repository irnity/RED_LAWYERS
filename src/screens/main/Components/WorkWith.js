import React from "react"
import { View, Text, StyleSheet, FlatList, Image } from "react-native"

const DATA = [
  {
    id: 1,
    image: require("../../../../assets/brands_1.png"),
  },
  {
    id: 2,
    image: require("../../../../assets/brands_2.png"),
  },
  {
    id: 3,
    image: require("../../../../assets/brands_3.png"),
  },
  {
    id: 4,
    image: require("../../../../assets/brands_4.png"),
  },
  {
    id: 5,
    image: require("../../../../assets/brands_5.png"),
  },
  {
    id: 6,
    image: require("../../../../assets/brands_6.png"),
  },
  {
    id: 7,
    image: require("../../../../assets/brands_7.png"),
  },
  {
    id: 8,
    image: require("../../../../assets/brands_8.png"),
  },
  {
    id: 9,
    image: require("../../../../assets/brands_9.png"),
  },
  {
    id: 10,
    image: require("../../../../assets/brands_10.png"),
  },
  {
    id: 11,
    image: require("../../../../assets/brands_11.png"),
  },
  {
    id: 12,
    image: require("../../../../assets/brands_12.png"),
  },
  {
    id: 13,
    image: require("../../../../assets/brands_13.png"),
  },
  {
    id: 14,
    image: require("../../../../assets/brands_14.png"),
  },
  {
    id: 15,
    image: require("../../../../assets/brands_15.png"),
  },
  {
    id: 16,
    image: require("../../../../assets/brands_16.png"),
  },
  {
    id: 17,
    image: require("../../../../assets/brands_17.png"),
  },
  {
    id: 18,
    image: require("../../../../assets/brands_18.png"),
  },
  {
    id: 19,
    image: require("../../../../assets/brands_19.png"),
  },
  {
    id: 20,
    image: require("../../../../assets/brands_20.png"),
  },
  {
    id: 21,
    image: require("../../../../assets/brands_21.png"),
  },
  {
    id: 22,
    image: require("../../../../assets/brands_22.png"),
  },
  {
    id: 23,
    image: require("../../../../assets/brands_23.png"),
  },
  {
    id: 24,
    image: require("../../../../assets/brands_24.png"),
  },
  {
    id: 25,
    image: require("../../../../assets/brands_25.png"),
  },
  {
    id: 26,
    image: require("../../../../assets/brands_26.png"),
  },
  {
    id: 27,
    image: require("../../../../assets/brands_27.png"),
  },
  {
    id: 28,
    image: require("../../../../assets/brands_28.png"),
  },
  {
    id: 29,
    image: require("../../../../assets/brands_29.png"),
  },
  {
    id: 30,
    image: require("../../../../assets/brands_28.png"),
  },
]

function WorkWith() {
  return (
    <View style={styles.cart}>
      <Text style={styles.mainText}>Нам довіряють</Text>
      <View style={styles.images}>
        {DATA.map((item) => {
          return (
            <Image key={item.id} source={item.image} style={styles.image} />
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cart: {},
  mainText: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "tomato",
    backgroundColor: "tomato",
    textAlign: "center",
    color: "white",
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
  image: {
    width: "20%",
    height: 60,
    margin: "6.5%",
    resizeMode: "contain",
    // resizeMode: "center",
    // justifyContent: "center",
    // alignItems: "center",
  },
  images: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1,
    borderColor: "tomato",
    borderRadius: 10,
    marginBottom: 30,
    backgroundColor: "white",
  },
})

export default WorkWith
