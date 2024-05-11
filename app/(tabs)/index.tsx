import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';


// function component
export default function App() {
  return (
    <View style={styles.container}>

      {/* Override Style */}
      <View>
        <View style={[styles.card, {
          backgroundColor: 'red'
        }]}></View>
        <View style={[styles.card, {
          backgroundColor: 'blue'
        }]}></View>
        <View style={[styles.card, {
          backgroundColor: 'green'
        }]}></View>
      </View>

      {/* Use variable */}


      <View>
        <View style={styles.card2('red')}></View>
        <View style={styles.card2('blue')}></View>
        <View style={styles.card2('green')}></View>

      </View>
 
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
});
