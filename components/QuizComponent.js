import React, { Component } from 'react';
import { ScrollView, Button, Alert, Text, TextInput } from 'react-native';

export class Quiz extends Component {

  static navigationOptions = {
    title: 'Quiz'
  };

  render() {
    return (
      <ScrollView>
      <Text >Where is your favorite place?</Text>
      <ScrollView>
      <TextInput
          placeholder="This can be as simple as your own home, or as complex as a place you've seen in your dreams."
          style={{
            padding: 10,
            backgroundColor: '#d0efff'}}
          multiline={true}
          numberOfLines={4}
          textAlignVertical='top'    >
        </TextInput>

        <Text>What would you do if you knew you could not fail?</Text>
        <TextInput
          placeholder="Would you travel the world? Become an astronaut? Learn to fly a plane?"
          style={{
            padding: 10,
            backgroundColor: '#d0efff'}}
          multiline={true}
          numberOfLines={4}
          textAlignVertical='top'    >
        </TextInput>

        <Text>How would you describe yourself?</Text>
        <TextInput
          placeholder="For the record; everyone is perfect just the way they are."
          style={{
            padding: 10,
            backgroundColor: '#d0efff'}}
          multiline={true}
          numberOfLines={4}
          textAlignVertical='top'    >
        </TextInput>

        <Text>If you could choose to acquire or give up any traits, what would they be?</Text>
        <TextInput
          placeholder="Would you be kinder? Less emotional?"
          style={{
            padding: 10,
            backgroundColor: '#d0efff'}}
          multiline={true}
          numberOfLines={4}
          textAlignVertical='top'    >
        </TextInput>
        <Text>Do you have routines? What are they?</Text>
        <TextInput
          placeholder="What do you do when you wake up in the morning? Or before you go to sleep?"
          style={{
            padding: 10,
            backgroundColor: '#d0efff'}}
          multiline={true}
          numberOfLines={4}
          textAlignVertical='top'    >
        </TextInput>
        <Text>If this were the last day of your life, would you have the same plans for today? What would you like to do instead?</Text>
        <TextInput
          placeholder="Does this inspire you to make a bucket list?&hearts;"
          style={{
            padding: 10,
            backgroundColor: '#d0efff'}}
          multiline={true}
          numberOfLines={4}
          textAlignVertical='top'    >
        </TextInput>

      </ScrollView>
        <Button
          title="Save"
          color="#2a9df4"
          style={{padding: 10}}
          onPress={() => Alert.alert('Quiz saved')}
        />
      </ScrollView>
    )
  }
}

export default Quiz; 
