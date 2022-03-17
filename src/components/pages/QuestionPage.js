import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
  iconAQuestionPath,
  textIconAQuestion,
  backgroundColorIconAQuestion,
  alternativeTextIconAQuestion,
} from "../../variables";
import MainQuestionBody from "../MainQuestionBody/MainQuestionBody";
import { useLocation } from "react-router-dom";

const QuestionPage = () => {
  const location = useLocation();
  const questionID = location.state.ID;

  /*  let questionText = questionID;
  let answerText = questionID;

  if (questionID) {
    questionText = location.state.question;
    answerText = location.state.answer;
  } */

  return (
    <>
      <Header
        title={textIconAQuestion}
        picture={iconAQuestionPath}
        backgroundColor={backgroundColorIconAQuestion}
        alternativeTextImage={alternativeTextIconAQuestion}
      ></Header>
      <MainQuestionBody idQuestion={questionID}></MainQuestionBody>
      <Footer hiddenAdd={true}></Footer>
    </>
  );
};

export default QuestionPage;

/*  questionText={questionText}
        answerText={answerText} */
