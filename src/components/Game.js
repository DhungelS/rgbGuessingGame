import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Circles from './Circles';

export default class Game extends React.Component {

  constructor(props){
  super(props)
    this.state = {
      answerStatus: '',
      colorArr: [],
     currentColor: null
    }
  }

  setColor = () => {
    const red = Math.floor((Math.random()*255) + 1)
   const green = Math.floor((Math.random()*255) + 1)
    const blue =  Math.floor((Math.random()*255) + 1)
    const colorArr = [`rgb(${red}, ${green}, ${blue})`, `rgb(${blue}, ${red}, ${green})`, `rgb(${green}, ${blue}, ${red})`]
    this.setState({colorArr: colorArr, currentColor: colorArr[Math.floor((Math.random()*3))] })

  }

 


  componentDidMount(){
    this.setColor();
  }
  
  colorPickedHandler = (color) => {

    // const currentColor =  this.state.colorArr[Math.floor((Math.random()*3))]
    
    if(this.state.currentColor === color){
      this.setState({answerStatus: 'You picked the right color!'})
      this.componentDidMount();
    }
    else {
      this.setState({answerStatus: 'Wrong'})

    }
  }
 


  render() {
  
    // const randomColor = `rgb(${r}, ${g}, ${b})`
    // const colorArr = [`rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`, `rgb(${this.state.blue}, ${r}, ${g})`, `rgb(${g}, ${b}, ${r})`]
    

   console.log
    
    return (
      <View style={styles.container}>
        <Circles colorPickedHandler={this.colorPickedHandler} colorOne={this.state.colorArr[0]} colorTwo={this.state.colorArr[1]} colorThree={this.state.colorArr[2]}/>
        <Text style={{fontSize: 25}}>{this.state.currentColor}</Text>
       <Text>{this.state.answerStatus}</Text>
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
  },
});
