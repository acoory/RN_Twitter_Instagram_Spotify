import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  StatusBar,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export default function SpotifyScreen() {
  const playlist = [
    {
      name: "Playlist 1",

      img: require("../assets/playlist1.png"),
    },
    {
      name: "Playlist 2",
      img: require("../assets/playlist2.png"),
    },
    {
      name: "Playlist 3",
      img: require("../assets/playlist3.png"),
    },
    {
      name: "Playlist 4",
      img: require("../assets/playlist4.png"),
    },
    {
      name: "Playlist 5",
      img: require("../assets/playlist5.png"),
    },
    {
      name: "Playlist 6",
      img: require("../assets/playlist6.png"),
    },
  ];

  const newTrend = [
    {
      name: "New Trend 1",
      img: require("../assets/newtrend1.png"),
      title: "Offset, Metro Boomin, Drake",
    },
    {
      name: "New Trend 2",
      img: require("../assets/newtrend2.png"),
      title: "Kendrick Lamar, SZA, ScHoolboy Q",
    },
    {
      name: "New Trend 3",
      img: require("../assets/newtrend3.png"),
      title: "Burna boy, Wizkid, Chris Brown",
    },
    {
      name: "New Trend 4",
      img: require("../assets/newtrend4.png"),
      title: "Kalash, Jahyanai",
    },
    {
      name: "New Trend 5",
      img: require("../assets/newtrend5.png"),
      title: "Kendrick Lamar, SZA, ScHoolboy Q",
    },
  ];

  return (
    <View style={styles.container}>
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        horizontal={false}
        alwaysBounceVertical={false}
        
        style={{
          marginBottom: 100,
          width: "100%",
        }}
      > */}
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <View style={styles.header}>
            <Text style={styles.title}>Good Morning</Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 5,
              }}
            >
              <Icon
                name="history"
                size={25}
                color="gray"
                style={{
                  right: 40,
                }}
              />
              <Icon
                name="cog"
                size={25}
                color="gray"
                style={{
                  right: 10,
                }}
              />
            </View>
          </View>

          <View
            style={{
              width: "95%",
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "flex-start",
              marginTop: 20,
            }}
          >
            {playlist.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  flexDirection: "row",
                  backgroundColor: "#252525",
                  width: "49%",
                  alignItems: "center",
                  borderRadius: 5,
                  marginTop: 10,
                }}
              >
                <Image source={item.img} style={styles.imgPlaylist} />
                <Text
                  style={{
                    color: "white",
                    fontSize: 17,
                    fontWeight: "500",
                    left: 10,
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}

            <View
              style={{
                marginTop: 40,
                flexDirection: "row",
                width: "100%",
              }}
            >
              <View>
                <Image
                  source={{
                    uri: "https://www.afrik.com/wp-content/uploads/2020/08/burna-boy-gq-style-spring-summer-2020-promo-scaled-1.jpg",
                  }}
                  style={{ borderRadius: 50, width: 50, height: 50 }}
                />
              </View>
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    color: "gray",
                    fontSize: 13,
                    textTransform: "uppercase",
                    marginLeft: 10,
                  }}
                >
                  New release from
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 27,
                    fontWeight: "bold",
                    marginLeft: 10,
                  }}
                >
                  Burna Boy
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                width: "100%",
                backgroundColor: "#252525",
                borderRadius: 5,
              }}
            >
              <Image
                source={{
                  uri: "https://images.genius.com/479a4e83ce975fe84d0f7e8c9dfc2976.1000x1000x1.png",
                }}
                style={{
                  width: 150,
                  height: 150,
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                }}
              />
              <View
                style={{
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 15,
                      fontWeight: "bold",
                      marginLeft: 10,
                      marginTop: 15,
                    }}
                  >
                    Alone
                  </Text>
                  <Text
                    style={{
                      color: "gray",
                      fontSize: 13,
                      marginLeft: 10,
                    }}
                  >
                    Black Panther : Wakanda Forever
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    top: -20,
                  }}
                >
                  <Icon name="heart-o" size={25} color="white" />
                  <Icon
                    name="play"
                    size={25}
                    color="white"
                    style={{
                      marginLeft: "50%",
                    }}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                width: "100%",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 20,
                }}
              >
                New Trends
              </Text>
            </View>
          </View>
          <View>
            <FlatList
              data={newTrend}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    width: 150,
                    marginLeft: 10,
                    marginTop: 10,
                    marginRight: 10,
                  }}
                >
                  <Image source={item.img} style={styles.imgNewTrend} />
                  <Text
                    style={{
                      color: "gray",
                      fontSize: 13,
                      marginTop: 10,
                    }}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.name}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </SafeAreaView>
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    width: "95%",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "blue",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    // left: 20,
  },
  imgPlaylist: {
    width: 55,
    height: 55,
  },
  imgNewTrend: {
    width: 150,
    height: 150,
  },
});
