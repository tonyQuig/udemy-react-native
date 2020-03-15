import React, { useReducer } from 'react'
import { View, Text, StyleSheet } from "react-native"
import ColorCounter from "../components/ColorCounter"

const reducer = (state, action) => {
  //state = object that has a red, green, blue object
  //action is the operation to be carried out on the state
  //community conventions for reducers.
    switch(action.type) {
      case 'change_red':
        return {...state, red: state.red + action.payload}
      case 'change_blue':
        return {...state, blue: state.blue + action.payload}
      case 'change_green':
        return {...state, green: state.green + action.payload}
      default:
        return state;
    }
}

const COLOR_INCREMENT = 50;

const SquareScreen = () => {

  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})

  const { red, green, blue } = state;

  return(
    <View>
      <ColorCounter
        onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
        color={"Red"}
      />
      <ColorCounter 
        color={"Blue"} 
        onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
      />
      <ColorCounter 
        color={"Green"} 
        onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
      />

      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />

    </View>
  )
}

export default SquareScreen