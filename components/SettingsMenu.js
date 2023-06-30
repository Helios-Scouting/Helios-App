import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SettingsMenu = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.option}>Option 1</Text>
      <Text style={styles.option}>Option 2</Text>
      <Text style={styles.option}>Option 3</Text>
      <Text style={styles.option}>Option 4</Text>
      <Text style={styles.option}>Option 5</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default SettingsMenu;
