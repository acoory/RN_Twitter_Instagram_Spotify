import LikeScreen from "../../screens/InstagramScreen";
import TwitterScreen from "../../screens/TwitterScreen";
import SettingsScreen from "../../screens/SpotifyScreen";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import InstagramScreen from "../../screens/InstagramScreen";
import SpotifyScreen from "../../screens/SpotifyScreen";
import FacebookScreen from "../../screens/FacebookScreen";

export const tabBarIcon = (icon, color, size) => {
  return (
    <View
      style={{
        top: "50%",
      }}
    >
      <Icon name={`${icon}`} color={`${color}`} size={size} />
    </View>
  );
};

export const routes = [
  {
    name: "Twitter",
    component: TwitterScreen,
    options: {
      tabBarIcon: ({ focused }) =>
        tabBarIcon("twitter", focused ? "#248ae6" : "gray", 30),
    },
    color: "#248ae6",
  },
  {
    name: "Instagram",
    component: InstagramScreen,
    options: {
      tabBarIcon: ({ focused }) =>
        tabBarIcon("instagram", focused ? "#d31190" : "gray", 26),
    },
    color: "#d31190",
  },
  {
    name: "Spotify",
    component: SpotifyScreen,
    options: {
      tabBarIcon: ({ focused }) =>
        tabBarIcon("spotify", focused ? "#1cd760" : "gray", 30),
    },
    color: "#1cd760",
  },
  {
    name: "Facebook",
    component: FacebookScreen,
    options: {
      tabBarIcon: ({ focused }) =>
        tabBarIcon("facebook", focused ? "#4967aa" : "gray", 25),
    },
    color: "#4967aa",
  },
];
