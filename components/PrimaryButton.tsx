import { Text, TouchableOpacity } from "react-native";

type Props = {
  text: string;
  onPress?: () => void;
};

const PrimaryButton = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#007BFF",
        padding: 10,
        borderRadius: 5,
      }}
    >
      <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
