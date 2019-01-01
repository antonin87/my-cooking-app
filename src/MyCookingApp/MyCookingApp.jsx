import React from 'react';
import Header from '../components/layouts/Header/Header.jsx';
import Wheel from '../components/layouts/Wheel';
import Routing from './../Routing.jsx';

const MyCookingApp = ({theme, toggleTheme}) => {
    const classMenu = theme !== null ? 'with-theme' : '';

    const removeTheme = () => {
            if (theme !== null) {
                toggleTheme(null);
            }
    }

  return (
    <div id="myCookingApp" className={classMenu} style={{backgroundColor: theme}} onClick={() => removeTheme()}>
        <Header />
        <Wheel />
        <Routing />
    </div>
    )
}

export default MyCookingApp;
