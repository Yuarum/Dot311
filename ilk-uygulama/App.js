console.log('Happy developing ✨')
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.baslik}>Merhaba Dünya!</Text>
        <Text>İlk Expo uygulamam çalışıyor.</Text>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baslik: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});