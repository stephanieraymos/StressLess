import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, Image, Linking, Button } from 'react-native';
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
          image: 'images/Legs-Up-the-Wall.png',
          link: 'https://www.youtube.com/watch?v=xmcDj4Bf--0'
        },
        {
          title: 'Seated Forward Fold',
          data: 'Seated Forward Fold gives the whole back of your body a good stretch, from your calves to your hamstrings and all across your spine. This can be done with a block (as shown,) or it can be done without a block with your spine and arms straight. Picture your posture forming a triange with the 3 points being your hips, your shoulders and where your hands meet your feet. The latter is refered to as the seated forward bend.',
          image: 'images/seated-forward-fold.png',
          link: 'https://www.youtube.com/watch?v=Xn1wigQSrmI'
        },
        {
          title: 'Cat/Cow Pose',
          data: 'Cat-Cow is a gentle flow between two poses that warms the body and brings flexibility to the spine. It stretches the back torso and neck, and strengthens the abdominal organs. It also open the chest, encouraging the breath to become slow and deep. The first post in the Cat/Cow variation is the cat (shown above.) The second pose is the cow, which is achieved by pulling your torso down with your back arched in the shape of a "u" rather than a "rainbow." Alternate between the two poses on inhale/exhale. Your head will face down during Cat, and up during Cow.',
          image: 'images/Cat--Pose.png',
          link: 'https://www.youtube.com/watch?v=BgmjbARCdvM'
        },
        {
          title: 'Corpse Pose',
          data: 'Corpse Pose is often refered to as the "Final Relaxation Pose." Because of this, it is usually the last pose in a yoga session to relax the body. Lying on your back, let the arms and legs drop open, with the arms about 45 degrees from the side of your body.With your eyes closed, take slow deep breaths through your nose. Allow your body to become heavy, letting it relax into the floor. Scan the body from the tips of your toes, to the top of your head, looking for tension. Release and relax any areas that you find. If you need to, rock or wiggle parts of your body from side to side to encourage further release.',
          image: 'images/Corpse-Pose.png',
          link: 'https://www.youtube.com/watch?v=oh8z3FHjdW4'
        }
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
      return(
      <Accordian
      title={item.title}
    >
      <ScrollView>
        <View
          style={{ height: 100, width: 100, marginBottom: 10 }}>
            <Image
              source={{uri: baseUrl + item.image}}
              style={{ height: 350, width: 350, marginTop: -70, paddingTop: 80, alignItems: 'center'}}
                           
                        />
        </View>
        <Text
              style={{ marginTop: 150 }}>
              {item.data}
        </Text>
        <Button 
          title="See how" 
          onPress={ ()=>{ Linking.openURL(item.link)}}
          buttonStyle={{color: '#1AA7A6', marginTop: 20}} />
      </ScrollView>
    </Accordian>
    )})

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
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