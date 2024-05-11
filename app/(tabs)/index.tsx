import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';


// function component
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Border</Text>
      </View>

      <View style={styles.garis}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderStyle: 'dotted',
    // borderRadius: 16,
    // borderTopRightRadius:20,
    // borderTopLeftRadius:20
    // borderBottomEndRadius:10,
  },
  garis: {
    borderWidth: 1,
    width: 300,
    marginTop: 10,
  }
});
