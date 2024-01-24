import { StyleSheet, Text,  View } from 'react-native';

export default function Detalhes() {
    return (
        <View style={styles.container}>
            <Text>Pagina detalhes do usuário</Text>
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