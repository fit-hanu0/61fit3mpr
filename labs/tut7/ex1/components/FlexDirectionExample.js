import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

const FlexDirectionExample = () => {
  const [flexDirection, setFlexDirection] = useState("column");
  return (
    <View style={styles.container}>
      <Text style={styles.label}>flexDirection: {flexDirection}</Text>
      <View style={styles.buttons}>
        {["column", "row", "row-reverse", "column-reverse"].map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => setFlexDirection(value)}
            style={[styles.button, flexDirection === value && styles.selected]}
          >
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={[styles.boxContainer, { flexDirection }]}>
        <View style={[styles.box, { backgroundColor: "powderblue" }]} />
        <View style={[styles.box, { backgroundColor: "skyblue" }]} />
        <View style={[styles.box, { backgroundColor: "steelblue" }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  label: { textAlign: "center", fontSize: 18, marginBottom: 10 },
  buttons: { flexDirection: "row", justifyContent: "center" },
  button: {
    padding: 8,
    margin: 5,
    backgroundColor: "oldlace",
    borderRadius: 5,
  },
  selected: { backgroundColor: "coral" },
  boxContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  box: { width: 50, height: 50, margin: 5 },
});

export default FlexDirectionExample;
