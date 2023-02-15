import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import CreateCustomer from "../features/customer/components/create-customer";

const CreateCustomerScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <CreateCustomer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateCustomerScreen;
