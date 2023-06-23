import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, Switch } from "react-native";
import { useColorScheme } from "nativewind";

// routing
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";

const Stack = createStackNavigator();

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 40,
        backgroundColor: colorScheme === "dark" ? "black" : "white",
      }}
    >
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      {/* content */}
      <View style={{ flex: 1 }}>
        <View className="flex flex-row justify-evenly bg-emerald-600 dark:bg-black items-center">
          <Text className="dark:text-white font-bold text-xl">
            ShopTillDrop
          </Text>
          {/* value to change theme */}
          <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
        </View>

        <NavigationContainer>
          <Stack.Navigator>
            {/* the first route rendered first */}
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Details"
              component={DetailScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}
