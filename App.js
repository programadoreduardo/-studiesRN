import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/home'
import Sobre from './src/pages/sobre';
import Contato from './src/pages/Contato';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='Home' component={Home}
          options={{
            title: 'Tela de início',
            headerStyle: { backgroundColor: '#121212' },
            headerTintColor: '#fff',
            headerShown: false }} />

        <Stack.Screen name="Sobre"
         component={Sobre} 
         options={{ title: 'Pagina Sobre' }} />

         <Stack.Screen name='Contato'
         component={Contato}
         options={{title: 'Pagina de contato'}} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}