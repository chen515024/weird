import React, { useEffect, useState } from 'react';
import { parseObject } from '../../data/data';
import './lang.css';

export default function LangComponent (props) {
  const { lang, changeLang } = props;

  const [activeIndex, setActiveIndex] = useState(0);
  const onTabHandler = e => {
    const { nativeEvent } = e;
    const { classList } = nativeEvent.target;

    setActiveIndex((active) => {
      if (classList.contains('tab-item') && !classList.contains('tab-active')) {
        return active === 0 ? 1 : 0;
      }
    });
  }

  useEffect(() => {
    changeLang && changeLang(activeIndex);
  }, [activeIndex]);


  return (<div className="tab-container" onClick={e => onTabHandler(e)}>
    {
      parseObject[lang]['tabs'].map(
        (tab, index) => (
          <div 
            className={`tab-item ${ activeIndex === index ? 'tab-active' : ''}`}
            key={tab}
          >
            { tab }
          </div>
        )
      )
    }
  </div>)
}
