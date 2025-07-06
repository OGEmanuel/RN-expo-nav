import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

// Give me an array of ten proverbs with their sources
// Example: [id: 1, proverb: "A journey of a thousand miles begins with a single step.", source: "Lao Tzu"],

const proverbs = [
  {
    id: 1,
    proverb: "A journey of a thousand miles begins with a single step.",
    source: "Lao Tzu",
  },
  {
    id: 2,
    proverb: "The only way to do great work is to love what you do.",
    source: "Steve Jobs",
  },
  {
    id: 3,
    proverb:
      "If you can't explain it simply, you don't understand it well enough.",
    source: "Albert Einstein",
  },
  {
    id: 4,
    proverb:
      "If you can't explain it simply, you don't understand it well enough.",
    source: "Albert Einstein",
  },
  {
    id: 5,
    proverb:
      "If you can't explain it simply, you don't understand it well enough.",
    source: "Albert Einstein",
  },
  {
    id: 6,
    proverb:
      "If you can't explain it simply, you don't understand it well enough.",
    source: "Albert Einstein",
  },
  {
    id: 7,
    proverb:
      "If you can't explain it simply, you don't understand it well enough.",
    source: "Albert Einstein",
  },
  {
    id: 8,
    proverb:
      "If you can't explain it simply, you don't understand it well enough.",
    source: "Albert Einstein",
  },
  {
    id: 9,
    proverb:
      "If you can't explain it simply, you don't understand it well enough.",
    source: "Albert Einstein",
  },
  {
    id: 10,
    proverb:
      "If you can't explain it simply, you don't understand it well enough.",
    source: "Albert Einstein",
  },
];

const ProverbScreen = () => {
  const params = useLocalSearchParams<{ id: string }>();

  const proverb = proverbs.find((p) => `${p.id}` === params.id);

  if (!proverb) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg">Not Found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Stack.Screen options={{ title: proverb.source }} />
      <Text className="text-lg text-center">"{proverb.proverb}"</Text>
      <Text>- {proverb.source}</Text>
    </View>
  );
};

export default ProverbScreen;
