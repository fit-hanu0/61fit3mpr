import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { View, Text, Image, StatusBar } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
export default function App() {
  const DarkTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#000",
      text: "#fff",
    },
  };
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#000"} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconSource;
            if (route.name === "Home") {
              iconSource = focused
                ? require("./assets/home-active.png")
                : require("./assets/home.png");
            } else if (route.name === "Shop") {
              iconSource = focused
                ? require("./assets/shop-active.png")
                : require("./assets/shop.png");
            } else if (route.name === "Add New") {
              return (
                <View style={styles.centerIcon}>
                  <Image
                    style={{ width: 40, heigh: 40, resizeMode: "contain" }}
                    source={require("./assets/plus.png")}
                  />
                </View>
              );
            } else if (route.name === "Messages") {
              return (
                <View style={styles.centerIcon}>
                  <Image
                    source={require("./assets/conversation.png")}
                    style={styles.mediumIcon}
                  />
                </View>
              );
            } else if (route.name === "Profile") {
              iconSource = focused
                ? require("./assets/profile-active.png")
                : require("./assets/profile.png");
            }
            return (
              <View style={styles.centerIcon}>
                <Image style={styles.mediumIcon} source={iconSource} />
              </View>
            );
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#111",
            borderTopWidth: 1,
            borderTopColor: "#222",
            height: 60,
            paddingBottom: 5,
            paddingTop: 10,
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = {
  centerIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mediumIcon: {
    width: 40,
    heigh: 40,
    resizeMode: "contain",
    tintColor: "#fff",
  },
};
