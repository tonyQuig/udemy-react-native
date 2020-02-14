import React from "react"
import { View, Text, Image } from "react-native"

const ImageDetail = ({ title, image, score }) => {
  return(
    <View>
      <Image source={image} />
      <Text>{ title }</Text>
      <Text>Image score: { score }</Text>
    </View>
  )
}

export default ImageDetail;