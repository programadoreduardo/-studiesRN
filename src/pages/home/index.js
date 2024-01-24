import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation();

    function navegaSobre() {
        navigation.navigate('Sobre', {nome: 'Carol Marques', email: 'duda@teste.com'})
    }


    return (
        <View style={styles.container}>
            <Text>Tela HOME</Text>
            <Button title='Ir para sobre' onPress={navegaSobre} />
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