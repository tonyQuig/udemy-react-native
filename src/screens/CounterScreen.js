import React, { useReducer } from "react"
import { Text, View, StyleSheet, Button } from "react-native"

const reducer = (state, action) => {
  switch(action.type) {
    case "change_increment":
      return {...state, counter: state.counter + action.payload};
    case "change_decrement":
      return {...state, counter: state.counter - action.payload};
    default:
      return state;
  }
}

const CounterScreen = () => {

  const [state, dispatch] = useReducer(reducer, {counter: 0})

  const handleCounter = (operation) => {
    operation === "increment" ?
      dispatch({type: "change_increment", payload: 1}) :
      dispatch({type: "change_decrement", payload: 1})
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

      <Text>Current Counter: {state.counter}</Text>

    </View>
  )
}

const styles = StyleSheet.create({})

export default CounterScreen;