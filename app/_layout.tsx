import { View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function Layour() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../assets/fonts/roboto/Roboto-Black.ttf"),
    "Roboto-Light": require("../assets/fonts/roboto/Roboto-Light.ttf"),
    "Roboto-Medium": require("../assets/fonts/roboto/Roboto-Medium.ttf"),
    "Roboto-Regular": require("../assets/fonts/roboto/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack initialRouteName="">
      <Stack.Screen name="index" />
    </Stack>
  );
}
