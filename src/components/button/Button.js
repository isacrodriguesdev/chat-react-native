import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
// # services
// # styles
import styles from './styles';
// # utils
// # components
// # actions

export default (props) => {

  return (
    <TouchableOpacity 
      onPress={props.onPress} 
      style={[styles.button, props.style]}>

      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};