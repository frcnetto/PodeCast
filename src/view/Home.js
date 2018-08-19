import React, { Component } from 'react';
import { FlatList, View, StyleSheet, Text } from "react-native";
import SubscriptionsGrid from '../component/SubscriptionsGrid';

export default class Home extends Component {
    render () {
        return (
            <View style={ styles.container }>
                <SubscriptionsGrid />
            </View>
        );
    }
}

const styles = StyleSheet.create( {
    container: {
        backgroundColor: 'yellow',
        flex: 8
    }
} );