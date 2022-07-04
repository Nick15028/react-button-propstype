import React from 'react';
import { TouchableOpacity, Text } from 'react-native-web';
import propTypes from 'prop-types';

const MyButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default MyButton;

MyButton.propTypes = {
    title: propTypes.string.isRequired,
    onPress: propTypes.func
}

