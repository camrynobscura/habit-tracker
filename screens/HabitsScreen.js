import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import HabitsApp from '../components/HabitsApp'

export default class HabitsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myHabits: [
        {
          habit1: {
            title: "read more",
            lvl1: "read one page",
            lvl2: "read 10 pages"
          }
        }
      ]
    }

  }

  render() {
    return (
      <HabitsApp props={this.state}/>
    );
  }
}
