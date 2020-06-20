import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Relief from './ReliefComponent';
import TipInfo from './TipInfoComponent';
import Favorites from './FavoritesComponent';
import Login from './LoginComponent';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { connect } from 'react-redux';
import { fetchTips, fetchComments, fetchPromotions,
    fetchPartners } from '../redux/ActionCreators';
import * as WebBrowser from 'expo-web-browser';	
import Music from './MusicComponent';
import Journal from './JournalComponent';
import Yoga from './YogaComponent';
import Quiz from './QuizComponent';

//import Activities from './ActivitiesComponent';

const mapDispatchToProps = {
    fetchTips,
    fetchComments,
    fetchPromotions,
    fetchPartners
};

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#1AA7A6'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                color: '#fff'
              },
              headerLeft: <Icon
                  name='info-circle'
                  type='font-awesome'
                  iconStyle={styles.stackIcon}
                  onPress={() => navigation.toggleDrawer()}
          />
          })
    }
  );

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#1AA7A6'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                color: '#fff'
              },
              headerLeft: <Icon
                  name='address-card'
                  type='font-awesome'
                  iconStyle={styles.stackIcon}
                  onPress={() => navigation.toggleDrawer()}
          />
          })
    }
  );

  const JournalNavigator = createStackNavigator(
      {
          Journal: { screen: Journal }
      },
      {
          navigationOptions: ({navigation}) => ({
              headerStyle: {
                  backgroundColor: '#1AA7A6'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  color: '#fff'
                },
                headerLeft: <Icon
                    name='book'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
            />
            })
      }
    );
    
  const YogaNavigator = createStackNavigator(
    {
        Yoga: { screen: Yoga }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#1AA7A6'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                color: '#fff'
              },
              headerLeft: <Icon
                  name='stretch'
                  type='font-awesome'
                  iconStyle={styles.stackIcon}
                  onPress={() => navigation.toggleDrawer()}
          />
          })
    }
  );

    const QuizNavigator = createStackNavigator(
        {
            Quiz: { screen: Quiz }
        },
        {
            navigationOptions: ({navigation}) => ({
                headerStyle: {
                    backgroundColor: '#1AA7A6'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                },
                headerLeft: <Icon
                    name='brain'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
        }
    );
  
  const ReliefNavigator = createStackNavigator(

    {
      Relief: { 
          screen: Relief,
          navigationOptions: ({navigation}) => ({
            headerLeft: <Icon
                name='list'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
          })
        },
      TipInfo: { screen: TipInfo },
      Journal: { screen: Journal }

    }, 
    {
      initialRouteName: 'Relief',
      navigationOptions: {
          headerStyle: {
              backgroundColor: '#1AA7A6'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#fff'
          }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
      Home: { screen: Home }
    },
    {
      navigationOptions: ({navigation}) => ({
          headerStyle: {
              backgroundColor: '#1AA7A6'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: '#fff'
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
        />
        })
    }
);

const MusicNavigator = createStackNavigator(
    {
        Music: { screen: Music }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#1AA7A6'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='heart'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const FavoritesNavigator = createStackNavigator(
    {
        Favorites: { screen: Favorites }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#1AA7A6'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='heart'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const LoginNavigator = createStackNavigator(
    {
        Login: { screen: Login }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#1AA7A6'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='sign-in'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);


const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView 
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('../shared/images/logo.jpg')} style={styles.drawerImage} />
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>StressLess</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator(
    {

        Login: {
            screen: LoginNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='sign-in'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },

        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                    
                    drawerIcon: ({focused}) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={focused ? '#1AA7A6' : 'gray'}              
                        />
                )
            }
        },

        Journal: {
            screen: JournalNavigator,
            navigationOptions: {
                drawerLabel: 'Journal',
                drawerIcon: ({focused}) => (
                    <Icon
                        name='book'
                        type='font-awesome'
                        size={24}
                        color={focused ? '#1AA7A6' : 'gray'}                    />
                )
            }
        },

        
        Yoga: {
            screen: YogaNavigator,
            navigationOptions: {
                drawerLabel: 'Yoga',
                drawerIcon: ({focused}) => (
                    <Icon
                        name='stretch'
                        type='font-awesome'
                        size={24}
                        color={focused ? '#1AA7A6' : 'gray'}                    />
                )
            }
        },

        Quiz: {
            screen: QuizNavigator,
            navigationOptions: {
                drawerLabel: 'Quizzes',
                drawerIcon: ({focused}) => (
                    <Icon
                        name='chess'
                        type='font-awesome'
                        size={24}
                        color={focused ? '#1AA7A6' : 'gray'}                    />
                )
            }
        },

        Relief: {
            screen: ReliefNavigator,
            navigationOptions: {
                drawerIcon: ({focused}) => (
                    <Icon
                        name='list'
                        type='font-awesome'
                        size={24}
                        color={focused ? '#1AA7A6' : 'gray'} />
                )
            }
        },

        Favorites: {
            screen: FavoritesNavigator,
            navigationOptions: {
                drawerLabel: 'Favorite Tips',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='heart'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },

        About: {
            screen: AboutNavigator,
            navigationOptions: {
                drawerLabel: 'About Us',
                drawerIcon: ({focused}) => (
                    <Icon
                        name={'info-circle'}
                        type='font-awesome'
                        size={24}
                        color={focused ? '#1AA7A6' : 'gray'}
                        
                    />
                )
            }
        },
        Contact: {
            screen: ContactNavigator,
            navigationOptions: {
                drawerLabel: 'Contact Us',
                drawerIcon: ({focused}) => (
                    <Icon
                        name='address-card'
                        type='font-awesome'
                        size={24}
                        color={focused ? '#1AA7A6' : 'gray'}                    />
                )
            }
        },
        // Activities: {
        //     screen: ActivitiesNavigator,
        //     navigationOptions: {
        //         drawerLabel: 'Activities',
        //         drawerIcon: ({focused}) => (
        //             <Icon
        //                 name='brain'
        //                 type='font-awesome'
        //                 size={24}
        //                 color={focused ? '#1AA7A6' : 'gray'}                    />
        //         )
        //     }
        // },

        Music: {
            screen: MusicNavigator,
            navigationOptions: {
                drawerLabel: 'Music',
                drawerIcon: ({focused}) => (
                    <Icon
                        name='music'
                        type='font-awesome'
                        size={24}
                        color={focused ? '#1AA7A6' : 'gray'}                    />
                )
            }
        }
    },
    {
        initialRouteName: 'Home',
        drawerBackgroundColor: '#d0efff',
        contentOptions: {
              activeTintColor: '#1AA7A6'
            },
        contentComponent: CustomDrawerContentComponent
    }
);

class Main extends Component {

    componentDidMount() {
        this.props.fetchTips();
        this.props.fetchComments();
        this.props.fetchPromotions();
        this.props.fetchPartners();
    }

  render() {
      return (
          <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
              <MainNavigator />
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#1AA7A6',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        textAlign: 'center',
    },
    drawerImage: {
        margin: 10,
        height: 100,
        width: 100
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});
export default connect(null, mapDispatchToProps)(Main);
