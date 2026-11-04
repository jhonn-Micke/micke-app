import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Detail() {
  const { id, name, image } = useLocalSearchParams();
  const artist_data = {
    id,
    name,
    image
  }

  return (
    <View style={styles.container}>
      {/* Add the UI */}
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 0,
  },
});