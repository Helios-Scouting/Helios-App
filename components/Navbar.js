import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Ionicons, Feather, Entypo } from '@expo/vector-icons';

const NavBar = ({ onPressMatches, onPressSettings, onPressSurvey }) => {
  return (
    <View style={styles.optionsWrapper}>
      <TouchableOpacity style={styles.option}>
        <Entypo name="blackboard" size={24} color="#000000" />
        <Text style={styles.optionText}>Pits</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={onPressSurvey}>
        <Ionicons name="cloud-upload-outline" size={24} color="#000000" />
        <Text style={styles.optionText}>Matches</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={onPressMatches}>
        <Feather name="search" size={24} color="#000000" />
        <Text style={styles.optionText}>Results</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Feather name="database" size={24} color="#000000" />
        <Text style={styles.optionText}>Status</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={onPressSettings}>
        <Feather name="settings" size={24} color="#000000" />
        <Text style={styles.optionText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  optionsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#ffffff',
    height: '10%',
    
  },
  option: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default NavBar;

