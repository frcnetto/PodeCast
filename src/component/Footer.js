import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Footer extends Component {
    render () {
        return (
            <View style={ styles.footer }>
                <View style={ styles.sideSection } />
                <View style={ styles.middleSection }>
                    <View style={ styles.title } />
                    <View style={ styles.subtitle } />
                </View>
                <View style={ styles.sideSection } />
            </View>
        );
    }
}

const styles = StyleSheet.create( {
    footer: {
        backgroundColor: 'steelblue',
        flex: 1,
        flexDirection: 'row',
    },
    sideSection: {
        backgroundColor: 'blue',
        height: '100%',
        flex: 2
    },
    middleSection: {
        backgroundColor: 'pink',
        height: '100%',
        flex: 7,
    },
    title: {
        backgroundColor: 'cyan',
        height: '50%'
    },
    subtitle: {
        backgroundColor: 'lightblue',
        height: '50%'
    }
} )