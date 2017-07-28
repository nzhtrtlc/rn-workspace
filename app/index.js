import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {SignedOut,SignedIn} from './routes';

EStyleSheet.build({
    $primaryRed: '#e43f3f',
    $border: '#b2b2b2',
    $inputText: '#797979'
});

export default () => {
    const isLogged = true;
    if (isLogged)
        return <SignedIn />;
    else
        return <SignedOut/>;
};