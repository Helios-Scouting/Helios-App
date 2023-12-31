import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NavBar from './components/Navbar';
import Matches from './components/Matches';
import SettingsMenu from './components/SettingsMenu';
import SurveyComponent from './components/Survey';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [activeMenu, setActiveMenu] = useState('matches');

  const handlePressMatches = () => {
    setActiveMenu('matches');
  };

  const handlePressSettings = () => {
    setActiveMenu('settings');
  };

  const handlePressSurvey = () => {
    setActiveMenu('survey');
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={styles.title}>Helios-Project</Text>

      {activeMenu === 'matches' && <Matches />}
      {activeMenu === 'settings' && <SettingsMenu />}
      {activeMenu === 'survey' && <SurveyComponent />}

      <NavBar
        activeMenu={activeMenu}
        onPressMatches={handlePressMatches}
        onPressSettings={handlePressSettings}
        onPressSurvey={handlePressSurvey}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 50,
    marginBottom: -60,
    marginLeft: 20,
    textAlign: 'center',
  },
});
