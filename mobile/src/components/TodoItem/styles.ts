import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',

        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        padding: 14,
        margin: 16, 
        backgroundColor: '#FA7F72',
    },

    title: {        
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        textTransform: 'uppercase',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 18,
    },

    favoriteButton: {
        backgroundColor: '#e33d3d',
        width: 40,
        height: 40,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        padding: 15,
    },

    favorited: {
        backgroundColor: '#e33d3d',
    },

    delete: {
        backgroundColor: '#6a6180',
        color: 'white',
        width: 40,
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
        marginLeft: 30,
        paddingTop: 4,
    },
});

export default styles;