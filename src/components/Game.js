import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Circles from './Circles';
import * as Animatable from 'react-native-animatable';

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answerStatus: null,
      colorArr: [],
      currentColor: null,
      score: 0
    };
  }

  setColor = () => {
    const red = Math.floor(Math.random() * 255 + 1);
    const green = Math.floor(Math.random() * 255 + 1);
    const blue = Math.floor(Math.random() * 255 + 1);
    const colorArr = [
      `rgb(${red}, ${green}, ${blue})`,
      `rgb(${blue}, ${red}, ${green})`,
      `rgb(${green}, ${blue}, ${red})`
    ];
    this.setState({
      colorArr: colorArr,
      currentColor: colorArr[Math.floor(Math.random() * 3)]
    });
  };

  componentDidMount() {
    this.setColor();
  }

  colorPickedHandler = color => {
    if (this.state.currentColor === color) {
      this.setState({ answerStatus: true, score: this.state.score+=1 })
        this.componentDidMount();
      
    } else {
      this.setState({ answerStatus: false });
    }
  };

  render() {

  

    let answerMsg =  <Animatable.Text></Animatable.Text>;
  
    if (this.state.answerStatus === true) {
      answerMsg =  <Animatable.Text key={this.state.answerStatus} animation="flipInY" iterationCount={1} style={{fontSize: 15}}>You picked the right color!</Animatable.Text>;
    } else if (
      this.state.answerStatus === false &&
      this.state.answerStatus !== null
    ) {
      answerMsg = <Animatable.Text key={this.state.answerStatus} animation="flipInY" iterationCount={1} style={{fontSize: 15}}>Wrong try again</Animatable.Text>;
    }
    return (
      <View>
        <View
          style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}
        >
          <View
            style={{ width: 500, height: 55, backgroundColor: 'powderblue' }}
          >
          <Text style={{textAlign: 'center', alignSelf: 'center', fontSize: 40}}><Text style={{color: 'red'}}>r</Text><Text style={{color: 'green'}}>g</Text><Text style={{color: 'blue'}}>b</Text> Game <Text style={{marginLeft: 15}}>{this.state.score}</Text></Text>
          </View>
        </View>
        <View style={styles.container}>
          <Circles
            key={this.state.currentColor}
            colorPickedHandler={this.colorPickedHandler}
            colorOne={this.state.colorArr[0]}
            colorTwo={this.state.colorArr[1]}
            colorThree={this.state.colorArr[2]}
            answerStatus={this.state.answerStatus}
          />
          <Text style={{ fontSize: 25 }}>{this.state.currentColor}</Text>
          {answerMsg}
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 125
  }
});
