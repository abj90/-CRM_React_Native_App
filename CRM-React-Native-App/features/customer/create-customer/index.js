import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomerForm from "../../../components/customerForm";
import { useCreateCustomer } from "../hooks";

const CreateCustomer = () => {
  const { onSubmit } = useCreateCustomer();

  return (
    <View>
      <CustomerForm onSubmit={onSubmit} />
    </View>
  );
};

export default CreateCustomer;

const styles = StyleSheet.create({});
