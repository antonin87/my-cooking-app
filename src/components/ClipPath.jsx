import React from 'react';

const ClipPath = props => (
  <svg height="0" width="0">
    <defs>
      <clipPath clipPathUnits="objectBoundingBox" id="sector">
        <div></div>
        <path fill="none" stroke="#ffffff" strokeWidth="5" className="sector" d="M0.5,0.5 l0.5,0 A0.5,0.5 0 0,0 0.75,.066987298 z"></path>
      </clipPath>
    </defs>
  </svg>
)

export default ClipPath;  
  
  
