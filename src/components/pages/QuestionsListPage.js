import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainBody from "../MainBody/MainBody";
import {
  textIconQuestionsList,
  iconAllQuestionsPath,
  backgroundColorIconAllQuestions,
  alternativeTextIconAllQuestions,
} from "../../variables";

const QuestionsListPage = () => {
  return (
    <>
      <Header
        title={textIconQuestionsList}
        picture={iconAllQuestionsPath}
        backgroundColor={backgroundColorIconAllQuestions}
        alternativeTextImage={alternativeTextIconAllQuestions}
      ></Header>
      <MainBody></MainBody>
      <Footer></Footer>
    </>
  );
};

export default QuestionsListPage;
