import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';


// function component
export default function App() {
  return (
    <View style={styles.container}>

      {/* <View style={styles.card}>
        <View style={styles.content}>
          <Text>Hello World</Text>
        </View>
      </View> */}


      {/* Belajar FlexBox */}
      {/* 1. Kotak Urut ke bawah */}
      <View style={styles.wrapperAtas}>
        {/* Kotak Merah */}
        <View style={styles.merah}>
          <Text>Merah</Text>
        </View >
        {/* Kotak Biru */}
        <View style={styles.biru}>
          <Text>Biru</Text>
        </View>
        {/* Kotak Hijau */}
        <View style={styles.hijau}>
          <Text>Hijau</Text>
        </View>
      </View>

      {/* 2. Kotak Urut ke samping */}
      <View style={styles.wrapperKotak}>
        {/* Kotak Merah */}
        <View style={styles.merah}>
          <Text>Merah</Text>
        </View >
        {/* Kotak Biru */}
        <View style={styles.biru}>
          <Text>Biru</Text>
        </View>
        {/* Kotak Hijau */}
        <View style={styles.hijau}>
          <Text>Hijau</Text>
        </View>
      </View>

      {/* 3. Kotak Urut samping ke tengah */}
      <View style={styles.wrapperTengah}>
        {/* Kotak Merah */}
        <View style={styles.merah}>
          <Text>Merah</Text>
        </View >
        {/* Kotak Biru */}
        <View style={styles.biru}>
          <Text>Biru</Text>
        </View>
        {/* Kotak Hijau */}
        <View style={styles.hijau}>
          <Text>Hijau</Text>
        </View>
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
  merah: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
  biru: {
    backgroundColor: 'blue',
    width: 100,
    // height: 70
    height: 100

  },
  hijau: {
    backgroundColor: 'green',
    width: 100,
    height: 100
  },
  wrapperAtas: {
    alignItems: 'center',
    backgroundColor: 'yellow',
    flex:1,
    justifyContent:'center',
  },
  wrapperKotak: {
    flexDirection: 'row', 
    justifyContent: 'flex-end',
  },
  wrapperTengah: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
  }
  // card: {
  //   backgroundColor: 'red',
  //   padding: 30,
  //   margin: 20,
  // },
  // content: {
  //   backgroundColor: 'yellow',
  // }
});
