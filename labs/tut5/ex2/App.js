import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

const ProductScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const addProduct = () => {
    setProducts([...products, { name, price, description }]);
    setName('');
    setPrice('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product List</Text>
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productItem} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
          </TouchableOpacity>
        )}
      />
      <TextInput
        placeholder="Product Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Product Price"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
      />
      <TextInput
        placeholder="Product Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <Button title="Add Product" onPress={addProduct} color="#007BFF" />
    </View>
  );
};

const ProductDetailScreen = (props) => {
  const { product } = props.route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.productDetailName}>{product.name}</Text>
      <Text style={styles.productDetailPrice}>Price: ${product.price}</Text>
      <Text style={styles.productDetailDescription}>{product.description}</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen name="ProductList" component={ProductScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  productItem: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '100%',
    borderRadius: 5,
  },
  productDetailName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDetailPrice: {
    fontSize: 20,
    color: '#888',
    marginBottom: 10,
  },
  productDetailDescription: {
    fontSize: 16,
  },
});