import { useContext, useRef } from 'react';
import { LangContext } from '../store/lang';
import { parseObject, getCurrentAnswers } from "../data/data";
import { marked } from '../utils/marked';

import TitleComponent from '../components/Title';
import ParseComponent from '../components/Parse';
import RenderHTMLComponent from '../components/RenderHTML';
import ButtonComponent from '../components/Button';
import TopComponent from '../components/TopButton';

const AnswerComponent = (props) => {
  const { correctTotal, usersAnswers, endQuestionHandler } = props;
  const langValue = useContext(LangContext);
  const wrapperRef = useRef(null);
  return (
    <div className="w-100p result-wrapper" ref={wrapperRef}>
      <div className="flex-center flex-direction-column result-content">
        <TitleComponent level={1}>{ getCurrentAnswers(langValue,correctTotal)}</TitleComponent>
        <ParseComponent lang={langValue} userAnswers={ usersAnswers }></ParseComponent>
        <RenderHTMLComponent template={marked(parseObject[langValue].endContent)}></RenderHTMLComponent>
        <div className="button-wrapper mt-10">
          <ButtonComponent nativeType="button" long onClick={endQuestionHandler}>
            {parseObject[langValue].endBtn}
          </ButtonComponent>
        </div>
      </div>
      <TopComponent scrollElement={wrapperRef} color="#ffffff"></TopComponent>
    </div>
  )
}

export default AnswerComponent;