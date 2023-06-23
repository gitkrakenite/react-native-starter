import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, Button } from "react-native";

const DetailScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>DetailScreen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailScreen;
