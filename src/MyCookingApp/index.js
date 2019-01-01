import React, {Component} from 'react';
import MyCookingApp from './MyCookingApp';
import { CookingContext } from './../context/CookingContext';

export default class extends Component {
    render() {
        return(
            <CookingContext.Consumer>
            {
                ({theme, toggleTheme}) => (<MyCookingApp theme={theme} toggleTheme={toggleTheme} />)
            }
            </CookingContext.Consumer>
        )
    }
}