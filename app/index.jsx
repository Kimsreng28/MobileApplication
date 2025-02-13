import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { verifyInstallation } from "nativewind";
import { Text, View } from "react-native";
export default function App() {
  verifyInstallation();

  return (
    <View className="flex-1 justify-center items-center bg-blue-500">
      <Text className="text-3xl">APP SST</Text>
      <StatusBar />
      <Link href="/profile" style={{ color: "red" }}>
        Go to Profile
      </Link>
    </View>
  );
}
