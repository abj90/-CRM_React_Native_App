import { Text, TouchableOpacity, View } from "react-native";
import stylesFn from "./style";
const Button = ({ onPress, text, disabled }) => {
  const styles = stylesFn(disabled);
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
