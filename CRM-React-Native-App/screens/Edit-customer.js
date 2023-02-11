import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import EditCustomer from "../features/customer/edit-customer";

const EditCustomerScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <EditCustomer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditCustomerScreen;
