import React, { Component } from 'react'
import { StyleSheet, Text, View, AlertIOS, ScrollView } from 'react-native'
import { Button, CheckBox, Header, Divider } from 'react-native-elements'

export default class HabitsApp extends Component {
  constructor(props) {
    super(props)
    this.addHabit = this.addHabit.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.state = {
      // at midnight on sunday night all the checks are reset to false"
      myHabits: [
        {
          title: 'Read More',
          level1: 'Read one page',
          level2: 'Read 10 pages',
          level3: 'Read 25 pages',
          streak: 0,
          checks: [false, true, false, true, true, false, false]
        },
        {
          title: 'Get More Exercise',
          level1: 'Put on workout clothes',
          level2: 'Walk around the block',
          level3: 'Run for 10 minutes',
          // how many levels can you have?
          streak: 0,
          checks: [false, false, true, false, false, false, true]
        }
      ],
      checkedArr: true
    }
  }

  addHabit() {
    AlertIOS.prompt('Enter a habit', null, text =>
      this.setState({
        myHabits: [
          ...this.state.myHabits,
          {
            title: text,
            streak: 0,
            checks: [false, false, false, false, false, false, false]
          }
        ]
      })
    )
  }

  handleCheck(i, i2) {
    const selectedHabit = this.state.myHabits[i]
    let selectedChecksArray = selectedHabit.checks
    selectedChecksArray[i2] = !selectedChecksArray[i2]
    this.setState({
      ...this.state.myHabits,
      [this.state.myHabits[i].checks]: selectedChecksArray
    })
  }

  render() {
    // console.log('checks arr', this.state)
    const days = 'MTWTFSS'
    return (
      <ScrollView contentContainerStyle={pageStyles.contentContainer}>
        <Text style={pageStyles.title}>My Habits</Text>
        <View
          style={{
            borderBottomColor: '#2C363F',
            borderBottomWidth: 1,
            width: 200,
            marginBottom: 15,
            paddingBottom: 5
          }}
        />

        {this.state.myHabits.map((habit, i) => {
          return (
            <View key={i} style={pageStyles.habitCard}>
              <Text style={pageStyles.habitText}>{habit.title}</Text>
              <View style={pageStyles.checkboxGroup}>
                {habit.checks.map((day, i2) => {
                  return (
                    <View key={i2}>
                      <Text style={pageStyles.dayText}>{days[i2]}</Text>
                      <CheckBox
                        checkedColor={"#E75A7C"}
                        uncheckedColor={"#ccc"}
                        containerStyle={pageStyles.checkboxItem}
                        size={30}
                        checked={this.state.myHabits[i].checks[i2]}
                        onPress={() =>
                          this.handleCheck(i, i2)
                        }
                      />
                      <Text>{this.state.myHabits[i].checks[i2]}</Text>
                    </View>
                  )
                })}
              </View>
            </View>
          )
        })}
        <Button
          buttonStyle={pageStyles.button}
          raised
          title='Add Habit'
          onPress={() => this.addHabit()}
        />
      </ScrollView>
    )
  }
}

const pageStyles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    margin: 5,
    marginTop: 20,
    fontWeight: 'bold',
    letterSpacing: 4
  },
  checkboxGroup: {
    // flex: 1,
    flexDirection: 'row',
    padding: 0
  },
  checkboxItem: {
    paddingLeft: 3,
    marginRight: 3,
    marginTop: 1,
    // marginBottom: 10,
    padding: 0
  },
  dayText: {
    textAlign: 'center',
    marginTop: 5
  },
  habitText: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#2C363F',
    width: 300,
    height: 45,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  habitCard: {
    marginBottom: 15,
    borderColor: '#ccc',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    paddingBottom: 0,
    backgroundColor: '#eee'
    // paddingTop: 15
  }
})
