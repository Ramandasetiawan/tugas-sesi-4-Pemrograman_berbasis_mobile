import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Tampilan2() {
  const router = useRouter();

  const destinations = [
    {
      id: 1,
      name: "Labuan Bajo",
      location: "Indonesia",
      price: 10000,
      image: require("../assets/images/labuanbajo.jpg"),
    },
    {
      id: 2,
      name: "Raja Ampat",
      location: "Papua, Indonesia",
      price: 9500,
      image: require("../assets/images/rajaampat.jpg"),
    },
    {
      id: 3,
      name: "Bali",
      location: "Indonesia",
      price: 8000,
      image: require("../assets/images/bali.jpg"),
    },
    {
      id: 4,
      name: "Lombok",
      location: "Nusa Tenggara Barat",
      price: 7000,
      image: require("../assets/images/lombok.jpg"),
    },
    {
      id: 5,
      name: "Yogyakarta",
      location: "Central Java, Indonesia",
      price: 6500,
      image: require("../assets/images/jogja.jpg"),
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#FDFBF9" }}>
      <ScrollView
        style={{ flex: 1, paddingHorizontal: 20, paddingTop: 50 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header greeting */}
        <Text style={{ fontSize: 18, color: "#777", marginBottom: 5 }}>
          Hai, Ramanda 👋
        </Text>

        {/* Banner dengan panah kanan */}
        <View
          style={{
            backgroundColor: "#FF7F50",
            borderRadius: 18,
            padding: 25,
            marginVertical: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ color: "#fff", fontSize: 22, fontWeight: "700" }}>
              Plan Your Summer!
            </Text>
          </View>

          {/* Panah ke kanan → ke Tampilan4 */}
          <TouchableOpacity
            onPress={() => router.push("/tampilan4")}
            style={{
              backgroundColor: "rgba(255,255,255,0.3)",
              width: 40,
              height: 40,
              borderRadius: 12,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="arrow-forward" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#f4f4f4",
            borderRadius: 12,
            paddingHorizontal: 15,
            marginBottom: 20,
          }}
        >
          <TextInput
            placeholder="Search destination..."
            placeholderTextColor="#999"
            style={{
              flex: 1,
              fontSize: 16,
              paddingVertical: 12,
            }}
          />
          <Ionicons name="search" size={20} color="#999" />
        </View>

        {/* Title section */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Popular Destination
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "#FF7F50", fontWeight: "600" }}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Daftar destinasi bisa di-scroll */}
        {destinations.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() =>
              router.push({
                pathname: "/tampilan3",
                params: {
                  name: item.name,
                  price: item.price.toString(),
                  image: item.id.toString(),
                },
              })
            }
            style={{
              marginBottom: 20,
              backgroundColor: "#fff",
              borderRadius: 15,
              overflow: "hidden",
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowRadius: 5,
              elevation: 3,
            }}
          >
            <Image
              source={item.image}
              style={{ width: "100%", height: 180 }}
              resizeMode="cover"
            />
            <View style={{ padding: 15 }}>
              <Text
                style={{ fontSize: 16, fontWeight: "700", color: "#333" }}
              >
                {item.name}
              </Text>
              <Text style={{ color: "#777", marginBottom: 5 }}>
                {item.location}
              </Text>
              <Text style={{ color: "#FF7F50", fontWeight: "600" }}>
                ${item.price.toLocaleString()}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "#040e44ff",
          paddingVertical: 12,
          borderTopWidth: 1,
          borderColor: "#eee",
        }}
      >
        <Ionicons name="home" size={28} color="#eee" />
        <Ionicons name="ticket" size={28} color="#999" />
        <Ionicons name="person" size={28} color="#999" />
      </View>
    </View>
  );
}
