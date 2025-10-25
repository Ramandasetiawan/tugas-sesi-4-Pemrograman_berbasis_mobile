import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Tampilan4() {
  const router = useRouter();

  const tickets = [
    {
      id: 1,
      fromCode: "NL",
      fromCity: "Rotterdam",
      toCode: "IDN",
      toCity: "Labuan Bajo",
      departTime: "5:30pm",
      departDate: "Mon, 23 Jun",
      arriveTime: "3:30am",
      arriveDate: "Tue, 24 Jun",
      price: "$1.700",
    },
    {
      id: 2,
      fromCode: "NL",
      fromCity: "Rotterdam",
      toCode: "IDN",
      toCity: "Labuan Bajo",
      departTime: "5:30pm",
      departDate: "Mon, 23 Jun",
      arriveTime: "3:30am",
      arriveDate: "Tue, 24 Jun",
      price: "$1.700",
    },
  ];

  const days = [
    { day: "S", date: 22 },
    { day: "M", date: 23 },
    { day: "T", date: 24 },
    { day: "W", date: 25 },
    { day: "T", date: 26 },
    { day: "F", date: 27 },
    { day: "S", date: 28 },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={26} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tickets</Text>
        <Ionicons name="ellipsis-vertical" size={24} color="#000" />
      </View>

      {/* Location */}
      <Text style={styles.label}>Current locations</Text>
      <TouchableOpacity style={styles.locationRow}>
        <Text style={styles.location}>Netherlands</Text>
        <Ionicons name="chevron-down" size={20} color="#000" />
      </TouchableOpacity>

      {/* Category */}
      <View style={styles.categoryRow}>
        {["Hotel", "Aircraft", "Villa", "Attraction"].map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.categoryButton,
              item === "Aircraft" && styles.categoryActive,
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                item === "Aircraft" && styles.categoryTextActive,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Calendar */}
      <View style={styles.calendarRow}>
        {days.map((d) => (
          <View
            key={d.date}
            style={[styles.dayBox, d.date === 23 && styles.dayActive]}
          >
            <Text
              style={[styles.dayLabel, d.date === 23 && styles.dayLabelActive]}
            >
              {d.day}
            </Text>
            <Text
              style={[
                styles.dayNumber,
                d.date === 23 && styles.dayLabelActive,
              ]}
            >
              {d.date}
            </Text>
          </View>
        ))}
      </View>

      {/* Ticket List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.ticketCount}>4 Tickets Found</Text>

        {tickets.map((t) => (
          <View key={t.id} style={styles.ticketCard}>
            <View style={styles.ticketLabel}>
              <Ionicons name="airplane" size={22} color="#fff" />
              <Text style={styles.ticketLabelText}>AIRLINES</Text>
            </View>

            <View style={styles.ticketContent}>
              <View style={styles.ticketRow}>
                <View>
                  <Text style={styles.code}>{t.fromCode}</Text>
                  <Text style={styles.city}>{t.fromCity}</Text>
                </View>

                <Ionicons name="airplane-outline" size={32} color="#000" />

                <View style={{ alignItems: "flex-end" }}>
                  <Text style={styles.code}>{t.toCode}</Text>
                  <Text style={styles.city}>{t.toCity}</Text>
                </View>
              </View>

              <View style={styles.ticketRow}>
                <View>
                  <Text style={styles.time}>{t.departTime}</Text>
                  <Text style={styles.date}>{t.departDate}</Text>
                </View>
                <View>
                  <Text style={styles.time}>{t.arriveTime}</Text>
                  <Text style={styles.date}>{t.arriveDate}</Text>
                </View>
              </View>

              <Text style={styles.price}>{t.price}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation (tetap seperti Tampilan2) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          onPress={() => router.push("/tampilan2")}
          style={styles.navItem}
        >
          <Ionicons name="home" size={28} color="#999" />
        </TouchableOpacity>

        <View style={styles.navItemActive}>
          <Ionicons name="ticket" size={28} color="#fff" />
        </View>

        <TouchableOpacity
          onPress={() => router.push("/tampilan3")}
          style={styles.navItem}
        >
          <Ionicons name="person" size={28} color="#999" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f6ee",
    paddingHorizontal: 24,
    paddingTop: 55,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
  },
  label: {
    fontSize: 14,
    color: "#777",
    marginTop: 20,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    fontSize: 20,
    fontWeight: "700",
    marginRight: 6,
  },
  categoryRow: {
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "space-between",
  },
  categoryButton: {
    backgroundColor: "#eee",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  categoryActive: {
    backgroundColor: "#FF7F50",
  },
  categoryText: {
    fontSize: 16,
    color: "#000",
  },
  categoryTextActive: {
    color: "#fff",
    fontWeight: "700",
  },
  calendarRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  dayBox: {
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 10,
    width: 45,
  },
  dayActive: {
    backgroundColor: "#FF7F50",
  },
  dayLabel: {
    fontSize: 13,
    color: "#FF7F50",
  },
  dayNumber: {
    fontSize: 16,
    color: "#000",
  },
  dayLabelActive: {
    color: "#fff",
  },
  ticketCount: {
    marginTop: 30,
    marginBottom: 15,
    fontWeight: "700",
    fontSize: 18,
  },
  ticketCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 18,
    marginBottom: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  ticketLabel: {
    backgroundColor: "#FF7F50",
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  ticketLabelText: {
    color: "#fff",
    fontSize: 11,
    marginTop: 5,
    fontWeight: "600",
  },
  ticketContent: {
    flex: 1,
    padding: 16,
  },
  ticketRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  code: {
    fontSize: 28,
    fontWeight: "800",
  },
  city: {
    fontSize: 14,
    color: "#777",
  },
  time: {
    fontWeight: "700",
    fontSize: 16,
  },
  date: {
    fontSize: 13,
    color: "#777",
  },
  price: {
    marginTop: 8,
    fontWeight: "800",
    fontSize: 18,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#040e44ff",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#eee",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: "center",
  },
  navItemActive: {
    alignItems: "center",
  },
});
