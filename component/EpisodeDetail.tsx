import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Info from "../data/Info.json";
import Header from "../component/header/Header";

export default function EpisodeDetail({navigation,route},props:any) {
  const [edisodeDetail, setEdisodeDetail] = useState(null);
  const [name, setName] = useState(null);
  const [air_date, setDate] = useState(null);
  const [episode, setEdisode] = useState(null);
  const uri = Info.BaseUri;
  let json: any;
  var temp = 1;
 
  const { itemId } = route.params;
  const { otherParam } = route.params;


  const UserInfo = (props: any) => {
    const { otherParam } = route.params;
    return otherParam;
  };

  const auth_user = UserInfo(props);
  console.log(auth_user);
  useEffect(() => {
    getEpisodeDetails("8");
    temp = 1
    console.log("geldi*******************");
    console.log(otherParam);
    //console.log(JSON.stringify(_caption));
    console.log(JSON.stringify(itemId));
  }, []);
 

  const getEpisodeDetails = async (id: String) => {
    try {
      let response = await fetch(uri + id, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      json = await response.json();
      setEdisodeDetail(json.characters);
      setName(json.name);
      setDate(json.air_date);
      setEdisode(json.episode);
      //console.log(dene);
      //console.log(json.characters[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const Item = ({ name, id }) => (
    <TouchableOpacity
      style={{
        backgroundColor: "#bcaaa4",
        height: 60,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        marginTop: 10,
        borderColor: "#8c7b75",
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderWidth: 3,
        borderRadius: 5,
        alignItems: "flex-end",
      }}
     // onPress={() => }
      
      onPress={() => navigation.navigate('CharacterDetail')}
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
        <Text
          style={{
            fontSize: 20,
            color: "#b3e5fc",
            textAlign: "center",
            padding: 5,
          }}
        >
          Character {temp++}
        </Text>
      </View>
    </TouchableOpacity>
  );
  const renderItem = ({ item, id }) => <Item name={item.name} id={item.id} />;

  return (<View style={{flex:1}}>
    <Header navigation={undefined}></Header>
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          backgroundColor: "#efdcd5",
          alignItems: "flex-start",
          justifyContent: "space-around",
          marginLeft: "5%",
          marginTop: "10%",
        }}
      >
        <View
          style={{
            backgroundColor: "#795548",
            paddingLeft: 15,
            borderEndWidth: 2,
            borderColor: "#1b0000",
            width: "55%",
            height: "100%",
            borderTopRightRadius: 100,
            borderRadius: 5,
            marginTop: "5%",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "#4ba3c7",
              marginTop: 15,
              fontSize: 20,
              margin: 10,
            }}
          >
            Name
          </Text>
          <Text
            style={{
              marginLeft: 10,
              textAlign: "left",
              fontSize: 18,
              color: "#b3e5fc",
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#4ba3c7",
              fontSize: 20,
              margin: 10,
            }}
          >
            Air Date
          </Text>
          <Text
            style={{
              marginLeft: 10,
              textAlign: "left",
              fontSize: 18,
              color: "#b3e5fc",
            }}
          >
            {air_date}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#4ba3c7",
              fontSize: 20,
              margin: 10,
            }}
          >
            Episode
          </Text>
          <Text
            style={{
              marginLeft: 10,
              textAlign: "left",
              fontSize: 18,
              color: "#b3e5fc",
            }}
          >
            {episode}
          </Text>
        </View>

        <Image
          source={require("../assets/rick_morty.png")}
          style={{ width: "45%", height: "100%", margin: 20, padding: 5 }}
        />
      </View>

      <Text
        style={{
          margin: 10,
          padding: 10,
          backgroundColor: "#795548",
          color: "#4ba3c7",
          fontSize: 22,
          textAlign: "center",
          borderRadius: 5,
          marginTop: 30,
          fontWeight: "bold",
        }}
      >
        Characters
      </Text>
      <ScrollView style={{ margin: 20, height: "20%" }}>
        <FlatList
          data={edisodeDetail}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efdcd5",
  },
});
