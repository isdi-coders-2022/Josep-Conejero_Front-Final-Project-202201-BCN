import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainBody from "../MainBody/MainBody";
import {
  /* textIconQuestionsList, */
  iconAllQuestionsPath,
  backgroundColorIconAllQuestions,
  alternativeTextIconAllQuestions,
} from "../../variables";

const QuestionsListPage = () => {
  return (
    <>
      <Header
        /*  title={textIconQuestionsList} */
        title={"ESTA ES UNA DE ESAS LISTAS"}
        picture={iconAllQuestionsPath}
        backgroundColor={backgroundColorIconAllQuestions}
        alternativeTextImage={alternativeTextIconAllQuestions}
      ></Header>
      {/* <p>ESTA ES LA LISTA DE PREGUNTAS DE LA LISTA EN LA QUE HEMOS PULSADO</p> */}
      <MainBody></MainBody>
      <Footer></Footer>
    </>
  );
};

export default QuestionsListPage;
