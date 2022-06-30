import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PageDailyPicture from './src/pages/PageDailyPicture';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PageDailyPicture />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
