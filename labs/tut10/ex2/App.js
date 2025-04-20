import React, { useRef, useState } from "react";
import { Button, StyleSheet, View, Text, Image } from "react-native";
import { Video } from "expo-av";
export default function App() {
  const video = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [status, setStatus] = useState({});

  const handlePlayPause = async () => {
    if (status.isPlaying) {
      await video.current.pauseAsync();
    } else {
      await video.current.playAsync();
    }
  };
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        shouldPlay
        onPlaybackStatusUpdate={setStatus}
      />
      <Button
        title={status.isPlaying ? "Pause" : "Play"}
        onPress={handlePlayPause}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: 320,
    height: 200,
    backgroundColor: "#000",
  },
  progress: {
    marginTop: 10,
    fontSize: 16,
  },
});
