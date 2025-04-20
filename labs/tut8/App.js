import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Details" component={DetailsScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  movieItem: { flexDirection: "row", marginBottom: 10, alignItems: "center" },
  poster: { width: 80, height: 120, borderRadius: 10 },
  textContainer: { marginLeft: 10 },
  title: { fontSize: 18, fontWeight: "bold" },
  details: { fontSize: 14, color: "gray" },
  largePoster: { width: "100%", height: 300, borderRadius: 10 },
  description: { marginTop: 10, fontSize: 16 },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
    alignItems: "center",
  },
  backText: { color: "#fff", fontSize: 16 },
});
