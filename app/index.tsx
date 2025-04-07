import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import PrimaryButton from "@/components/PrimaryButton";

const Index = () => {
  return (
    <View>
      <Text>Index</Text>
      <Link href="/register" asChild>
        <PrimaryButton />
      </Link>
    </View>
  );
};

export default Index;
