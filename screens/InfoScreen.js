import React from 'react'
import { StyleSheet, Text, View, AlertIOS, ScrollView } from 'react-native'
import { Button, CheckBox, Header, Divider } from 'react-native-elements'

export default class InfoScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json'
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <ScrollView contentContainerStyle={pageStyles.contentContainer}>
        <Text style={pageStyles.title}>Information</Text>
        <View
          style={{
            borderBottomColor: '#eb7a5e',
            borderBottomWidth: 1,
            width: 200,
            marginBottom: 15,
            paddingBottom: 5
          }}
        />
        {/* <Divider style={{marginBottom: 15}}/> */}
        <View style={pageStyles.card}>
          <Text style={pageStyles.cardText}>
            This app is based on the "2-Minute Rule" habit-building strategy.
            The basis behind the rule is that when you're first beginning to
            build a habit, you should start out by simplifying the habit until
            it takes only 2 minutes to do. The idea behind this is to make the
            habit so easy that it's hard to justify not doing it.
          </Text>
        </View>
        <View style={pageStyles.card}>
          <Text style={pageStyles.cardText}>
            Once you've successfully completed the "2-Minute" version of your
            habit fro 30 days, you can level up to a slightly harder habit.
            Eventually, after completing a couple of different levels, your
            habit should be fully rooted in your everyday routing. Create a
            number of levels for each habit, slowly upping the difficulty until
            you've reached your final habit goal.
          </Text>
        </View>
      </ScrollView>
    )
  }
}

const pageStyles = StyleSheet.create({
  title: {
    fontSize: 32,
    textAlign: 'center',
    margin: 5,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    letterSpacing: 4
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    borderColor: '#ccc',
    borderRadius: 5,
    borderWidth: 1,
    padding: 15,
    backgroundColor: '#eee',
    width: 325,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15
  },
  cardText: {
    fontSize: 18
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
