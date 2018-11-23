import React, { Fragment, Component } from 'react';
import { CookingContext } from '../context/CookingContext';

class Toolbar extends React.Component {
  render() {
    return (
      <CookingContext.Consumer>
      {
        ({theme}) => (
        <Fragment>
            <div style={{width:200,height:200, backgroundColor: theme.background}}
            >A little toolbar</div>
        </Fragment>
      )
      }
      </CookingContext.Consumer>
    )
  }
}

export default Toolbar;
