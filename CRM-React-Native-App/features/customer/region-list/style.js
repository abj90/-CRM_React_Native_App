import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    constainer: {
      alignItems: "center",
      paddingTop: 30,
    },
    row: {
      width: 300,
      height: 50,
      borderRadius: 6,
      marginTop: 20,
      backgroundColor: "#ffff",
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#13678A",
      borderWidth: 2,
    },
  });
};

export default stylesFn;
