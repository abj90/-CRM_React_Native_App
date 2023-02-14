import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useUpdateField } from "../../features/customer/hooks";
import Button from "../Button";
import stylesFn from "./style";
import { regionsBtnOptions, isActionBtnOptions } from "../../util/constans";
import { PENDING } from "../../util/constans";

const CustomerForm = ({ onSubmit, customerId, status }) => {
  const styles = stylesFn();
  const { navigate } = useNavigation();
  const { fields, setFormField } = useUpdateField(customerId);

  const { firstName, lastName, isActive, region } = fields;

  //generate regions buttons list - start
  const getBtnListWithSelectedBtnUpdated = (btnList, selectedBtnId) => {
    return btnList.map((el) => {
      if (el.id == selectedBtnId) {
        return { ...el, backgroundColor: "#13678A", color: "#FFFFFF" };
      } else {
        return { ...el, backgroundColor: "#FFFFFF", color: "#000000" };
      }
    });
  };

  const [regionsBtnList, setRegionsBtnList] = React.useState(
    customerId
      ? getBtnListWithSelectedBtnUpdated(regionsBtnOptions, region?.id)
      : regionsBtnOptions
  );

  const selectRegion = ({ id, title }) => {
    setRegionsBtnList(getBtnListWithSelectedBtnUpdated(regionsBtnList, id));
    setFormField("region", { id, title });
  };

  //generate regions buttons list - end

  //generate Active buttons list - start

  const getActiveBtnListUpdated = (btnList, isActive) => {
    return btnList.map((el) => {
      if (el.isActive == isActive) {
        return { ...el, backgroundColor: "#13678A", color: "#FFFFFF" };
      } else {
        return { ...el, backgroundColor: "#FFFFFF", color: "#000000" };
      }
    });
  };

  const [isActionBtnList, setIsActionBtnList] = React.useState(
    customerId
      ? getActiveBtnListUpdated(isActionBtnOptions, isActive)
      : isActionBtnOptions
  );

  const selectActiveBtn = (item) => {
    setIsActionBtnList(getActiveBtnListUpdated(isActionBtnList, item.isActive));
    setFormField("isActive", item.isActive);
  };

  //generate Active buttons list - end

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
      </View>
      <Button
        style={styles.btn}
        text={"Save Customer"}
        onPress={onHandleSubmit}
        disabled={status !== PENDING}
      />
    </View>
  );
};

export default CustomerForm;
