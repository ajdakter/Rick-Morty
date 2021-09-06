import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Info from "../data/Info.json";
import HeaderEpisode from "./header/HeaderEpisode";

export default function Episode({ navigation }) {
  const [listData, setListData] = useState(null);
  const [data, setData] = useState(null);
  const uri = Info.BaseUri;
  let json: any;

  const getListData = async () => {
    try {
      let response = await fetch(uri, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      json = await response.json();
      setListData(json.results);
      setData(json.results.id);
    } catch (error) {
      console.log(error);
    }

    return json;
  };

  React.useEffect(() => {
    getListData();
  }, []);

  const Item = ({ name, air_date, id }) => (
    <TouchableOpacity
      style={{
        backgroundColor: "#bcaaa4",
        height: 130,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        borderColor: "#8c7b75",
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderWidth: 3,
        borderRadius: 5,
        alignItems: "flex-end",
      }}
      onPress={() =>
        
        navigation.navigate("EpisodeDetail", {
          otherParam: data,
        })
      }
    >
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          padding: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/rick_morty.png")}
          style={{ width: 80, height: 100 }}
        />

        <Text
          style={{
            fontSize: 15,
            color: "#ffffff",
            textAlign: "center",
            padding: 5,
            fontWeight: "bold",
          }}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
  const renderItem = ({ item, air_date, id }) => (
    <Item name={item.name} air_date={item.air_date} id={item.id} />
  );

  return (
    <View style={{ flex: 1 }}>
      <HeaderEpisode navigation={undefined}></HeaderEpisode>
      <View style={{ backgroundColor: "#fafafa", flex: 1 }}>
        <ScrollView style={{ marginBottom: 50 }}>
          <SafeAreaView
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <FlatList
              data={listData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </ScrollView>
      </View>
    </View>
  );
}
