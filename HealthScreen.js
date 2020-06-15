import React, { Component } from "react";
import { StyleSheet, View ,ScrollView,Image,Text} from "react-native";
import {Container,Header,Item,Icon,Input,Button} from 'native-base';

function HealthScreen(props) {
  return (
    <ScrollView style={styles.container}>
       <Header searchBar rounded style={{backgroundColor:"#FFC0CB"}}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

      <View style={styles.rectRow}>
        <View style={styles.rect}>
            <Image resizeMode="cover" style={{width:156,height:221,borderRadius:15}} source={require("./assets/health1.jpg")}/>
        </View>
        <View style={styles.rect2}><Image resizeMode="cover" style={{width:156,height:221,borderRadius:15}} source={require("./assets/health12.jpg")}/></View>
      </View>
      <View style={styles.rectRowD}>
        <View style={styles.rect}><Image resizeMode="cover" style={{width:156,height:221,borderRadius:15}} source={require("./assets/health8.jpg")}/></View>
        <View style={styles.rect2}><Image resizeMode="cover" style={{width:156,height:221,borderRadius:15}} source={require("./assets/health14.jpg")}/></View>
      </View>
      
      <View style={styles.rectRowD}>
      <View style={styles.rect}><Image resizeMode="cover" style={{width:156,height:221,borderRadius:15}} source={require("./assets/health5.jpg")}/></View>
        <View style={styles.rect2}><Image resizeMode="cover" style={{width:156,height:221,borderRadius:15}} source={require("./assets/health6.jpg")}/></View>
      </View>

      <View style={styles.rectRowD}>
      <View style={styles.rect}><Image resizeMode="cover" style={{width:156,height:221,borderRadius:15}} source={require("./assets/health11.jpg")}/></View>
        <View style={styles.rect2}><Image resizeMode="cover" style={{width:156,height:221,borderRadius:15}} source={require("./assets/health3.jpg")}/></View>
      </View>

      <View style={styles.rectRowD}>
      <View style={styles.rect}><Image resizeMode="cover" style={{width:156,height:221,borderRadius:15}} source={require("./assets/health9.jpg")}/></View>
        <View style={styles.rect2}><Image resizeMode="cover" style={{width:156,height:221,borderRadius:15}} source={require("./assets/health10.jpg")}/></View>
      </View>
      <View style={{marginBottom:10}}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"pink"
  },
  rect: {
    width: 156,
    height: 221,
    backgroundColor: "#E6E6E6",
    borderRadius:20
  },
  rect2: {
    width: 156,
    height: 221,
    backgroundColor: "#E6E6E6",
    marginLeft: 15,
    borderRadius:15
  },
  rectRow: {
    height: 221,
    flexDirection: "row",
    flex: 1,
    marginRight: 14,
    marginLeft: 18,
    marginTop: 20
  },
  rectRowD: {
    height: 221,
    flexDirection: "row",
    flex: 1,
    marginRight: 14,
    marginLeft: 18,
    marginTop:20
  }
});

export default HealthScreen;
