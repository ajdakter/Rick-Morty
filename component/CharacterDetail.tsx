import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Header from "./header/Header";

export default function CharacterDetail(props: any) {
  const [id, setId] = useState(null);
  const [name, setName] = useState(null);
  const [status, setStatus] = useState(null);
  const [type, setType] = useState(null);
  const [gender, setGender] = useState(null);
  const [originName, setOriginName] = useState(null);
  const [locationName, setLocationName] = useState(null);
  const [image, setImage] = useState(null);


  const getCharacterDetails = async () => {
    const uri = "https://rickandmortyapi.com/api/character/2";
    let json: any;

    try {
      let response = await fetch(uri, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      json = await response.json();
      setId(json.id);
      setName(json.name);
      setStatus(json.status);
      setType(json.type);
      setGender(json.gender);
      setOriginName(json.origin.name);
      setLocationName(json.location.name);
      setImage(json.image);
      console.log(dene);
      return json;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCharacterDetails();
  }, []);

  return (
    <View style={{ flex: 1 }}>
    <Header navigation={undefined}></Header>
    <View>
      <Image
        source={{
          uri: image,
        }}
        style={{ width: "100%", height: "60%" }}
      />
      <View style={{ margin: 15, borderColor: "#1b0000", borderWidth: 2 }}>
        <Text style={styles.textStyle}>ID : {id}</Text>
        <Text style={styles.textStyle}>NAME : {name}</Text>
        <Text style={styles.textStyle}>STATUS : {status}</Text>
        <Text style={styles.textStyle}>TYPE : {type}</Text>
        <Text style={styles.textStyle}>GENDER : {gender}</Text>
        <Text style={styles.textStyle}>ORIGIN NAME : {originName}</Text>
        <Text style={styles.textStyle}>LOCATION NAME : {locationName}</Text>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    textAlign: "left",
    borderBottomWidth: 2,
    borderColor: "#4ba3c7",
    fontSize: 20,
    color: "#795548",
    paddingLeft: 15,
  },
});
