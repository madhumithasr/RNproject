import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    card: {
        padding: 4,
        borderWidth: 1,
        borderColor: 'Green',
        borderRadius: 15,
        marginBottom: 12,

    },
    image: {
        width: (width - 96) / 2,
        borderRadius: 15,
        height: 120,

    },
    title: {
        fontSize: 12,
        fontWeight: '500',
        color: '#000000',
        marginTop: 12,
        marginLeft: 8,
    },
    subtitle: {
        fontSize: 10,
        fontWeight: '300',
        marginBottom: 12,
        marginLeft: 8,
        color: 'black',
    },
    icon: {
        width: 10,
        height: 10,
        marginRight: 4,
    },
    row: {
        flexDirection: 'row',
        aligntems: 'center',
        marginBottom: 12,
        marginLeft: 6,
        marginTop: 2,
    },


});
export default styles;