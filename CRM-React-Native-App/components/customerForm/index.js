import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useUpdateField } from "../../features/customer/hooks";
import Button from "../Button";
import stylesFn from "./style";
import { regionsBtnOptions, isActionBtnOptions } from "../../util/constans";

const CustomerForm = ({ onSubmit }) => {
  const styles = stylesFn();
  const { navigate } = useNavigation();
  const { fields, setFormField } = useUpdateField();

  const { firstName, lastName, isActive, regionId } = fields;

  const [isActionBtnList, setIsActionBtnList] =
    React.useState(isActionBtnOptions);
  const [regionsBtnList, setRegionsBtnList] = React.useState(regionsBtnOptions);

  const selectRegion = (item) => {
    setRegionsBtnList(
      regionsBtnList.map((el) => {
        if (el.id == item.id) {
          return { ...el, backgroundColor: "#13678A", color: "#FFFFFF" };
        } else {
          return { ...el, backgroundColor: "#FFFFFF", color: "#000000" };
        }
      })
    );
    setFormField("regionId", item.t);
  };

  const selectActiveBtn = (item) => {
    setIsActionBtnList(
      isActionBtnList.map((el) => {
        if (el.id == item.id) {
          return { ...el, backgroundColor: "#13678A", color: "#FFFFFF" };
        } else {
          return { ...el, backgroundColor: "#FFFFFF", color: "#000000" };
        }
      })
    );
    setFormField("isActive", item.isActive);
  };

  const onHandleSubmit = () => {
    onSubmit();
    navigate("regionList");
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>Customer information:</Text>
        <TextInput
          key={"firstName"}
          placeholder={firstName || "First name"}
          value={firstName || ""}
          style={styles.textInput}
          onChangeText={(v) => setFormField("firstName", v)}
        />

        <TextInput
          key={"lastName"}
          placeholder={lastName || "Last name"}
          value={lastName || ""}
          style={styles.textInput}
          onChangeText={(v) => setFormField("lastName", v)}
        />
        <View style={styles.divider}></View>
        <Text>Active ?</Text>
        {isActionBtnList.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => selectActiveBtn(item)}>
            <View
              style={[
                styles.listRow,
                { backgroundColor: item.backgroundColor },
              ]}
            >
              <Text style={{ color: item.color }}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.divider}></View>
        <Text>Regions:</Text>
        {regionsBtnList.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => selectRegion(item)}>
            <View
              style={[
                styles.listRow,
                { backgroundColor: item.backgroundColor },
              ]}
            >
              <Text style={{ color: item.color }}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <View style={styles.divider}></View>
        <Button
          text={"Save Customer"}
          onPress={onHandleSubmit}
          disabled={false}
        />
      </View>
    </View>
  );
};

export default CustomerForm;
