import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import stylesFn from "./style";
import { useNavigation } from "@react-navigation/native";

const RegionListRow = ({ item }) => {
  const { navigate } = useNavigation();
  const styles = stylesFn();

  return (
    <TouchableOpacity
      onPress={() =>
        navigate("CustomerByRegions", {
          regionId: item.id,
          regionTitle: item.title,
        })
      }
    >
      <View key={item.id} style={styles.row}>
        <Text key={"id"}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RegionListRow;
