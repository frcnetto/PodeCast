import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class HeaderBar extends Component {
    render () {
        return (
            <View style={ styles.headerBar }>
                <View style={ styles.sideButton } />
                <View style={ styles.title } />
                <View style={ styles.sideButton } />
            </View>
        );
    }
}

const styles = StyleSheet.create( {
    headerBar: {
        backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        paddingTop: 20
    },
    sideButton: {
        backgroundColor: 'blue',
        height: '100%',
        flex: 2
    },
    title: {
        backgroundColor: 'pink',
        height: '100%',
        flex: 7
    }
} );
