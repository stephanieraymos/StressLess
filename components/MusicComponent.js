import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Card } from 'react-native-elements';
import Link from './LinkingComponent';
import { baseUrl } from '../shared/baseUrl';
import MUSIC from '../shared/music';

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
        style={{}}>
        <TouchableOpacity
          onPress={Linking.openUrl(this.props.music.link)}>
          <Card
            featuredTitle={this.props.music.name}
            image={{ uri: baseUrl + this.props.music.image }}>
          </Card>
        </TouchableOpacity>

      </ScrollView>
    )
  }
}

{/* <Link /> */ }


//      <TouchableOpacity
// onPress={Linking.openUrl("https://www.youtube.com/watch?v=R_MXH2pvPdY")} 
// ></TouchableOpacity>




// import React, { Component } from 'react';
// import { ScrollView, Linking, StyleSheet, Share } from 'react-native';
// import { Card } from 'react-native-elements';
// import { connect } from 'react-redux';
// import { baseUrl } from '../shared/baseUrl';

// const mapStateToProps = state => {
//   return {
// music: state.music
//   };
// };


// function RenderMusic(props) {

//   const { music } = props;

//   const shareMusic = (title, message, url) => {
//     Share.share({
//       title: title,
//       message: `${title}: ${message} ${url}`,
//       url: url
//     }, {
//       dialogTitle: 'Share ' + title
//     });
//   };

//   if (music) {
//     return (

//         <Card
//           featuredTitle={music.name}
//           image={{ uri: baseUrl + music.image }}>
//         </Card>

//     );
//   }
//   return
// }





// const styles = StyleSheet.create({
//   cardRow: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//     flexDirection: 'row',
//     margin: 20
//   },
//   cardItem: {
//     flex: 1,
//     margin: 10
//   }
// });

export default Music;