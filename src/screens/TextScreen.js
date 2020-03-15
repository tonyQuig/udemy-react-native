import React, { useState } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native"

const TextScreen = () => {
  const [password, setPassword] = useState("")
  const [validationError, setValidationError] = useState(false)
  const handleText = (newText) => {
    setPassword(newText);
    password.length < 4 ? setValidationError(true) : setValidationError(false);
  }
  return(
    <View>
      <Text>Enter Password</Text>
      <TextInput 
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newText) => handleText(newText)}
      />
      {validationError && <Text>Password length must be 5 characters</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  }
})

export default TextScreen;