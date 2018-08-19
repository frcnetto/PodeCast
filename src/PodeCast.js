import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Home from './view/Home';
import HeaderBar from './component/HeaderBar';
import Footer from './component/Footer';

export default class PodeCast extends Component {
  render () {
    return (
      <View style={ styles.container }>
        <HeaderBar style={ styles.bar } />
        <Home style={ styles.content } />
        <Footer style={ styles.bar } />
      </View>
    );
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1
  }
} );
