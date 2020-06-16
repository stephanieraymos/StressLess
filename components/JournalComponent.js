import React, { Component } from 'react';
import { ScrollView, TextInput, Button, Alert } from 'react-native';

export class Journal extends Component {

  static navigationOptions = {
    title: 'Journal'
  };

  render() {
    return (
      <ScrollView
      style={{}}>
        <TextInput
          placeholder="This is your journal"
          style={{
            padding: 10,
            backgroundColor: '#d0efff'}}
          multiline={true}
          numberOfLines={30}
          textAlignVertical='top'    >
        </TextInput>
        <Button
          title="Save"
          color="#2a9df4"
          style={{padding: 10}}
          onPress={() => Alert.alert('Journal saved')}
        />
      </ScrollView>
    )
  }
}

export default Journal; 
