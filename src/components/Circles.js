import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

const Circles = props => {
  const circleStyles = {
    height: 80,
    width: 80,
    borderRadius: 80,
    margin: 5
  };



  console.log(props)

  return (
    <View style={styles.circleContainer}>
      <TouchableOpacity onPress={() => props.colorPickedHandler(props.colorOne)} style={{ backgroundColor: props.colorOne, ...circleStyles }} />
      <TouchableOpacity onPress={() => props.colorPickedHandler(props.colorTwo)} style={{ backgroundColor: props.colorTwo, ...circleStyles }} />
      <TouchableOpacity onPress={() => props.colorPickedHandler(props.colorThree)} style={{ backgroundColor: props.colorThree, ...circleStyles }} />
      <Text answer={props.answer}>{console.log(props.answer)}</Text>
    </View>
  );
};

export default Circles;
const styles = StyleSheet.create({
  circleContainer: {
    flexDirection: 'row'
  }
});
