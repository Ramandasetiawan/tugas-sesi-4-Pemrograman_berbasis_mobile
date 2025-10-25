import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="tampilan1" />
      <Stack.Screen name="screens/tampilan2" />
      <Stack.Screen name="screens/tampilan3" />
      <Stack.Screen name="screens/tampialan4" />
    </Stack>
  );
}
