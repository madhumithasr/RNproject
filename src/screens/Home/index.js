import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, } from "react-native";
import Title from '../../component/Title';
import TitleClass from '../../component/Title/classComponent';

const Home = () => {
    const [title, setTitle] = useState('My First Component');

    useEffect(() => {
        setTimeout(() => {
            setTitle('updated prop text');
        }, 4000);
    }, []);
    console.log('title :>>', title);

    return (
        <SafeAreaView>
            <View>
                <Title />

                <TitleClass text='Class Component' />
            </View>
        </SafeAreaView >

    );
}

export default React.memo(Home);