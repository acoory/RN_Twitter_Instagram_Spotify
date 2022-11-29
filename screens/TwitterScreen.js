import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export default function TwitchScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <StatusBar barStyle="dark-content" />
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
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderBottomWidth: 1,
            borderBottomColor: "#eaeaea",
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/twitter/profil1.jpeg")}
              style={{ width: 40, height: 40, borderRadius: 25 }}
            />
            <Icon name="twitter" size={30} color="#248ae6" />
            <Icon name="star-o" size={30} color="transparent" />
          </View>
        </View>
        {/* Body */}
        <ScrollView
          style={{
            width: "100%",
            marginTop: 10,
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
            <View
              style={{
                width: "100%",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "90%",
                  marginTop: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/twitter/profil1.jpeg")}
                      style={{ width: 40, height: 40, borderRadius: 25 }}
                    />
                    <View
                      style={{
                        marginLeft: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        Taylor Adam
                      </Text>
                      <Text
                        style={{
                          color: "grey",
                        }}
                      >
                        @TaylorAdam
                      </Text>
                    </View>
                  </View>
                  <Icon name="ellipsis-h" size={20} color="black" />
                </View>
                <Text
                  style={{
                    marginBottom: 10,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  tincidunt, nisl eget ultricies tincidunt, nisl nisl aliquet
                  nisl, nec luctus nisl nisl nec nunc. Donec tincidunt, nisl
                  eget ultricies tincidunt, nisl nisl aliquet nisl, nec luctus
                  nisl nisl nec nunc.
                </Text>
                <Image
                  source={require("../assets/twitter/post1.webp")}
                  style={{
                    width: "100%",
                    height: 200,
                    borderRadius: 10,
                    marginBottom: 10,
                  }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Icon name="comment-o" size={20} color="black" />
                    <Text
                      style={{
                        marginLeft: 10,
                      }}
                    >
                      10
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Icon name="retweet" size={20} color="black" />
                    <Text
                      style={{
                        marginLeft: 10,
                      }}
                    >
                      10
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Icon name="heart-o" size={20} color="black" />
                    <Text
                      style={{
                        marginLeft: 10,
                      }}
                    >
                      10
                    </Text>
                  </View>
                  <Icon name="share" size={20} color="black" />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
