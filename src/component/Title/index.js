import React, { useState } from "react";
import { Text } from "react-native";
import Styles from './styles';

const Title = () => {
    const [stateText, setText] = useState('');
    console.log('Update')


    const onTextPress = () => {
        setText('Updated state')
    }

    return (
        <Text onPress={onTextPress} style={Styles.title}>{stateText}</Text>

    );
}

Title.defaultProps = {
    text: 'Default text'
};

export default React.memo(Title);