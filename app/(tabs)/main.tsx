import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function MainScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Screen</Text>
      <Pressable
        style={styles.button}
        onPress={() => router.push("/todolist")}
      >
        <Text style={styles.buttonText}>Open Todo List</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8fafc",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0f172a",
  },
  button: {
    marginTop: 24,
    paddingHorizontal: 22,
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: "#0f172a",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
});
