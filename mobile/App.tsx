import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="bg-slate-300 flex-1 items-center justify-center">
      <Text className="text-zinc-50 font-bold text-5xl">Oi!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.texto}>Oi!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// CSS in JS - CSS é feito em formato de objeto
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   texto: {
//     color: '#FFF',
//     fontWeight: '700',
//     fontSize: 48
//   }
// });
