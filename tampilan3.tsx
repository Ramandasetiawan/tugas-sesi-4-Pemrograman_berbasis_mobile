import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Params = {
  name?: string;
  price?: string;
  image?: string;
};

export default function Tampilan3() {
  const router = useRouter();
  const params = useLocalSearchParams<Params>();
  const { name = "Destinasi", price = "1000", image = "1" } = params;

  const imageMap: Record<string, any> = {
    "1": require("../assets/images/labuanbajo.jpg"),
    "2": require("../assets/images/rajaampat.jpg"),
    "3": require("../assets/images/bali.jpg"),
    "4": require("../assets/images/lombok.jpg"),
    "5": require("../assets/images/jogja.jpg"),
  };

  const [quantity, setQuantity] = useState(1);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Gambar utama */}
      <View style={styles.imageContainer}>
        <Image
          source={imageMap[image]}
          style={styles.headerImage}
          resizeMode="cover"
        />

        <View style={styles.overlay} />

        {/* Tombol kembali dan suhu */}
        <View style={styles.headerTop}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>
          <View style={styles.weatherBox}>
            <Text style={styles.weatherIcon}>☀️</Text>
            <Text style={styles.weatherText}>24°C</Text>
          </View>
        </View>

        {/* Info destinasi */}
        <View style={styles.headerBottom}>
          <View style={styles.ratingRow}>
            <Text style={styles.star}>⭐</Text>
            <Text style={styles.rating}>5.0</Text>
          </View>
          <Text style={styles.destinationName}>{name}</Text>
          <Text style={styles.destinationDesc}>
            Temukan keindahan {name}, destinasi yang menawarkan pengalaman tak
            terlupakan dan pesona alam luar biasa.
          </Text>
        </View>
      </View>

      {/* Konten bawah */}
      <View style={styles.content}>
        <View style={styles.countryRow}>
          <View style={styles.flag} />
          <Text style={styles.countryText}>Indonesia</Text>
        </View>

        <Text style={styles.sectionTitle}>Discover the Beauty of {name}</Text>

        <View style={styles.reviewBox}>
          <Image
            source={require("../assets/images/favicon.png")}
            style={styles.profileImage}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.reviewer}>By ramanda</Text>
            <Text style={styles.reviewText}>
              Rekomend banget anjir {name} buat wisata.
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.showAllButton}>
          <Text style={styles.showAllText}>View All</Text>
        </TouchableOpacity>

        <Text style={styles.recommendationTitle}>
          Rekomendasi Wisata di {name}
        </Text>

        {/* Kartu paket */}
        <View style={styles.packageCard}>
          <Image
            source={imageMap[image]}
            style={styles.packageImage}
            resizeMode="cover"
          />
          <View style={styles.packageContent}>
            <Text style={styles.packageTitle}>Paket Eksklusif {name}</Text>
            <Text style={styles.packageDesc}>
              Nikmati perjalanan tak terlupakan bersama kami.
            </Text>

            <View style={styles.amountRow}>
              <View style={styles.quantityRow}>
                <TouchableOpacity
                  onPress={() => setQuantity(Math.max(1, quantity - 1))}
                  style={styles.minusButton}
                >
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>

                <Text style={styles.quantityText}>{quantity}</Text>

                <TouchableOpacity
                  onPress={() => setQuantity(quantity + 1)}
                  style={styles.plusButton}
                >
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>

              <View style={{ alignItems: "flex-end" }}>
                <Text style={styles.totalLabel}>Total Amount</Text>
                <Text style={styles.totalPrice}>
                  ${Number(price) * quantity}
                </Text>
              </View>
            </View>

            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
  imageContainer: { position: "relative" },
  headerImage: { width: "100%", height: 350 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  headerTop: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backButton: {
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 25,
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  weatherBox: {
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  weatherIcon: { color: "white", fontSize: 16, marginRight: 5 },
  weatherText: { color: "white", fontSize: 16, fontWeight: "600" },
  headerBottom: { position: "absolute", bottom: 20, left: 20, right: 20 },
  ratingRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  star: { color: "white", fontSize: 18, marginRight: 5 },
  rating: { color: "white", fontSize: 16, fontWeight: "600" },
  destinationName: {
    color: "white",
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 8,
  },
  destinationDesc: { color: "white", fontSize: 13, lineHeight: 18 },
  content: {
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -20,
    padding: 20,
  },
  countryRow: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  flag: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#E53935",
    marginRight: 8,
  },
  countryText: { fontSize: 14, color: "#666" },
  sectionTitle: { fontSize: 22, fontWeight: "700", marginBottom: 15 },
  reviewBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    padding: 12,
    borderRadius: 12,
    marginBottom: 15,
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 10,
  },
  reviewer: { fontSize: 12, color: "#666", marginBottom: 2 },
  reviewText: { fontSize: 13, color: "#333" },
  showAllButton: {
    backgroundColor: "#F0F0F0",
    padding: 12,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 20,
  },
  showAllText: { fontSize: 14, color: "#666" },
  recommendationTitle: { fontSize: 20, fontWeight: "700", marginBottom: 15 },
  packageCard: {
    backgroundColor: "#1E293B",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
  },
  packageImage: { width: "100%", height: 140 },
  packageContent: { padding: 20 },
  packageTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 5,
  },
  packageDesc: { color: "#94A3B8", fontSize: 13, marginBottom: 15 },
  amountRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  quantityRow: { flexDirection: "row", alignItems: "center" },
  minusButton: {
    backgroundColor: "#334155",
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: "center",
    alignItems: "center",
  },
  plusButton: {
    backgroundColor: "#FF6B4A",
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonText: { color: "white", fontSize: 20 },
  quantityText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 15,
  },
  totalLabel: { color: "#94A3B8", fontSize: 12, marginBottom: 2 },
  totalPrice: { color: "white", fontSize: 24, fontWeight: "700" },
  bookButton: {
    backgroundColor: "#FF6B4A",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  bookButtonText: { color: "white", fontSize: 16, fontWeight: "700" },
});
