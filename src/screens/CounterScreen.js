import React, { useState } from "react"
import { Text, View, StyleSheet, Button } from "react-native"

const CounterScreen = () => {

  const [counter, setCounter] = useState(0)

  const handleCounter = (operation) => {
    operation === "increment" ? 
      setCounter(prev => prev + 1) :
      setCounter(prev => prev - 1)
  }

  return(
    <View>
      <Button 
        title="Increase" 
        onPress={() => handleCounter("increment")} 
      />
      <Button 
        title="Decrease"
        onPress={() => handleCounter("decrement")} 
      />

      <Text>Current Counter: {counter}</Text>

    </View>
  )
}

const styles = StyleSheet.create({})

export default CounterScreen;