import React from "react"
import ImageDetail from "../components/ImageDetail"
import { View } from "react-native"

const ImageScreen = () => {
  return(
    <View>
      <ImageDetail 
        title="Forest" 
        image={require("../../assets/images/forest.jpg")}
        score={1}
      />
      <ImageDetail 
        title="Beach"
        image={require("../../assets/images/beach.jpg")}
        score={2}
      />
      <ImageDetail 
        title="Mountain"
        image={require("../../assets/images/mountain.jpg")}
        score={3}
      />
    </View>
  )
}

export default ImageScreen