import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

const App = () => {
  // const router = useRouter();
  return (
    <View className="justify-center flex-1 p-4">
      <Text className="text-center font-bold text-xl">Index Screen</Text>
      {/* <Link href="/second" push>
        Push to /second
      </Link> */}
      <Link href={"/second"} push asChild>
        <Button
          title="Push to /second"
          // onPress={() => router.push("/second")}
        />
      </Link>
      <Link
        href={{ pathname: "/second", params: { name: "Emanuel" } }}
        push
        asChild
      >
        <Button
          title="Greet Emanuel on /second"
          // onPress={() => router.push("/second")}
        />
      </Link>
      <Link
        // href={"/proverbs/1"}
        href={{ pathname: "/proverbs/[id]", params: { id: "2" } }}
        push
        asChild
      >
        <Button
          title="Push to /proverbs/2"
          // onPress={() => router.push("/second")}
        />
      </Link>
      <Link href={"/products/shoes/1234"} push asChild>
        <Button
          title="Push to /products/shoes/1234"
          // onPress={() => router.push("/second")}
        />
      </Link>
    </View>
  );
};

export default App;
