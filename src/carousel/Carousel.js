
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class MyCarousel extends Component {

    state = {
        entries: [{title: "lol"}, {title: "lol"}]
    }; 

    _renderItem ({item, index}) {
        return (
            <View style={{backgroundColor: '#000'}}>
                <Text>{ item.title }</Text>
            </View>
        );
    }
 
    render () {
        return (
            <Carousel
                layout={'default'}
                ref={(c) => { this._carousel = c; }}
                data={this.state.entries}
                renderItem={this._renderItem}
                sliderWidth={100}
                sliderHeight={50}
                itemWidth={50}
            />
        );
    }
}