import { StyleSheet, Text, View } from "react-native";

import { useFonts, Kanit_700Bold } from "@expo-google-fonts/kanit";

export default function Credit() {
  let [fontsLoaded, fontError] = useFonts({
    Kanit_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>จัดทำโดย</Text>
      <Text>กาญจนี,นชา,รัฐนันท์,กัณฑ์พจน์</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    fontFamily: "Kanit_700Bold",
  },
});
