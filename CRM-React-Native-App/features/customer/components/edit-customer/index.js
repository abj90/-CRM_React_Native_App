import { View } from "react-native";
import { useRoute } from "@react-navigation/native";

import { useEditCustomer, useEditCustomerStatus } from "../../hooks";
import CustomerForm from "../customerForm";

import React from "react";

const EditCustomer = () => {
  const { params } = useRoute();
  const { onSubmit } = useEditCustomer(params.customerId);
  const status = useEditCustomerStatus();

  return (
    <View>
      <CustomerForm
        onSubmit={onSubmit}
        status={status}
        customerId={params.customerId}
      />
    </View>
  );
};

export default EditCustomer;
