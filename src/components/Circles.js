import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

class Circles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevProps: []
    };
  }

  onPressAnimationHandler = (answerStatus, circle) => {
   circle.rubberBand();
  };

  render() {
    return (
      <Animatable.View animation="zoomInUp" style={styles.circleContainer}>
        <Animatable.View
          ref={ref => {
            this.circleOneRef = ref;
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.colorPickedHandler(this.props.colorOne);
              this.onPressAnimationHandler(
                this.props.answerStatus,
                this.circleOneRef
              );
              console.log(this.props.answerStatus, 'Pressed');
            }}
            key={this.props.answerStatus}
            style={{ backgroundColor: this.props.colorOne, ...circleStyles }}
          />
        </Animatable.View>

        <Animatable.View
          ref={ref => {
            this.circleTwoRef = ref;
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.colorPickedHandler(this.props.colorTwo);
              this.onPressAnimationHandler(
                this.props.answerStatus,
                this.circleTwoRef
              );
            }}
            key={this.props.answerStatus}
            style={{ backgroundColor: this.props.colorTwo, ...circleStyles }}
          />
        </Animatable.View>

        <Animatable.View
          ref={ref => {
            this.circleThreeRef = ref;
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.colorPickedHandler(this.props.colorThree);
              this.props.answerStatus === false &&
                this.onPressAnimationHandler(
                  this.props.answerStatus,
                  this.circleThreeRef
                );
            }}
            key={this.props.answerStatus}
            style={{ backgroundColor: this.props.colorThree, ...circleStyles }}
          />
        </Animatable.View>
      </Animatable.View>
    );
  }
}

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
