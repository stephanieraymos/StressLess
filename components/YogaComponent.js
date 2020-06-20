import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Linking, Button } from 'react-native';
import Accordian from './AccordionComponent';
import { baseUrl } from '../shared/baseUrl';
export class YogaComponent extends Component {
  static navigationOptions = {
    title: 'Yoga'
  };
  constructor(props) {
    super(props);
    this.state = {
      yoga: [
        {
          title: 'Child\'s Pose',
          data: 'Child\'s Pose can be done as shown; with your arms resting along your sides, or with your arms extended straight out above your head (refered to as the extended child\'s pose.',
          image: 'images/childs-pose.png',
          link: 'https://www.youtube.com/watch?time_continue=5&amp;v=IoeE1Fx31nc'

        },
        {
          title: 'Legs Up the Wall Pose',
          data: 'The Legs Up the Wall Pose is an inversion pose in which you lie on the floor next to a wall and place your legs together vertically against the wall.',
          image: 'images/childs-pose.png',
          link: 'https://www.youtube.com/watch?v=xmcDj4Bf--0'
        },
      ]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderAccordions()}
      </View>
    );
  }
  renderAccordions = () => {
    return this.state.yoga.map(item =>  
    {
      console.log(item.image)
      return(<Accordian
      title={item.title}
    >
      <View>
        <View
          style={{ height: 100, width: 100 }}>
            {console.log('image', baseUrl + item.image)}
            <Image
              source={{uri: baseUrl + item.image}}
              style={{ height: 100, width: 100 }}
                           
                        />
        </View>
        <Text>
          {item.data}
        </Text>
        <Button title="Click me" onPress={ ()=>{ Linking.openURL(item.link)}} />
      </View>
    </Accordian>)})

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#d0efff',
  }
});
export default YogaComponent

// constructor(props) {
//   super(props);
//   this.state = {
//     yoga:[
//       {
//         title: 'Child\'s Pose',
//         data: [
//           {key: data, value: 'Child\'s Pose can be done as shown; with your arms resting along your sides, or with your arms extended straight out above your head (refered to as the extended child\'s pose.'},
//           {key: image, value:'images/childs-pose.png' },
//           {key: link, value:<WebView
//             style={{flex:1, height: 100, width: 100}}
//             javaScriptEnabled={true}
//             source={{uri: 'https://www.youtube.com/watch?time_continue=5&amp;v=IoeE1Fx31nc'}}
//           /> }
//         ]
//         // image: 'images/childs-pose.png',
//         // link: 
//         //   <WebView
//         //     style={{flex:1, height: 100, width: 100}}
//         //     javaScriptEnabled={true}
//         //     source={{uri: 'https://www.youtube.com/watch?time_continue=5&amp;v=IoeE1Fx31nc'}}
//         //   />
//       },