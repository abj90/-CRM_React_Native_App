import { StyleSheet } from "react-native";
import Navigation from "./navigation";
import { Provider } from "react-redux";
import initializeStore from "./store";

const store = initializeStore();

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
