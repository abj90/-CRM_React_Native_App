import { StyleSheet } from "react-native";

const stylesFn = ({ disabled = false }) => {
  let backgroundColor;
  let color;

  if (disabled) {
    backgroundColor = "grey";
    color = "black";
  } else {
    backgroundColor = "#13678A";
    color = "white";
  }

  return StyleSheet.create({
    button: {
      width: 300,
      height: 50,
      borderRadius: 6,
      margin: 10,
      backgroundColor: backgroundColor,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color,
    },
  });
};

export default stylesFn;
