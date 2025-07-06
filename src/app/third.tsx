import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

const ThirdScreen = () => {
  return (
    <View className="justify-center flex-1 p-4 bg-green-200">
      <Text className="text-center font-bold text-xl">Third Screen</Text>

      <Link href={"/"} dismissTo asChild>
        <Button
          title="Dismiss to /"
          // onPress={() => router.push("/second")}
        />
      </Link>
      <Link href={"/second"} dismissTo asChild>
        <Button
          title="Replace with /second"
          // onPress={() => router.push("/second")}
        />
      </Link>
    </View>
  );
};

export default ThirdScreen;
