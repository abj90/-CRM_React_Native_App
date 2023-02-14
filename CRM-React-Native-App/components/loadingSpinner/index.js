import { Text, TouchableOpacity, View } from "react-native";
import styleFn from "./style";
import React from "react";

const LoadingSpinner = () => {
  const styles = styleFn();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{"Loading..."}</Text>
    </View>
  );
};

export default LoadingSpinner;
