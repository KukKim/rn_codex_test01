import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";

const SPLASH_DELAY_MS = 1500;

export default function SplashRoute() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/(tabs)/home");
    }, SPLASH_DELAY_MS);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/dkLogo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 180,
    height: 180,
  },
});
