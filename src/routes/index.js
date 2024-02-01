import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StackRoutes from './stackRoutes';
import Sobre from '../pages/sobre';
import Contato from '../pages/Contato';
import CustonDrawer from '../Components/CustonDrawer';

const Drawer = createDrawerNavigator();


export default function Routes() {
  return (
    <Drawer.Navigator
    drawerContent={CustonDrawer}
    screenOptions={{
      headerShown:false,
      drawerActiveBackgroundColor: "#00dae4",
      drawerActiveTintColor: '#fff',
      drawerInactiveBackgroundColor: '#f1f1f1',
      drawerInactiveTintColor: '#000'
    }}>


      <Drawer.Screen
        name='HomeStack'
        component={StackRoutes}
        options={{
          title:'Inicío'
        }}
      />

      <Drawer.Screen
      name='Sobre'
      component={Sobre}/>

      <Drawer.Screen
      name='Contato'
      component={Contato}/>
    </Drawer.Navigator>
  )
}