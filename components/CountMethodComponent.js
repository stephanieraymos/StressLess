import React, { Component } from 'react';
import {
  StyleSheet, ScrollView, Image, Card, CardTitle, CardText
} from 'react-native';
import { baseUrl } from '../shared/baseUrl';

export class CountMethod extends Component {
  static navigationOptions = {
    title: '5-4-3-2-1 METHOD'
  };

  constructor(props) {
    super(props);
    this.state = {
      countMethod: [
        {
          title: 'FIVE',
          data: 'Acknowledge 5 things around you that you can SEE. It can be a picture on the wall, the shoes you\'re wearing, a table or couch, clouds moving past, or a nearby tree.',
          image: 'images/five.png'

        },
        {
          title: 'FOUR',
          data: 'Acknowledge 4 things around you that you can TOUCH. It can be your own skin, the couch you\'re sitting on, your lips or hair, or your tongue running across the grooves in your teeth.',
          image: 'images/four.png'
        },
        {
          title: 'THREE',
          data: 'Acknowledge 3 things around you that you can HEAR. It can be the sound of people talking or walking, a clock ticking, birds chirping outside, or the hum of cars driving past outside.',
          image: 'images/three.png'
        },
        {
          title: 'TWO',
          data: 'Acknowledge 2 things around you that you can SMELL. You might walk to a bathroom to smell soap, outside to smell something in nature, lean over and smell a pillow on the couch, a pencil on the desk, or check to see how your deodorant is working today. Whatever it may be, take in the smells around you.',
          image: 'images/two.png'
        },
        {
          title: 'ONE',
          data: 'Acknowledge 1 thing that you can TASTE. It might be the aftertaste of coffee, gum or your last meal. Or take a sip of water or grab a snack if it is handy.',
          image: 'images/one.png'
        }
      ]
    }
  }

  render() {

    return (
      this.state.countMethod.map(item => {

        <ScrollView style={styles.container}>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <Image
              source={{ uri: baseUrl + item.image }}
              style={{ height: 40, width: 40 }}
            />
            <CardText>
              {item.data}
            </CardText>
          </Card>
        </ScrollView>

      })
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#d0efff',
  },
  text: {
    marginLeft: 40
  }
});
export default CountMethod;

{/*<View>
        THE 5-4-3-2-1 METHOD
        The 5-4-3-2-1 method helps to "ground" you and bring you into the present.
        </View> */}