import React from "react";
import { View, FlatList, Text } from "react-native";
import RegionListRow from "./RegionListRow";
import stylesFn from "./style";
import Button from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { regionsBtnOptions } from "../../../util/constans";

const RegionList = () => {
  const [regionsList, setRegionsList] = React.useState(regionsBtnOptions);

  const { navigate } = useNavigation();
  const styles = stylesFn();

  return (
    <View style={styles.constainer}>
      <Button
        text={"Create Customer"}
        onPress={() => {
          navigate("New");
        }}
        disabled={false}
      />
      <Text>List of regions</Text>
      <FlatList
        data={regionsList}
        renderItem={({ item }) => <RegionListRow item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default RegionList;
