import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../../global.css";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      {/* <Stack>
        <Stack.Screen
          name="proverbs/[id]"
          options={{
            // title: "Proverb",
            // animation: "slide_from_bottom",
            animation: "none",
          }}
        />
      </Stack> */}
      <GestureHandlerRootView>
        <Drawer />
      </GestureHandlerRootView>
      {/* <Tabs screenOptions={{ tabBarActiveTintColor: "teal" }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarLabel: "Index",
            // tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="numeric-1-box-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="second"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="numeric-2-box-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="third"
          options={{
            tabBarBadge: 2,
            tabBarBadgeStyle: {
              backgroundColor: "tomato",
              color: "white",
            },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="numeric-3-box-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="fourth"
          options={{
            href: null,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="numeric-4-box-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="products/[category]/[productId]"
          options={{
            href: null,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="numeric-5-box-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="proverbs/[id]"
          options={{
            href: null,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="numeric-6-box-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs> */}
    </>
  );
}
