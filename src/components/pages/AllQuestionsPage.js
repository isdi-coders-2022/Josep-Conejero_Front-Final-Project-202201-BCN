import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainBody from "../MainBody/MainBody";
import {
  textIconAllQuestions,
  iconAllQuestionsPath,
  backgroundColorIconAllQuestions,
  alternativeTextIconAllQuestions,
} from "../../variables";

const AllQuestionsPage = () => {
  return (
    <>
      <Header
        title={textIconAllQuestions}
        picture={iconAllQuestionsPath}
        backgroundColor={backgroundColorIconAllQuestions}
        alternativeTextImage={alternativeTextIconAllQuestions}
      ></Header>
      <MainBody></MainBody>
      <Footer></Footer>
    </>
  );
};

export default AllQuestionsPage;
