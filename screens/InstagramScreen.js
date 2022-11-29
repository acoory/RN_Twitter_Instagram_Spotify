import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

export default function InstagramScreen() {
  const stories = [
    {
      name: "Story 1",
      img: require("../assets/instagram/profil1.jpeg"),
    },
    {
      name: "Story 2",
      img: require("../assets/instagram/profil2.jpeg"),
    },
    {
      name: "Story 3",
      img: require("../assets/instagram/profil3.jpeg"),
    },
    {
      name: "Story 4",
      img: require("../assets/instagram/profil4.jpeg"),
    },
    {
      name: "Story 5",
      img: require("../assets/instagram/profil5.jpeg"),
    },
    {
      name: "Story 6",
      img: require("../assets/instagram/profil6.jpeg"),
    },
    {
      name: "Story 7",
      img: require("../assets/instagram/profil7.webp"),
    },
    {
      name: "Story 8",
      img: require("../assets/instagram/profil8.jpeg"),
    },
  ];

  const posts = [
    {
      name: "Post 1",
      img: require("../assets/instagram/post1.webp"),
    },
    {
      name: "Post 2",
      img: require("../assets/instagram/post2.webp"),
    },
    {
      name: "Post 3",
      img: require("../assets/instagram/post3.jpeg"),
    },
  ];
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
        }}
      >
        <StatusBar barstyle="dark-content" />
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
              source={require("../assets/instalogo.png")}
              style={{ width: 130, height: 50 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Icon
              name="plus-square-o"
              size={25}
              color="black"
              style={{
                paddingRight: 20,
              }}
            />
            <Icon
              name="heart-o"
              size={25}
              color="black"
              style={{
                paddingRight: 20,
              }}
            />
            <Icon name="paper-plane-o" size={25} color="black" />
          </View>
        </View>

        {/* Stories */}
        <View
          style={{
            width: "100%",
            marginTop: 10,
          }}
        >
          <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
            <FlatList
              data={stories}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <View
                  style={{
                    alignItems: "center",
                    width: 70,
                    marginLeft: 10,
                  }}
                >
                  <LinearGradient
                    colors={["#FF0000", "#FF7F00", "#d35400"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 50,

                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={item.img}
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        borderWidth: 3,
                        borderColor: "white",
                      }}
                    />
                  </LinearGradient>
                  <Text>{item.name}</Text>
                </View>
              )}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
            {/* Posts */}
            {posts.map((post) => (
              <View
                style={{
                  width: "100%",
                  marginTop: 10,
                }}
              >
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/instagram/profil1.jpeg")}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        marginRight: 10,
                      }}
                    />
                    <Text>{post.name}</Text>
                  </View>
                  <Icon name="ellipsis-h" size={20} color="black" />
                </View>
                <Image
                  source={post.img}
                  style={{
                    width: "100%",
                    height: 400,
                    marginTop: 10,
                  }}
                />
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Icon name="heart-o" size={25} color="black" />
                    <Icon
                      name="comment-o"
                      size={25}
                      color="black"
                      style={{
                        paddingLeft: 10,
                      }}
                    />
                    <Icon
                      name="paper-plane-o"
                      size={25}
                      color="black"
                      style={{
                        paddingLeft: 10,
                      }}
                    />
                  </View>
                  <Icon name="bookmark-o" size={25} color="black" />
                </View>
                <View
                  style={{
                    width: "100%",
                    paddingHorizontal: 10,
                    marginTop: 10,
                  }}
                >
                  <Text>
                    Liked by <Text style={{ fontWeight: "bold" }}>user</Text>{" "}
                    and <Text style={{ fontWeight: "bold" }}>100 others</Text>
                  </Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    paddingHorizontal: 10,
                    marginTop: 10,
                  }}
                >
                  <Text>
                    <Text style={{ fontWeight: "bold" }}>user</Text> Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quisquam
                    voluptatum, quod, quia, voluptas quas voluptatem quae
                    voluptates quibusdam quidem natus quos. Quisquam, quae
                    voluptates. Quisquam, quae voluptates. Quisquam, quae
                    voluptates. Quisquam, quae voluptates. Quisquam, quae
                  </Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    paddingHorizontal: 10,
                    marginTop: 10,
                  }}
                >
                  <Text style={{ color: "gray" }}>View all 100 comments</Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 10,
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={require("../assets/instagram/profil1.jpeg")}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      marginRight: 10,
                    }}
                  />
                  <Text>Add a comment...</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}
