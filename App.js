/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PureComponent } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
    render() {
        return (
            <Text>Welcome to {this.props.name} </Text>
        );
    }
}

class Person extends PureComponent { //if state change, re render
  constructor(props) {
    super(props);
    this.state = props;
    //state, props 
    //state co the cap nhat gia tri
    //props khong cap nhat duoc gia tri
    //Khong thay doi truc tiep state
  }

  onTouch() {
    //this.setState({ like : this.state.like + 1 })
    this.setState({ like: 1000 });
  }

    render() {
      console.log('re render');
        return(
            <TouchableOpacity onPress={ () => {
              this.onTouch();
            }}>
                <View>
                    <Text>Name: {this.state.name}, like: {this.state.like}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}


export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Person name="HHM" like={1000} />
        <Person name="BNQ" like={1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
