import React from "react"
import { View, StyleSheet, Text, FlatList } from "react-native"

const ListScreen = () => {

  const friends = [
    {name: "Friend: 1", age: 10},
    {name: "Friend: 2", age: 11},
    {name: "Friend: 3", age: 12},
    {name: "Friend: 4", age: 13},
    {name: "Friend: 5", age: 14},
    {name: "Friend: 6", age: 15},
    {name: "Friend: 7", age: 16},
    {name: "Friend: 8", age: 17},
    {name: "Friend: 9", age: 18}

  ]
  return (
    <View>
      <FlatList 
        keyExtractor={(friend) => friend.name}
        horizontal={false}
        data={friends} 
        renderItem={({item}) => {
          return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20
  }
});

export default ListScreen