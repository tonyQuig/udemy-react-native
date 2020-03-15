import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {

  return (
    <View>
      <Text style={styles.text}>Yo</Text>
      <Button 
        style={styles.buttonSpace}
        title="Go To Components Demo"
        onPress={() => navigation.navigate("Components")}
      />

      <Button
        style={styles.buttonSpace}
        title="Go to List Screen"
        onPress={() => navigation.navigate("List")}
      />

      <Button 
        style={styles.buttonSpace}
        title="Go to Image Screen"
        onPress={() => navigation.navigate("Image")}
      />

      <Button 
        style={styles.buttonSpace}
        title="Go to Counter Screen"
        onPress={() => navigation.navigate("Counter")}
      />

      <Button 
        style={styles.buttonSpace}
        title="Go to Color Screen"
        onPress={() => navigation.navigate("Color")}
      />

      <Button 
        style={styles.buttonSpace}
        title="Go to Square Screen"
        onPress={() => navigation.navigate("Square")}
      />

      <Button
        style={styles.buttonSpace}
        title="Go to Input Text Screen"
        onPress={() => navigation.navigate("Text")}
      />

    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttonSpace: {
    marginTop: 5,
  }
});

export default HomeScreen;
