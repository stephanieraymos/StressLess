import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          expanded : false,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
  render() {
    return (
       <View>
            <TouchableOpacity ref={this.accordian} style={styles.row} onPress={()=>this.toggleExpand()}>
                <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color='#d0efff' />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.child}>
                    {/* <Text>{this.props.data}</Text>
                    <Image
                      style= {styles.imageStyle}
                      source= {this.props.image}
                      />
                    <Text>{this.props.link}</Text>     */}
                    {this.props.children}
                </View>
            }
       </View>
    )
  }
  toggleExpand=()=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded : !this.state.expanded})
  }
}
const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: 'white',
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: '#1AA7A6',
    },
    parentHr:{
        height:1,
        color: 'white',
        width:'100%'
    },
    child:{
        backgroundColor: '#d0efff',
        padding:16,
    },
    imageStyle:{
      width: 50,
      height: 50,
    }
});

// this.state.expanded &&
// <View style={{}}>
//     <FlatList
//     data={this.state.data}
//     numColumns={1}
//     scrollEnabled={false}
//     renderItem={({item, index}) => 
//         <View>
//             <TouchableOpacity style={[styles.childRow, styles.button, item.value ? styles.btnActive : styles.btnInActive]} onPress={()=>this.onClick(index)}>
//                 <Text style={[styles.font, styles.itemInActive]} >{item.key}</Text>
//                 <Icon name={'check-circle'} size={24} color={ item.value ? Colors.GREEN :  Colors.LIGHTGRAY } />
//             </TouchableOpacity>
//             <View style={styles.childHr}/>
//         </View>
//     }/>
// </View>
// }

// </View>
// )
// }
