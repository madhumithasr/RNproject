import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        margin: 32,
    },

    mainImage: {
        width: '100%',
        height: height / 2,
        borderRadius: 25,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        width: 36,
        height: 36,
        margin: 16,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,


    },
    miniImage: {
        width: 40,
        height: 40,
        margin: 4,
        borderRadius: 10,
    }
});
export default styles;