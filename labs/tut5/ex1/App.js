import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';

function Product() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Product Page</Text>
      <Button
        title='Click on to navigate detail page'
        onPress={() => navigation.navigate('Detail')}
      ></Button>
    </View>
  );
}
function ProductDetail() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Product Detail Page</Text>
      <Button
        title='Click on to navigate home page'
        onPress={() => navigation.navigate('Product')}
      ></Button>
    </View>
  )
}
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Detail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
