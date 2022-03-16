import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainBody from "../MainBody/MainBody";
import {
  iconAQuestionPath,
  textIconAQuestion,
  backgroundColorIconAQuestion,
  alternativeTextIconAQuestion,
} from "../../variables";
import MainQuestionBody from "../MainQuestionBody/MainQuestionBody";

const QuestionPage = () => {
  return (
    <>
      <Header
        title={textIconAQuestion}
        picture={iconAQuestionPath}
        backgroundColor={backgroundColorIconAQuestion}
        alternativeTextImage={alternativeTextIconAQuestion}
      ></Header>
      <MainQuestionBody></MainQuestionBody>
      <Footer></Footer>
    </>
  );
};

export default QuestionPage;
