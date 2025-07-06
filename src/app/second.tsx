import { Link, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";

const SecondScreen = () => {
  const params = useLocalSearchParams<{ name?: string }>();
  return (
    <View className="justify-center flex-1 p-4 bg-blue-200">
      <Text className="text-center font-bold text-xl">Second Screen</Text>
      {params.name ? (
        <Text className="w-full text-center font-bold text-lg">
          Hello, <Text>{params.name}</Text>
        </Text>
      ) : null}
      <Link href={"/third"} push asChild>
        <Button
          title="Push to /third"
          // onPress={() => router.push("/second")}
        />
      </Link>
    </View>
  );
};

export default SecondScreen;
