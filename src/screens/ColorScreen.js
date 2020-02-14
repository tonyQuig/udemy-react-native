import React, { useState } from "react"
import { Text, View, StyleSheet, Button, FlatList } from "react-native"

const ColorScreen = () => {

  const [colors, setColor] = useState('')
  console.log('Color: ', colors)

  const randomRGB = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    
    const result = `rgb(${red}, ${green}, ${blue})`
    setColor([...colors, result])
  }

  return(
    <View>
      <Button 
        title="Add a color" 
        onPress={() => randomRGB()}
      />

      <FlatList 
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({item}) => 
          <View style={{ height: 100, width: 100, backgroundColor: item }} />
        }
      />

      <Text></Text>

    </View>
  )
}

const styles = StyleSheet.create({})

export default ColorScreen;