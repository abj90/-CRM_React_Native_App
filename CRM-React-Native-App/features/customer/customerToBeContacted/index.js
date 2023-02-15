import React, { useEffect } from "react";
import { Keyboard, View, Text } from "react-native";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import Button from "../../../components/Button";
import stylesFn from "./style";
import { regionsBtnOptions } from "../../../util/constans";

const onSubmit = (seconds) => {
  Keyboard.dismiss();
  const schedulingOptions = {
    content: {
      title: `The customers from the region you should check today is ${
        regionsBtnOptions[Math.floor(Math.random() * regionsBtnOptions.length)]
          .title
      }`,
      body: "Open the app to see the customers in the region!",
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      color: "blue",
    },
    trigger: {
      seconds: seconds,
    },
  };
  // Notifications show only when app is not active.
  // (ie. another app being used or device's screen is locked)
  Notifications.scheduleNotificationAsync(schedulingOptions);
};

const handleNotification = () => {
  console.warn("Your notification ran, but won`t show up in the app!");
};

const askNotification = async () => {
  // We need to ask for Notification permissions for ios devices
  const { status } = await Notifications.requestPermissionsAsync();
  if (Constants.isDevice && status === "granted") {
    console.log("Notification permissions granted.");
  }
};

const CustomerToBeContacted = () => {
  const styles = stylesFn();

  useEffect(() => {
    askNotification();

    const listener =
      Notifications.addNotificationReceivedListener(handleNotification);
    return () => listener.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Press the button to check the customers from region you should contact
        ASAP!
      </Text>

      <Button
        text={"Schedule"}
        onPress={() => {
          onSubmit(5);
        }}
        disabled={false}
      />
    </View>
  );
};

export default CustomerToBeContacted;
