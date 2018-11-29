import React from 'react';
import Wheel from './Wheel';
import {CookingContext} from './../../context/CookingContext';

export default () => (
    <CookingContext.Consumer>{({theme}) => <Wheel theme={theme} />}</CookingContext.Consumer>
) 