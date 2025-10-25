import { useRouter } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function StartScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/jogja.jpg")} // pastikan file ini ada
      style={{
        flex: 1,
        justifyContent: "flex-end",
        padding: 25,
      }}
    >
      <View>
        {/* Judul */}
        <Text
          style={{
            color: "#fff",
            fontSize: 28,
            fontWeight: "700",
            marginBottom: 8,
          }}
        >
          Wisata Alam Indonesia
        </Text>

        {/* Deskripsi */}
        <Text
          style={{
            color: "#fff",
            fontSize: 14,
            opacity: 0.9,
            marginBottom: 20,
          }}
        >
          Jelajahi wisata alam Indonesia yang penuh dengan keindahan luar biasa.
        </Text>

        {/* Tombol Mulai Menjelajah */}
        <TouchableOpacity
          onPress={() => router.push("/tampilan2")} // ⬅️ pindah ke tampilan2
          style={{
            backgroundColor: "#FF6B4A",
            paddingVertical: 14,
            borderRadius: 12,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Mulai Menjelajah
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
