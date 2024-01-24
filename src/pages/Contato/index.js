import { Button, StyleSheet, Text,  View } from 'react-native';
import {useNavigation, StackActions} from '@react-navigation/native'

export default function Contato() {
const navigation = useNavigation()

function voltarHome(){
    navigation.dispatch(StackActions.popToTop())
}

    return (
        <View style={styles.container}>
            <Text>pagina contato</Text>
            <Button title='Voltar home' onPress={voltarHome}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});