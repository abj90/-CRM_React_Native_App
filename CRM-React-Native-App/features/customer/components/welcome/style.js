import { StyleSheet } from "react-native";

const stylesFn = () =>
  StyleSheet.create({
    container: {
      height: "100%",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    btn: {
      borderWidth: 1,
      padding: 25,
      borderColor: "black",
      backgroundColor: "red",
      marginTop: 20,
    },
  });

export default stylesFn;
