import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-500">
      <Text className="text-3xl font-pblack">APP SST</Text>
      <StatusBar />
      <Link href="/home" style={{ color: "red" }}>
        Go to Home
      </Link>
    </View>
  );
}
