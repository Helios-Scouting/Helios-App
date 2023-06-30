import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Switch } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';


const SECTIONS = [
  {
    header: 'Preferences',
    items: [
      {id: 'language', icon: 'globe', label: 'Language', type: 'select'},
      {id: 'darkMode', icon: 'moon', label: 'Dark Mode', type: 'toggle'},
      {id: 'uniqueID', icon: 'user', label: 'Unique ID', type: 'text'},
    ],
  },

  {
    header: 'Help',
    items: [
      {id: 'bug', icon: 'flag', label: 'Report bug', type: 'link'},
      {id: 'contact', icon: 'mail', label: 'Contact us', type: 'link'},
    ],
  },
  
];

const SettingsMenu = () => {

  const [form, setForm] = useState({
    language: 'English',
    darkMode: false,
    uniqueID: '1234567890',
  });


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f6f6f6'}}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>
          <Text style={styles.subtitle}>Update your preferences here.</Text>
        </View>

        {SECTIONS.map(({ header, items }) => (
          <View style={styles.section} key={header}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{header}</Text>
            </View>

            <View style={styles.sectionBody}>
              {items.map(({label, id, type, icon}, index) => (
                  <View 
                    style={[
                      styles.rowWrapper, 
                      index === 0 && {borderTopWidth: 0},
                    ]}
                    key={id}>
                    <TouchableOpacity 
                      onPress={() => {
                      // handle onPress
                    }}>
                      <View style={styles.row}>
                        <FeatherIcon 
                          name={icon} 
                          color="#616161" 
                          size={22} 
                          style = {{marginRight:12}}
                        />

                        <Text style={styles.rowLabel}>{label}</Text>

                        <View style={styles.rowSpacer} />

                        {type === 'select' && (
                          <Text style={styles.rowValue}>{form[id]}</Text>
                        )}

                        {type === 'toggle' && <Switch value={form[id]} onValueChange={(value) => setForm({...form, [id]: value})} />}

                        {(['select', 'link'].includes(type)) && (
                          <FeatherIcon 
                            name="chevron-right" 
                            color="#ababab" 
                            size={22} 
                            />
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  header: {
    paddingHorizontal: 24,
    marginBotton: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  section: {
    paddingTop: 12,
  },
  sectionHeader: {
    paddingHorizontal: 24,
    marginBottom: 8,
  },
  sectionHeaderText: {
    fontSize: 14,
    color: '#a7a7a7',
    fontWeight: '600',
    letterSpacing: 1.2,
  },
  rowWrapper: {
    paddingLeft: 24,
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
    backgroundColor: '#fff',
  },
  row: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 24,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: '#000',
  },
  rowSpacer: {
    flex: 1,
  },
  rowValue: {
    fontSize: 17,
    color: '#616161',
    marginRight: 4,
  },

});

export default SettingsMenu;
