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
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        width: 40,
        height: 40,
        margin: 16,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        backgroundColor: 'rgba(256,256,256,0.35)',
        margin: 15,
        paddingHorizontal: 10,


    },
    miniImage: {
        width: 40,
        height: 40,
        marginVertical: 5,
        borderRadius: 10,
    },
    moreImages: {
        position: 'absolute',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        top: 12,
        left: 10,
    },
    moreImagesContainer: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0.38)',
        width: 40,
        height: 40,
        top: 8,
        left: 4,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 40,
    },
    title: {
        color: '#000',
    },
    city: {
        fontSize: 12,
        color: '#000',
        fontWeight: '400',
        marginTop: 8,

    },

});
export default styles;