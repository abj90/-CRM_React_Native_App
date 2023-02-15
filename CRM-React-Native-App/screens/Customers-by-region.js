import React from "react";
import { SafeAreaView } from "react-native";
import CustomersByRegion from "../features/customer/components/customers-by-region";

const CustomersByRegionScreen = () => {
  return (
    <SafeAreaView>
      <CustomersByRegion />
    </SafeAreaView>
  );
};

export default CustomersByRegionScreen;
