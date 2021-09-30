import { useContext } from 'react';
import { getCurrentQuestions, questions } from "../data/data";
import { LangContext } from '../store/lang';

import QuizWrapperComponent from "../components/QuizWrapper";
import BottomComponent from "../components/Bottom";

const Question = (props) => {
  const langValue = useContext(LangContext);
  const { onSelectHandler, order } = props;
  return (
    <div className="flex-center flex-direction-column w-100p">
      <QuizWrapperComponent 
        question={ questions[(order - 1 < 0 ? 0 : order - 1)] } 
        onSelect={ onSelectHandler }
      />
      <BottomComponent lang={langValue}>{getCurrentQuestions(langValue, order)}</BottomComponent>
    </div>
  )
}

export default Question;
