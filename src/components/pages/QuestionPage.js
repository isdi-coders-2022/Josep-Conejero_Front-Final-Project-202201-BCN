import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainBody from "../MainBody/MainBody";
import {
  iconAQuestionPath,
  textIconAQuestion,
  backgroundColorIconAQuestion,
  alternativeTextIconAQuestion,
} from "../../variables";

const QuestionPage = () => {
  return (
    <>
      <Header
        title={textIconAQuestion}
        picture={iconAQuestionPath}
        backgroundColor={backgroundColorIconAQuestion}
        alternativeTextImage={alternativeTextIconAQuestion}
      ></Header>
      <MainBody></MainBody>
      <Footer></Footer>
    </>
  );
};

export default QuestionPage;
