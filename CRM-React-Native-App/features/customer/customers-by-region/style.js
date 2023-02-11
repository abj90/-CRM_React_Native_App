import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    notCustomerContainer: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    container: {
      margin: "5%",
    },
    customerDetailContainer: {
      borderWidth: 1,
      padding: 10,
      margin: 10,
    },
  });
};

export default stylesFn;
