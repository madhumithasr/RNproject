import React from "react";
import { Text } from "react-native";
import Styles from './styles';

class Title extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Default State Text',
        };
    }
    componentDidMount() {
        //initialized
    }
    componentDidUpdate() {
        //updated /rendered  
    }
    componentWillUnmount() {
        //leaving
    }


    onTextPress = () => {
        this.setState({
            text: 'Updated'
        });
    }


    render() {
        const { text } = this.state;
        return (
            <Text onPress={this.onTextPress} style={Styles.title}>{text}</Text>

        );
    };
}

export default Title;