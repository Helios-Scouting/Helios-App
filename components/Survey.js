import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SurveyComponent = () => {
  const [teamName, setTeamName] = useState('');
  const [teamNumber, setTeamNumber] = useState('');
  const [match, setMatch] = useState('');
  const [allianceColor, setAllianceColor] = useState('');
  const [autonomous, setAutonomous] = useState('');
  const [bottomRowAutoCube, setBottomRowAutoCube] = useState(0);
  const [bottomRowAutoCone, setBottomRowAutoCone] = useState(0);
  const [middleRowAutoCube, setMiddleRowAutoCube] = useState(0);
  const [middleRowAutoCone, setMiddleRowAutoCone] = useState(0);
  const [topRowAutoCube, setTopRowAutoCube] = useState(0);
  const [topRowAutoCone, setTopRowAutoCone] = useState(0);
  const [autonomousDocking, setAutonomousDocking] = useState('');
  const [bottomRowTeleopCube, setBottomRowTeleopCube] = useState(0);
  const [bottomRowTeleopCone, setBottomRowTeleopCone] = useState(0);
  const [middleRowTeleopCube, setMiddleRowTeleopCube] = useState(0);
  const [middleRowTeleopCone, setMiddleRowTeleopCone] = useState(0);
  const [topRowTeleopCube, setTopRowTeleopCube] = useState(0);
  const [topRowTeleopCone, setTopRowTeleopCone] = useState(0);
  const [teleopDocking, setTeleopDocking] = useState('');
  const [defendedHim, setDefendedHim] = useState('');
  const [didTheyDefend, setDidTheyDefend] = useState('');
  const [fouls, setFouls] = useState('');
  const [techFouls, setTechFouls] = useState('');
  const [generatedLinks, setGeneratedLinks] = useState('');
  const [allianceScore, setAllianceScore] = useState('');
  const [rankingPoints, setRankingPoints] = useState('');
  const [comments, setComments] = useState('');

  const handleYesNoButtonPress = (value, setter) => {
    if (value === setter) {
      setter('');
    } else {
      setter(value);
    }
  };

  const handleIncrement = (setter) => {
    setter((prevValue) => prevValue + 1);
  };

  const handleDecrement = (setter) => {
    setter((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Team Info:</Text>
        <TextInput
          style={styles.input}
          placeholder="Team Name"
          value={teamName}
          onChangeText={setTeamName}
        />
        <TextInput
          style={styles.input}
          placeholder="Team Number"
          value={teamNumber}
          onChangeText={setTeamNumber}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Match"
          value={match}
          onChangeText={setMatch}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Alliance Color:</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, allianceColor === 'Red' && styles.activeButtonRed]}
            onPress={() => setAllianceColor('Red')}
          >
            <Text style={styles.buttonText}>Red</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, allianceColor === 'Blue' && styles.activeButtonBlue]}
            onPress={() => setAllianceColor('Blue')}
          >
            <Text style={styles.buttonText}>Blue</Text>
          </TouchableOpacity>


        </View>
        <View>
          <Text style={styles.label}>Autonomous?</Text>
          <TouchableOpacity
            style={[
              styles.button,
              autonomous === 'Yes' && styles.buttonSelectedYes,
            ]}
            onPress={() => handleYesNoButtonPress('Yes', setAutonomous)}
          >
            <Text style={[styles.buttonText, autonomous === 'Yes' && styles.buttonTextSelected]}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              autonomous === 'No' && styles.buttonSelectedNo,
            ]}
            onPress={() => handleYesNoButtonPress('No', setAutonomous)}
          >
            <Text style={[styles.buttonText, autonomous === 'No' && styles.buttonTextSelected]}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {autonomous === 'Yes' && (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Autonomous Period:</Text>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>Bottom Row during Auto:</Text>
            
            {/* Cubes counter */}
            <Text style={styles.label}>Cubes:</Text>
            <View style={styles.counterContainer}>
              <TouchableOpacity
                style={styles.incrementButton}
                onPress={() => handleDecrement(setBottomRowAutoCube)}
              >
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.counterText}>{bottomRowAutoCube}</Text>
              <TouchableOpacity
                style={styles.incrementButton}
                onPress={() => handleIncrement(setBottomRowAutoCube)}
              >
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>Cones:</Text>
            <View style={styles.counterContainer}>
              <TouchableOpacity
                style={styles.incrementButton}
                onPress={() => handleDecrement(setBottomRowAutoCone)}
              >
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.counterText}>{bottomRowAutoCone}</Text>
              <TouchableOpacity
                style={styles.incrementButton}
                onPress={() => handleIncrement(setBottomRowAutoCone)}
              >
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Add Middle Row and Top Row counters here */}
          {/* Add Docking? question here */}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  button: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
    alignItems: 'center',
  },
  activeButtonBlue: {
    backgroundColor: '#ADD8E6',
  },
  activeButtonRed: {
    backgroundColor: '#ffcccb',
  },
  buttonSelectedYes: {
    backgroundColor: '#90EE90',
  },
  buttonSelectedNo: {
    backgroundColor: '#ffcccb',
  },
  buttonText: {
    fontSize: 16,
  },
  rowContainer: {
    marginBottom: 16,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  incrementButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ADD8E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 18,
    marginLeft: 8,
    marginRight: 8,
  },
});

export default SurveyComponent;
