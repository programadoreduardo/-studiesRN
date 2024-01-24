import { Button, StyleSheet, Text, View } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react';
import Contato from '../Contato';

export default function Sobre() {
    const route = useRoute()
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.nome === '' ? 'Página sobre' : route.params?.nome
        })
    }, [navigation])


    return (
        <View style={styles.container}>
            <Text>Pagina sobre</Text>
            <Text>{route.params?.email}</Text>
            <Text>{route.params?.nome}</Text>

            <Button title="Tela contatos" onPress={() => navigation.navigate('Contato')} />
            <Button title='Voltar tela' onPress={() => navigation.goBack()}/>
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