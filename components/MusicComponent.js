import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { Tile } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import { MUSIC } from '../shared/music';

export class Music extends Component {

  static navigationOptions = {
    title: 'Music'
  };
  constructor(props) {
    super(props);
    this.state = {
      music: MUSIC,
    };
  }

  render() {
    return (

      <ScrollView
      >
        {this.state.music.map(item =>
          <Tile
            containerStyle={{
              marginBottom: 30, marginTop: 30, marginLeft: 10, marginRight: 10, alignSelf: 'center', justifyContent: 'center', borderStyle: 'solid', borderWidth: 5,
            }}
            title={item.name}
            titleStyle={{ textAlign: 'center' }}
            titleNumberOfLines={1}
            imageSrc={{ uri: baseUrl + item.image }}
            onPress={() => Linking.openURL(item.link)}
            imageContainerStyle={{ height: 200, width: 260, alignSelf: 'center' }}

          >
          </Tile>
        )}
      </ScrollView>
    )
  }
}



export default Music;