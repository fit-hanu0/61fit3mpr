import React, { useRef, useState } from "react";
import { Button, StyleSheet, View, Text, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
export default function App() {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };
  // rotate 90 degrees
  const rotateImage = async () => {
    if (!image) return;
    const result = await ImageManipulator.manipulateAsync(
      image.uri,
      [{ rotate: 90 }],
      { compress: 1, format: ImageManipulator.SaveFormat.PNG }
    );
    setImage(result);
  };
  // crop width = 50 height = 50
  const cropImage = async () => {
    if (!image) return;
    const result = await ImageManipulator.manipulateAsync(
      image.uri,
      [
        {
          crop: {
            originX: 0,
            originY: 0,
            width: 80,
            height: 80,
          },
        },
      ],
      { compress: 1, format: ImageManipulator.SaveFormat.PNG }
    );
    setImage(result);
  };
  // resize 30x30
  const resizeImage = () => {};

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image.uri }} style={styles.image} />}
      <View style={styles.buttonContainer}>
        <Button title="Rotate" onPress={rotateImage} />
        <Button title="Crop" onPress={cropImage} />
        <Button title="Resize" onPress={resizeImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 250,
    height: 250,
    marginTop: 20,
    resizeMode: "contain",
  },
  buttonContainer: {
    marginTop: 20,
    gap: 10,
  },
});
