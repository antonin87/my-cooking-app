import React from 'react';
import fork from './../../../images/fork.png';
import knife from './../../../images/knife.png';

const Header = () => {
  return (
    <div className={`header`}>
      <ul>
      <li><img src={fork} alt="" /></li>
      <li><img src={knife} alt="" /></li>
      </ul>
    </div>
    )
}

export default Header;
