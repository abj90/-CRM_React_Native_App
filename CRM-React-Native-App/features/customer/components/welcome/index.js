import { View, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../../../components/Button";
import stylesFn from "./style";
import { useCleanAsncStorage } from "../../hooks";

const Welcome = () => {
  const { navigate } = useNavigation();
  const styles = stylesFn();
  const { onCleanAsyncStorage } = useCleanAsncStorage();

  const createAlert = () =>
    Alert.alert("CRM", "Async Store has been cleanned", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

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
          onCleanAsyncStorage();
          createAlert();
        }}
        disabled={false}
      />
    </View>
  );
};

export default Welcome;
