import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

function App(): JSX.Element {
  const isdarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <View style={styles.conainer}>
        <Text style={isdarkMode ? styles.lightText : styles.darkText}>
          Hello World
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conainer: {
    display: 'flex',
    alignItems: 'center',
  },
  lightText: {
    color: 'white',
  },
  darkText: {
    color: 'black',
  },
});
export default App;
