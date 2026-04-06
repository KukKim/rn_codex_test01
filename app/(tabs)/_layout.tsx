import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#111827",
        tabBarInactiveTintColor: "#6b7280",
        tabBarStyle: {
          height: 64,
          paddingTop: 8,
          paddingBottom: 8,
        },
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            name={getTabIconName(route.name)}
            size={size}
            color={color}
          />
        ),
      })}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "home",
        }}
      />
      <Tabs.Screen
        name="main"
        options={{
          title: "main",
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "setting",
        }}
      />
    </Tabs>
  );
}

function getTabIconName(routeName: string): keyof typeof Ionicons.glyphMap {
  switch (routeName) {
    case "home":
      return "home";
    case "main":
      return "grid";
    case "setting":
      return "settings";
    default:
      return "ellipse";
  }
}
