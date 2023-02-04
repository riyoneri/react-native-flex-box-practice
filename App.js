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
    flexDirection: 'row',
    width: "80%",
    height: 300,
    justifyContent: "flex-end",
    alignItems: "stretch",
  },
  container1: {
    marginHorizontal: 3,
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center'
  },
  container2: {
    marginHorizontal: 3,
    flex: 1,
    backgroundColor: 'blue',
    alignItems: "center",
    justifyContent: "center"
  },
  container3: {
    marginHorizontal: 3,
    flex: 3,
    backgroundColor: 'green',
    alignItems: "flex-end",
    justifyContent: "center"
  },
})