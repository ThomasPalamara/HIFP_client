import React from 'react';
import { StyleSheet } from 'react-native';
import Vocabulary from './src/pages/Vocabulary';
import { DocProvider } from './src/context/doc';
import { Box, NativeBaseProvider, Text, View } from 'native-base';

const App = () => {
  return (
    <DocProvider>
      <NativeBaseProvider>
        <View bgColor="lightBlue.50" p={10} pt={24} style={{ flex: 1 }}>
          <Box
            style={styles.background}
            bgColor="blue.700"
            minW="full"
            minH="1/2"
          ></Box>
          <View mb="24">
            <Text fontSize="4xl" color="white" fontWeight="bold">
              Vocabulary Test
            </Text>
            <Text pl={4} fontSize="md" color="white" fontWeight="bold">
              You can do it &#10084;
            </Text>
          </View>
          <View style={styles.container}>
            <Vocabulary></Vocabulary>
          </View>
        </View>
      </NativeBaseProvider>
    </DocProvider>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  background: {
    borderRadius: 20,
    position: 'absolute',
    top: '-50%',
    left: 0,
    right: 0,
    bottom: '70%',
  },
});
