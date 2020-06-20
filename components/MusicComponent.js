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
        {this.state.music.map(item => <TouchableOpacity
          onPress={() => Linking.openURL(item.link)}>
          <Tile
            containerStyle={{
              marginBottom: 30, marginTop: 30, marginLeft: 10, marginRight: 10, alignSelf: 'center', justifyContent: 'center', borderStyle: 'solid', borderWidth: 5,
            }}
            title={item.name}
            titleStyle={{ textAlign: 'center' }}
            titleNumberOfLines={1}
            imageSrc={{ uri: baseUrl + item.image }}
            imageContainerStyle={{
              height: 200, width: 260, alignSelf: 'center',
            }}
          >
          </Tile>
        </TouchableOpacity>
        )}

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





const styles = StyleSheet.create({
  cardRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 20
  },
  cardItem: {
    flex: 1,
    margin: 10,
    height: 200,
    width: 200
  }
});


export default Music;