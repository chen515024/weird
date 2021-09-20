import React from 'react';
import './bottom.css';

const BottomComponent = props => {
  return <div className="bottom" id="bottom">{ props.children }</div>
}

export default BottomComponent;

