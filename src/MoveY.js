import React, { useEffect, useRef } from "react"
import { Text } from "react-native"
import { View, Animated, StyleSheet } from "react-native"
import { useSelector } from "react-redux"

const MoveY = () => {
  const startValue = useRef(new Animated.Value(-50)).current
  const endValue = 0
  const duration = 500

  const { message } = useSelector((state) => state.auth)

  useEffect(() => {
    Animated.timing(startValue, {
      toValue: endValue,
      duration: duration,
      useNativeDriver: true,
    }).start()
  }, [startValue])

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.square,
          {
            transform: [
              {
                translateY: startValue,
              },
            ],
          },
        ]}
      >
        <Text style={styles.text}>{message}</Text>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
    zIndex: 1,
  },
  square: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#198754",
  },
  text: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
  },
})

export default MoveY
