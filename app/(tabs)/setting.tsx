import { StyleSheet, Text, View } from "react-native";

export default function SettingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Setting Screen</Text>
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
});
