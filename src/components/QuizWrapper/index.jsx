import React from 'react';
import ButtonComponent from '../Button';
import TitleComponent from '../Title';
import './index.css';

const QuizWrapperComponent = props => {
  const onSelectHandler = select => {
    props.onSelect && props.onSelect(select);
  }

  const { question } = props;

  return (<div className="quiz-wrapper flex-enter flex-direction-column">
    <TitleComponent level={1}>{ question.question }</TitleComponent>
    <div className="button-wrapper flex-center flex-direction-column">
      {
        question.answer.map((select) => (
          <ButtonComponent
            nativeType="button"
            onClick={ () => onSelectHandler(select) }
            className="mt-10 btn-no-hover btn-no-active"
            key={select}
            long
          >
            {select}
          </ButtonComponent>
        ))
      }
    </div>
  </div>)
}

export default QuizWrapperComponent;
