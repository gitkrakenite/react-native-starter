import React from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>HomeScreend</Text>
      <Image
        className="w-[200px] h-[200px] object-contain m-[20px]"
        source={require("../../assets/img1.jpg")}
      />

      <TouchableOpacity onPress={() => navigation.navigate("Details")}>
        <Text className="bg-black text-white">Ggg</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
