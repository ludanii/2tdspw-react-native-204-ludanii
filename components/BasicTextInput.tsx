import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

type Props = {
  value: string;
  label: string;
  error: boolean;
  errorText: string | null | undefined;
  onChangeText: (text: string) => void;
  placeholder: string;
};

const BasicTextInput = ({
  label,
  value,
  placeholder,
  error,
  errorText,
  onChangeText,
}: Props) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      {error && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
};

export default BasicTextInput;

const styles = StyleSheet.create({
  error: {
    color: "#ff3030",
  },
});
