import React, { useState } from 'react';
import './button.css';

const ButtonComponent = (props) => {
  const types = ["primary","default","danger","success","info"]
  const [typeArr] = useState([...types]);
  const sizes = ["mini",'default',"medium","normal","small"]
  const [sizeArr] = useState([...sizes]);

  const { nativeType, type, long, size, className, forwardedRef } = props;
  const buttonType = (type && typeArr.includes(type) > 1) ? type : 'default';
  const buttonSize = (size && sizeArr.includes(size) > 1) ? size : 'default';

  const onClickHandler = () => {
    props.onClick && props.onClick();
  }

  let longClassName = '', parentClassName = '';

  if (className) {
    parentClassName = className;
  }

  if (long) {
    longClassName = 'long-btn';
  }

  return (<button
    ref={forwardedRef}
    type={nativeType}
    className={`btn btn-${buttonType} ${longClassName} btn-size-${buttonSize} ${parentClassName}`}
    onClick={ () => onClickHandler() }
  >
    { props.children }
  </button>)
}

export default ButtonComponent;
