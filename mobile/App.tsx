import { StatusBar } from 'expo-status-bar'
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'

import blurBg from './src/assets/bg-blur.png'

// Com o React-Native-SVG-Transformer, qualquer SVG
// se torna um Componente
import Stripes from './src/assets/stripes.svg'

// Função nativa do Nativewind para pode estilizar
// Componentes que não são padrão do React-Native
import { styled } from 'nativewind'

import NLWLogo from './src/assets/nlw-spacetime-logo.svg'

// Variável para tornar o Componente 'Stripes'
// em um Componente estilizável
const StyledStripes = styled(Stripes)

export default function App() {
  // Desestruturação de 'useFonts', retornando o primeiro elemento
  // do array, que é um booleano, se for true, usa um dos argumentos
  // da função importada 'useFonts', senão, false e vai para condicional abaixo
  const [fontesCarregaram] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  // Se nenhuma da fontes da variável carregou,
  // então retorna nulo
  if (!fontesCarregaram) {
    return null
  }

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 bg-gray-900 px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6">
        <NLWLogo />

        <View className="space-y-2">
          <Text className="text-center font-titulo text-2xl leading-tight text-gray-50">
            Sua cápsula do tempo
          </Text>
          <Text className="text-center font-body leading-relaxed text-gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>

        {/* No Reactive-Native não há 'Button' e sim 'Touchable' */}
        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-2"
        >
          <Text className="font-alt text-sm uppercase text-black">
            Cadastrar Lembrança
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Feito com 💜 no NLW da Rocketseat
      </Text>

      <StatusBar style="auto" />
    </ImageBackground>
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
