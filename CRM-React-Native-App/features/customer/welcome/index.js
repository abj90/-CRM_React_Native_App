import { View, TouchableOpacity, Text } from "react-native";
import Button from "../../../components/Button";
import stylesFn from "./style";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const { navigate } = useNavigation();
  const styles = stylesFn();

  return (
    <View style={styles.container}>
      <Text>Welcome to Customer Manager Plus</Text>

      <Button
        text={"Click to Continue"}
        onPress={() => {
          navigate("regionList");
        }}
        disabled={false}
      />
      <Button
        text={"Clear Storage"}
        onPress={() => {
          console.log("hi there");
        }}
        disabled={false}
      />
    </View>
  );
};

export default Welcome;
