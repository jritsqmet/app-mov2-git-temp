import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />

      <text>PRUEBA DE GITHUB ACTUAL</text>
      <button title='activar'/>
      
      <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur itaque vel, aliquam facilis iusto ipsam repellat. Aperiam quas incidunt at cumque, error commodi tempore obcaecati minima omnis optio unde provident.</Text>
      <Button title='hola'/>

      <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur itaque vel, aliquam facilis iusto ipsam repellat. Aperiam quas incidunt at cumque, error commodi tempore obcaecati minima omnis optio unde provident.</Text>
      <Button title='Proaño'/>
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
});
