import { Image, StyleSheet, Text, View } from 'react-native';


// function component
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{
        uri: "https://codenesia.id/storage/2022/03/react-native.png"
      }} style={{
        height: 400,
        width: 400,
      }}></Image>


      <Image source={{
        uri: "https://codenesia.id/storage/2022/03/react-native.png"
      }} style={{
        height: 400,
        width: 200,
        backgroundColor: 'red',
      }}
        resizeMode='cover'
      ></Image>

      {/* <Image source={require('./assets/splash.png')}></Image> */}
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
