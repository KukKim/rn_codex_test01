import { Provider } from "react-redux";
import { Stack } from "expo-router";

import { store } from "@/src/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="todolist"
          options={{
            presentation: "card",
            animation: "slide_from_right",
          }}
        />
      </Stack>
    </Provider>
  );
}
