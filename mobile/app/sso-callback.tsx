import * as WebBrowser from "expo-web-browser";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View, ActivityIndicator } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export default function SSOCallback() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/(tabs)");
  }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="large" color="#F4A261" />
    </View>
  );
}