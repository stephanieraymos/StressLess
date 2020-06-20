import React, { Component } from 'react';
import { View, Text, Animated, TouchableHighlight } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        tips: state.tips,
    };
};

function RenderItem(props) {
    const { tip } = props;

    if (props.isLoading) {
        return <Loading />;
    }
    if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }
    if (tip) {
        return (
            <TouchableHighlight onPress={() => props.navigation.navigate(tip.component)}>
            <Card
                featuredTitle={tip.name}
                image={{ uri: baseUrl + tip.image }}>
                <Text
                    style={{ margin: 10, textAlign: 'center' }}>
                    {tip.description}
                </Text>
            </Card>
        </TouchableHighlight>
        );
    }
    return <View />;
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scaleValue: new Animated.Value(0)
        };
    }

    animate() {
        Animated.timing(
            this.state.scaleValue,
            {
                toValue: 1,
                duration: 400
            }
        ).start();
    }

    componentDidMount() {
        this.animate();
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <Animated.ScrollView style={{ transform: [{ scale: this.state.scaleValue }] }}>
                {this.props.tips.tips.filter(tip => tip.featured).map(tip => <RenderItem
                    tip={tip}
                    isLoading={this.props.tips.isLoading}
                    errMess={this.props.tips.errMess}
                    navigation={this.props.navigation}

                />)}
            </Animated.ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home);