import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function DetailsScreen({ route }) {
  const { movie } = route.params;
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-black p-4">
      {/* Movie Poster */}
      <Image source={movie.image} className="w-full h-72 rounded-lg" />

      {/* Movie Title */}
      <Text className="text-white text-3xl font-bold mt-4">{movie.title}</Text>

      {/* Movie Info */}
      <View className="flex-row items-center mt-2">
        <Text className="text-gray-400 text-lg">{movie.genre}</Text>
        <Text className="text-gray-400 text-lg mx-2">•</Text>
        <Text className="text-gray-400 text-lg">{movie.year}</Text>
        <Text className="text-gray-400 text-lg mx-2">•</Text>
        <Icon name="star" size={20} color="#FFD700" />
        <Text className="text-yellow-400 text-lg ml-1 font-bold">
          {movie.rating}
        </Text>
      </View>

      {/* Back Button */}
      <TouchableOpacity
        className="bg-red-500 p-4 rounded-lg mt-6"
        onPress={() => navigation.goBack()}
      >
        <Text className="text-white text-center font-bold">Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
