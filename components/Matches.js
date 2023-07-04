import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import Task from './task';


const Matches = () => {
  return (

    <View style={styles.container}>
        <Text style={styles.title}>Matches Results</Text>
        <Text style={styles.subtitle}>Data stored from the latest summit.</Text>
      <ScrollView style={styles.items}>
        {/* This is where the matches will go! */}
        <Task text={'Match 1'} />
        <Task text={'Match 2'} />
        <Task text={'Match 3'} />
        <Task text={'Match 4'} />
        <Task text={'Match 5'} />
        <Task text={'Match 6'} />
        <Task text={'Match 7'} />
        <Task text={'Match 8'} />
        <Task text={'Match 9'} />
        <Task text={'Match 10'} />
        <Task text={'Match 11'} />
        <Task text={'Match 12'} />
        <Task text={'Match 13'} />
        <Task text={'Match 14'} />
        <Task text={'Match 15'} />
        <Task text={'Match 16'} />
        <Task text={'Match 17'} />
        <Task text={'Match 18'} />
        <Task text={'Match 19'} />
        <Task text={'Match 20'} />
        <Task text={'Match 21'} />
        <Task text={'Match 22'} />
        <Task text={'Match 23'} />
        <Task text={'Match 24'} />
        <Task text={'Match 25'} />
        <Task text={'Match 26'} />
        <Task text={'Match 27'} />
        <Task text={'Match 28'} />
        <Task text={'Match 29'} />
        <Task text={'Match 30'} />
        <Task text={'Match 31'} />
        <Task text={'Match 32'} />
        <Task text={'Match 33'} />
        <Task text={'Match 34'} />
        <Task text={'Match 35'} />
        <Task text={'Match 36'} />
        <Task text={'Match 37'} />
        <Task text={'Match 38'} />
        <Task text={'Match 39'} />
        <Task text={'Match 40'} />
        <Task text={'Match 41'} />
        <Task text={'Match 42'} />
        <Task text={'Match 43'} />
        <Task text={'Match 44'} />
        <Task text={'Match 45'} />
        <Task text={'Match 46'} />
        <Task text={'Match 47'} />
        <Task text={'Match 48'} />
        <Task text={'Match 49'} />
        <Task text={'Match 50'} />
        <Task text={'Match 51'} />
        <Task text={'Match 52'} />
        <Task text={'Match 53'} />
        <Task text={'Match 54'} />
        <Task text={'Match 55'} />
        <Task text={'Match 56'} />
        <Task text={'Match 57'} />
        <Task text={'Match 58'} />
        <Task text={'Match 59'} />
        <Task text={'Match 60'} />
        <Task text={'Match 61'} />
        <Task text={'Match 62'} />
        <Task text={'Match 63'} />
        <Task text={'Match 64'} />
        <Task text={'Match 65'} />
        <Task text={'Match 66'} />
        <Task text={'Match 67'} />
        <Task text={'Match 68'} />
        <Task text={'Match 69'} />
        <Task text={'Match 70'} />
        <Task text={'Match 71'} />
        <Task text={'Match 72'} />
        <Task text={'Match 73'} />
        <Task text={'Match 74'} />
        <Task text={'Match 75'} />
        <Task text={'Match 76'} />
        <Task text={'Match 77'} />
        <Task text={'Match 78'} />
        <Task text={'Match 79'} />
        <Task text={'Match 80'} />
        <Task text={'Match 81'} />
        <Task text={'Match 82'} />
        <Task text={'Match 83'} />
        <Task text={'Match 84'} />
        <Task text={'Match 85'} />
        <Task text={'Match 86'} />
        <Task text={'Match 87'} />
        <Task text={'Match 88'} />
        <Task text={'Match 89'} />
        <Task text={'Match 90'} />
        <Task text={'Match 91'} />
        <Task text={'Match 92'} />
        <Task text={'Match 93'} />
        <Task text={'Match 94'} />
        <Task text={'Match 95'} />
        <Task text={'Match 96'} />
        <Task text={'Match 97'} />
        <Task text={'Match 98'} />
        <Task text={'Match 99'} />
        <Task text={'Match 100'} />

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  items: {
    marginTop: 30,
  },
    title: {
    fontSize: 20,
    fontWeight: 'normal',
    },
    subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    },
});

export default Matches;
