import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './containers/MainContainer';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View>
        <MainContainer />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
  },
});
