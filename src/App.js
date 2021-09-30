import React, { useState, useReducer } from 'react';
import './App.css';

import LangComponent from './components/Lang';
import AnswerComponent from './views/Answer';
import QuestionComponent from './views/Question';
import WelcomeComponent from './views/Welcome';

import { questions } from "./data/data";
import { LangContext, lang } from './store/lang';
import { OrderReducer, initOrder } from './store/count';
import { computeSameAnswer } from './utils/same';

let collectionUsersAnswers = [];
let collectionCorrectAnswers = questions.reduce((v,r) => {
  v.push(r.correct);
  return v;
},[]);
let correctNum = 0;

function App () {
  const [langValue, setLangValue] = useState(lang);
  const [usersAnswers,setUsersAnswers] = useState(collectionUsersAnswers);
  const [correctTotal,setCorrectTotal] = useState(0);
  const [orderState,orderDispatch] = useReducer(OrderReducer,0,initOrder);
  const changeLangHandler = (index) => {
    const value = index === 0 ? "en" : "zh";
    setLangValue(value);
  };
  const startQuestionHandler = () => {
    orderDispatch({ type:"reset", payload:1 })
  };
  const endQuestionHandler = () => {
    orderDispatch({ type:"reset", payload:0 });
    correctNum = 0;
  };
  const onSelectHandler = (select) => {
    orderDispatch({ type:"increment" });
    if(orderState.count > 25){
      orderDispatch({ type:"reset", payload:25 });
    }
    if(select){
      collectionUsersAnswers.push(select);
    }
    correctNum = computeSameAnswer(correctNum,select,collectionCorrectAnswers,orderState.count);
    setCorrectTotal(correctNum);
    setUsersAnswers(collectionUsersAnswers);
  }
  const { count:order } = orderState;

  return (
    <div className="App flex-center">
      <LangContext.Provider value={langValue}>
        <LangComponent 
          lang={langValue} 
          changeLang={changeLangHandler}
        />
        {
          order > 0 ? order <= 25 ? 
            (
              <QuestionComponent
                onSelectHandler={onSelectHandler}
                order={order}
              />
            ) 
            : 
            (
              <AnswerComponent
                correctTotal={correctTotal}
                usersAnswers={usersAnswers}
                endQuestionHandler={endQuestionHandler}
              />
            )
            : 
            (
              <WelcomeComponent startQuestionHandler={startQuestionHandler}/>
            )
        }
      </LangContext.Provider>
    </div>
  );
}

export default App;
