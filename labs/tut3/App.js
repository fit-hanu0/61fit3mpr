import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button, KeyboardAvoidingView } from 'react-native';

export default function App() {
  const [product, setProduct] = useState([
    {
      id: "1",
      name: "Apple iPhone 14",
      price: "799",
      description: "Smartphone by Apple",
    },
    {
      id: "2",
      name: "Samsung Galaxy S23",
      price: "699",
      description: "Flagship phone by Samsung",
    },
    {
      id: "3",
      name: "Sony WH-1000XM5",
      price: "399",
      description: "Noise-canceling headphones",
    },

  ])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const handleAddProduct = () => {
    if (name === "" || price === "") {
      alert("Product Name and Price are required");
      return;
    }
    const newProduct = {
      id: Math.random().toString(),
      name,
      price,
      description,
    };
    setProduct([...product, newProduct])
    setName("")
    setPrice("")
    setDescription("")
  }
  return (
    <KeyboardAvoidingView
      behavior='padding'
      style={styles.container}>
      <Text style={styles.title}>Product Management App</Text>
      <View style={styles.content}>

        <View style={styles.products}>
          <FlatList
            keyboardShouldPersistTaps="handled"
            data={product}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.productItem}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>${item.price}</Text>
                <Text style={styles.productDescription}>{item.description}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.addProduct}>
          <TextInput
            style={styles.input}
            placeholder="Product Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Product Price"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Product Description"
            value={description}
            onChangeText={setDescription}
          />
          <Button title="Add Product" onPress={handleAddProduct} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '90%',
  },
  products: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  productItem: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    height: 150,
    gap: 22
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
    color: "green",
  },
  productDescription: {
    fontSize: 14,
    color: "gray",
  },
  addProduct: {
    gap: 5,
    paddingBottom: 10

  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 8,
    borderRadius: 4,
  }
});
