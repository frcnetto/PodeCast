import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

export default class SubscriptionsGrid extends Component {
    render () {
        return (
            <View style={ css.container }>
                <View style={ css.row }>
                    <TouchableOpacity style={ css.item } />
                    <TouchableOpacity style={ css.item } />
                    <TouchableOpacity style={ css.item } />
                    <TouchableOpacity style={ css.item } />
                </View>
                <View style={ css.row }>
                    <TouchableOpacity style={ css.item } />
                    <TouchableOpacity style={ css.item } />
                    <TouchableOpacity style={ css.item } />
                    <TouchableOpacity style={ css.item } />
                </View>
            </View>
        );
    }
}

const css = StyleSheet.create( {
    container: {
        backgroundColor: 'white',
        width: '100%',
        paddingTop: 5
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5
    },
    item: {
        width: 85,
        height: 85,
        backgroundColor: 'black'
    }
} );