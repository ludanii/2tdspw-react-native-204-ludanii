import { Text, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
    onPress?: () => void;
  };

const PrimaryButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#007BFF",
        padding: 10,
        borderRadius: 5,
      }}
    >
      <Text style={{
         color: "white", 
         fontSize: 18,
         textAlign: "center"
        }}>Cadastrar</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
