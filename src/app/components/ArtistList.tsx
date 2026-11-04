import { Artist } from "@/app/types/artist";
import { useRouter } from "expo-router";
import { FlatList, TouchableOpacity, View } from "react-native";
import ArtistBox from "./ArtistBox";

export default function ArtistList({ artists }: { artists: Artist[] }) {
  const router = useRouter();

  const handlePress = (artist:any) => router.push({
    pathname: "../detail",
    params: { id: artist.id, name: artist.name, image: artist.image },
  });

  return (
    <View>
      <FlatList
        data={artists}
        keyExtractor={(item, index) => `artist-${index}`}
        renderItem={({ item }) => <TouchableOpacity
        testID={`artist-box-${item.name}`}
        onPress={() => handlePress(item)}
      >
      <ArtistBox artist={item} />
      </TouchableOpacity>}
      />
    </View>
  );
}
