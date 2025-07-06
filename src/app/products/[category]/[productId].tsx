import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const ProductScreen = () => {
  const params = useLocalSearchParams();

  return (
    <View className="flex-1 justify-center items-center">
      <Text>{JSON.stringify(params, null, " ")}</Text>
    </View>
  );
};

export default ProductScreen;
