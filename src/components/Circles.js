import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';

class Circles extends React.Component {

  onPressAnimationHandler = (answerStatus, circle) => {
    // if (
    //   answerStatus === false &&
    //   answerStatus !== null
    // ) {
    //   circle.wobble()
    // }
    // else if (answerStatus === true){
    //   circle.rubberBand()
    // }
    // else {
    //   return
    // } 

    circle.rubberBand();

  }


  render(){
  return (
    <View style={styles.circleContainer}>

    <Animatable.View ref={(ref) =>  {
      this.circleOneRef = ref;
    }}>
      <TouchableOpacity
        onPress={() => {this.props.colorPickedHandler(this.props.colorOne)
          this.onPressAnimationHandler(this.props.answerStatus, this.circleOneRef)
         }}
        style={{ backgroundColor: this.props.colorOne, ...circleStyles }}
      />
      </Animatable.View >

      <Animatable.View ref={(ref) =>  {
      this.circleTwoRef = ref;
    }}>
      <TouchableOpacity
        onPress={() => {this.props.colorPickedHandler(this.props.colorTwo)
          this.onPressAnimationHandler(this.props.answerStatus, this.circleTwoRef)
        }}
        style={{ backgroundColor: this.props.colorTwo, ...circleStyles }}
      />
         </Animatable.View>

         <Animatable.View ref={(ref) =>  {
      this.circleThreeRef = ref;
    }}>
      <TouchableOpacity
        onPress={() =>{ this.props.colorPickedHandler(this.props.colorThree); this.props.answerStatus === false &&  this.onPressAnimationHandler(this.props.answerStatus, this.circleThreeRef)}}
        style={{ backgroundColor: this.props.colorThree, ...circleStyles }}
      />
      </Animatable.View>
    </View>
  );
}
};

export default Circles;

const styles = StyleSheet.create({
  circleContainer: {
    flexDirection: 'row'
  }
});

const circleStyles = {
  height: 80,
  width: 80,
  borderRadius: 80,
  margin: 5
};
