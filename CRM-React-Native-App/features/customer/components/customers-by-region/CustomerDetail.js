import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import stylesFn from "./style";

const CustomerDetail = ({ item }) => {
  const styles = stylesFn();
  const { navigate } = useNavigation();

  const getCustomerStatus = (state) => {
    return state ? "Active" : "In-Active";
  };

  return (
    <TouchableOpacity onPress={() => navigate("Edit", { customerId: item.id })}>
      <View style={styles.customerDetailContainer}>
        <Text>ID: {item.id}</Text>
        <Text>First Name: {item.firstName}</Text>
        <Text>Last Name: {item.lastName}</Text>
        <Text>Active: {getCustomerStatus(item.isActive)}</Text>
        <Text>Region: {item.region.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomerDetail;
