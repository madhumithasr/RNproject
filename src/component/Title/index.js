import React from "react";
import { Text } from "react-native";
import Styles from './styles';

const Title = ({ text, style }) => {
    return (
        <Text style={[Styles.title, style]}> {text}</Text>

    );
};
Title.defaultProps = {
    text: 'Default text'
};

export default React.memo(Title);