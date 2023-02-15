import { FlatList, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { useGetCustomersByRegion } from "../../hooks";
import CustomerDetail from "./CustomerDetail";
import Button from "../../../../components/Button";
import stylesFn from "./style";

const CustomersByRegion = () => {
  const styles = stylesFn();
  const { params } = useRoute();
  const { navigate } = useNavigation();
  const customerListFilteredByRegion = useGetCustomersByRegion(params.regionId);

  return (
    <View style={styles.container}>
      <Text>Viewing customers in {params.regionTitle}</Text>
      {customerListFilteredByRegion &&
      customerListFilteredByRegion.length > 0 ? (
        <FlatList
          data={customerListFilteredByRegion}
          renderItem={({ item }) => <CustomerDetail item={item} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <View style={styles.notCustomerContainer}>
          <Text>There is not customer registered in this region</Text>
          <Button
            text={"Create Customer"}
            onPress={() => {
              navigate("New");
            }}
            disabled={false}
          />
        </View>
      )}
    </View>
  );
};

export default CustomersByRegion;
