import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Avatar 2",
      year: 2022,
      rating: 8.1,
      genre: "Sci-Fi",
      image: require("../assets/avatar.jpg"),
    },
    {
      id: 2,
      title: "Avengers: Endgame",
      year: 2019,
      rating: 8.4,
      genre: "Action",
      image: require("../assets/spiderman.jpg"),
    },
    {
      id: 3,
      title: "The Batman",
      year: 2022,
      rating: 7.9,
      genre: "Crime",
      image: require("../assets/batman.jpg"),
    },
    {
      id: 4,
      title: "Inception",
      year: 2010,
      rating: 8.8,
      genre: "Thriller",
      image: require("../assets/inception.jpg"),
    },
    {
      id: 5,
      title: "Interstellar",
      year: 2014,
      rating: 8.6,
      genre: "Sci-Fi",
      image: require("../assets/interstellar.jpg"),
    },
  ]);

  return (
    <View className="flex-1 bg-[#121826] p-4">
      {/* Header */}
      <Text className="text-white text-2xl font-bold mb-4">🎬 Movies List</Text>

      {/* Movie List */}
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { movie: item })}
            className="bg-[#1C2333] p-4 mb-4 rounded-lg flex-row items-center shadow-lg"
          >
            {/* Movie Poster */}
            <Image source={item.image} className="w-20 h-28 rounded-lg" />

            {/* Movie Info */}
            <View className="ml-4 flex-1">
              <Text className="text-white text-lg font-bold">{item.title}</Text>
              <View className="flex-row items-center mt-1">
                <Icon name="date-range" size={16} color="#ffffff" />
                <Text className="text-gray-400 ml-1">{item.year}</Text>
                <Icon
                  name="category"
                  size={16}
                  color="#ffffff"
                  className="ml-2"
                />
                <Text className="text-gray-400 ml-1">{item.genre}</Text>
              </View>
              <View className="flex-row items-center mt-1">
                <Icon name="star" size={18} color="#FFD700" />
                <Text className="text-yellow-400 ml-1 font-bold">
                  {item.rating} / 10
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
