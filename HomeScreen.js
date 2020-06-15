import React, { Component } from 'react';
import {StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button,Content } from 'native-base';


const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('./assets/stage1.jpg'),
  },
  {
    text:'card two',
    name:'two',
    image:require('./assets/stage2.jpg')
  },
  {
    text: 'Card One',
    name: 'three',
    image: require('./assets/stage3.jpg'),
  },
  {
    text: 'Card One',
    name: 'four',
    image: require('./assets/stage4.jpg'),
  },
  {
    text: 'Card One',
    name: 'five',
    image: require('./assets/stage5.jpg'),
  },
  {
    text: 'Card One',
    name: 'six',
    image: require('./assets/stage6.jpg'),
  },
  {
    text: 'Card One',
    name: 'seven',
    image: require('./assets/stage7.jpg'),
  },
  {
    text: 'Card One',
    name: 'eight',
    image: require('./assets/stage8.jpg'),
  },
  {
    text: 'Card One',
    name: 'nine',
    image: require('./assets/stage9.jpg'),
  },
];
export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header
          noLeft={true}
          style={{backgroundColor:"pink"}}
        >
        <Text style={{color:"black",fontSize:20,marginTop:15}}>Tracker</Text>
        </Header>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card transparent style={{ backgroundColor:"pink",elevation: 3 , marginTop:30, borderRadius:10, borderColor:"black",paddingLeft:10,paddingRight:10,width:330,marginLeft:15}}>
                <CardItem>
                  <Left>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image resizeMode="cover" style={{ height: 370, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text onPress={()=>{alert("hey")}}>Get Details</Text>
                  <Icon name="heart" style={{ marginLeft:60,color: '#ED4A6A' }} />
                  <Text style={{marginLeft:0}} onPress={()=>{alert("het")}}>Precautions</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
        <View style={{marginTop:500,justifyContent:"center",alignContent:"center"}}>
        <Button
        rounded
        style={{marginLeft:30,width:300,backgroundColor:"pink"}}
        onPress={()=>{
            this.props.navigation.navigate("Health")
        }}
        >
          <Text style={{marginLeft:80,color:"black"}}>
            Health Insights
          </Text>
        </Button>
        </View>
        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});