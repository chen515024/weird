import React from 'react';
import './content.css';

const ContentComponent = props => {
  return <p className="content">
    { props.children }
  </p>
}

export default ContentComponent;
