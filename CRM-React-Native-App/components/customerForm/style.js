import { StyleSheet } from "react-native";

const stylesFn = () => {
  return StyleSheet.create({
    container: {
      margin: "5%",
    },
    form: {
      width: "100%",
    },
    textInput: {
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 4,
      padding: 15,
      marginVertical: 5,
    },
    divider: {
      height: 20,
      width: "100%",
    },
    listRow: {
      width: "100%",
      height: 50,
      borderRadius: 6,
      marginVertical: 10,
      borderColor: "#13678A",
      borderWidth: 2,
      justifyContent: "center",
      alignItems: "center",
    },
  });
};

export default stylesFn;
