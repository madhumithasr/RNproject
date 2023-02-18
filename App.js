import React from 'react';
import View from 'react-native';
import Home from './src/screens/Home';


const App = () => {
    return (
        <View>
            <View style={{ backgroundColor: 'red', fontSize: 20, color: 'White' }}>
                Header
            </View>
            <Home />
        </View>
    );
}

export default App;