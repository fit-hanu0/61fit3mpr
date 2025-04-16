import { Text, View } from "react-native";
import MyComponent from "./MyComponent";

export default function Lect10() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize: 30}}>My Todos:</Text>
            <MyComponent />
        </View>
    );
}