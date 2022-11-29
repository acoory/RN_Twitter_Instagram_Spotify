import React, { useRef } from "react";
import { Animated, Dimensions, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { routes } from "./routes/RouteTabNavigator";

const Tab = createBottomTabNavigator();

export default function tabNavigator() {
  // routes.length is the number of tabs and 40 is left/right margin of the tab
  const width = (Dimensions.get("window").width - 40) / routes.length;
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  const [color, setColor] = React.useState("#248ae6");

  // duration transition of the tab indicator
  const duration = 500;

  const screenOptions = {
    tabBarActiveTintColor: "#3498db",
    tabBarInactiveTintColor: "#bdc3c7",
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      backgroundColor: "white",
      position: "absolute",
      bottom: 40,
      left: 20,
      right: 20,
      height: 60,
      borderRadius: 10,
      borderwidth: 5,
      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowOffset: {
        width: 10,
        height: 10,
      },
    },
  };

  const animated = (value, index) => {
    setColor(routes[index].color);
    return Animated.timing(tabOffsetValue, {
      toValue: value,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Twitter" screenOptions={screenOptions}>
        {routes.map((route, index) => (
          <Tab.Screen
            key={index}
            name={route.name}
            component={route.component}
            options={{
              tabBarIcon: route.options.tabBarIcon,
            }}
            listeners={{
              tabPress: () =>
                index >= 1
                  ? animated(width * index, index)
                  : animated(0, index),
            }}
          />
        ))}
      </Tab.Navigator>
      <Animated.View
        style={[
          styles.AnimatedView,
          {
            width: width,
            transform: [{ translateX: tabOffsetValue }],
            backgroundColor: color,
          },
        ]}
      ></Animated.View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  AnimatedView: {
    height: 4,
    position: "absolute",
    bottom: 98,
    left: 20,
    borderRadius: 20,
  },
});
