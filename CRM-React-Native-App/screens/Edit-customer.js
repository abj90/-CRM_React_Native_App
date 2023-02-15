import { SafeAreaView, ScrollView } from "react-native";
import React from "react";
import EditCustomer from "../features/customer/components/edit-customer";

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
