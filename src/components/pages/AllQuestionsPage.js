import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainBody from "../MainBody/MainBody";
import {
  textIconAllQuestions,
  iconAllQuestionsPath,
  backgroundColorIconAllQuestions,
  alternativeTextIconAllQuestions,
} from "../../variables";
import apiPrueba from "../../apiPrueba";

const AllQuestionsPage = () => {
  return (
    <>
      <Header
        title={textIconAllQuestions}
        picture={iconAllQuestionsPath}
        backgroundColor={backgroundColorIconAllQuestions}
        alternativeTextImage={alternativeTextIconAllQuestions}
      ></Header>
      <MainBody list={apiPrueba} screen={"questions"}></MainBody>
      <Footer></Footer>
    </>
  );
};

export default AllQuestionsPage;
