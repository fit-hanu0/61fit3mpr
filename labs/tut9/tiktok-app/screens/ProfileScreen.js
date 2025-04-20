import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/user.jpg")} style={styles.avatar} />
      <Text style={styles.username}>john_doe</Text>
      <Text style={styles.stats}>
        Posts: 5 | Followers: 120 | Following: 80
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  username: { fontWeight: "bold", fontSize: 20, marginVertical: 5 },
  stats: { fontSize: 16, color: "gray" },
});
