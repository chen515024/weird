import { useContext } from 'react';
import { LangContext } from '../store/lang';
import { parseObject } from "../data/data";

import TitleComponent from "../components/Title";
import ContentComponent from "../components/Content";
import ButtonComponent from "../components/Button";

const Welcome = props => {
  const { startQuestionHandler } = props;
  const langValue = useContext(LangContext);

  return (
    <div className="flex-center flex-direction-column">
      <TitleComponent level={1}>{parseObject[langValue].title}</TitleComponent>
      <ContentComponent>{parseObject[langValue].startContent}</ContentComponent>
      <div className="button-wrapper mt-10">
        <ButtonComponent nativeType="button" long onClick={startQuestionHandler}>
          {parseObject[langValue].startBtn}
        </ButtonComponent>
      </div>
    </div>
  )
}

export default Welcome;
