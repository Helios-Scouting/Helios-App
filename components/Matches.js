import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import Task from './task';


const Matches = () => {
  return (

    <View style={styles.container}>
        <Text style={styles.title}>Matches</Text>
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
});

export default Matches;
