import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.container1}>
        <Text>1</Text>
      </View>
      <View style={styles.container2}>
        <Text>2</Text>
      </View>
      <View style={styles.container3}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flexDirection: 'row-reverse',
    justifyContent: 'center'
  },
  container1: {
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container2: {
    backgroundColor: 'blue',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container3: {
    backgroundColor: 'green',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
})