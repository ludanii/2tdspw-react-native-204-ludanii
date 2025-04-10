import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";
import React from "react";

type Props = {
  label: string;
  error: boolean;
  errorText: string | null | undefined;
} & TextInputProps;

const BasicTextInput = ({
  label,
  error,
  errorText,
  ...textInputProps
}: Props) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputProps} />
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
