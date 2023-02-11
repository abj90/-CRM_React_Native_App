import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/Welcome";
import RegionListScreen from "../screens/Regions";
import CreateCustomerScreen from "../screens/Create-customer";
import CustomersByRegion from "../screens/Customers-by-region";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="regionList"
          component={RegionListScreen}
          title="List of Regions"
        />
        <Stack.Screen name="New" component={CreateCustomerScreen} />
        <Stack.Screen name="CustomerByRegions" component={CustomersByRegion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
