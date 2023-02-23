import React from 'react';
import { Pressable, SafeAreaView, Text, View, Image, ImageBackground } from 'react-native';
import styles from './styles';

const AttractionDetails = ({ navigation, route }) => {
    const { item } = route?.params || {};
    const mainImage = item?.images?.length ? item?.images[0] : null;
    console.log('item :>>', item);

    const onBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={styles.mainImage}
                imageStyle={{ borderRadius: 20 }}
                source={{ uri: mainImage }} >

                <View style={styles.header}>
                    <Pressable onPress={onBack} hitSlop={8}>
                        <Image style={styles.icon} source={require('../../assets/back.png')} />
                    </Pressable>
                    <Pressable hitSlop={8}>
                        <Image style={styles.icon} source={require('../../assets/share.png')} />
                    </Pressable>
                </View>
                <View style={styles.footer}>
                    {item?.images?.lenght ? item?.images?.map(images => (
                        <Image key={images} source={{ uri: images }} style={styles.miniImage} />
                    )) : null}

                </View>
            </ImageBackground>
            <Text>{item?.name}</Text>
        </SafeAreaView>
    );
};

export default React.memo(AttractionDetails);
