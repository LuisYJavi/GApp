import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import HeaderIconExample from './src/components/Header';
import MiInfoProfe from './src/components/ProfesorCard';


type Props = {};

 class App extends Component <Props> {
  
  state = {temporal : "verdadero"};
  
  
  
  render() {
    return (
      
      <View>
        <HeaderIconExample></HeaderIconExample>
        <Text>{this.state.temporal}</Text>
        <MiInfoProfe/>
        
      </View>
    );
  }
}

export default App;