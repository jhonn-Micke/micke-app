import { Artist } from "@/app/types/artist";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { getMusicData } from './api-client';
import ArtistList from './components/ArtistList';

export default function Home() {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    getMusicData().then(data => setArtists(data))
  }, []);

  return (
    <View style={styles.container}>
      {artists && <ArtistList artists={artists} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});