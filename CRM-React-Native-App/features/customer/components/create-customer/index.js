import { View } from "react-native";
import React from "react";
import CustomerForm from "../customerForm";
import { useCreateCustomer, useCreateCustomerStatus } from "../../hooks";

const CreateCustomer = () => {
  const { onSubmit } = useCreateCustomer();
  const status = useCreateCustomerStatus();

  return (
    <View>
      <CustomerForm onSubmit={onSubmit} status={status} customerId={null} />
    </View>
  );
};

export default CreateCustomer;
