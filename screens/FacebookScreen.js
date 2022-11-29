import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Svg, { Path } from "react-native-svg";

export default function FacebookScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
        }}
      >
        {/* Header */}
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Image
              source={require("../assets/facebook/facebooklogo.png")}
              style={{ width: 130, height: 50 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Icon
              name="search"
              size={25}
              color="black"
              style={{
                paddingRight: 20,
              }}
            />
            <Icon
              name="facebook-messenger"
              size={25}
              color="black"
              style={{
                paddingRight: 20,
              }}
            />
            <Icon name="bell-o" size={25} color="black" />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
