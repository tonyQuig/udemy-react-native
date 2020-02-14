import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {

  const name = "toleony";
  return (
    <View>
      <Text styles={styles.textStyle}>Getting Started with react native!!</Text>
      <Text styles={styles.textStyle}>My name is {name}!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 45
  },
  textStyle1: {
    fontSize: 20
  }
})

export default ComponentsScreen;