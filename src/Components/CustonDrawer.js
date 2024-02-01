import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Image, Text, View } from "react-native";


export default function CustonDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{
                width: '100%',
                height: 85,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 30,
            }}>

                <Image
                    source={require('../assets/perfil.png')}
                    style={{ height: 65, width: 65 }} />

                <Text style={{ color: '#000', fontSize: 17, marginTop: 5, fontWeight: "bold", marginBottom:35 }}>Bem-vindo</Text>
            </View>

<DrawerItemList {...props}/>

        </DrawerContentScrollView>
    )
}