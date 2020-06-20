import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
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
    const { item } = props;

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
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={{ uri: baseUrl + item.image }}>
                <Text
                    style={{ margin: 10 }}>
                    {item.description}
                </Text>
            </Card>
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
        console.log('featured', this.props.tips.tips.filter(item => item.featured))
        return (
            <Animated.ScrollView style={{ transform: [{ scale: this.state.scaleValue }] }}>
                {this.props.tips.tips.filter(item => item.featured).map(item => <RenderItem
                    item={item}
                    isLoading={this.props.tips.isLoading}
                    errMess={this.props.tips.errMess}
                />)}

            </Animated.ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home);