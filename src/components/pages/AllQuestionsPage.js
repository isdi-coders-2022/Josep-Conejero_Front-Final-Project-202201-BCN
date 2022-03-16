import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainBody from "../MainBody/MainBody";
import {
  textIconAllQuestions,
  iconAllQuestionsPath,
  backgroundColorIconAllQuestions,
  alternativeTextIconAllQuestions,
} from "../../variables";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadQuestionsListThunk } from "../../redux/thunk/questionsThunk";

const AllQuestionsPage = () => {
  const questionsList = useSelector((state) => state.questionsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadQuestionsListThunk);
  }, [dispatch]);

  return (
    <>
      <Header
        title={textIconAllQuestions}
        picture={iconAllQuestionsPath}
        backgroundColor={backgroundColorIconAllQuestions}
        alternativeTextImage={alternativeTextIconAllQuestions}
      ></Header>
      <MainBody list={questionsList} screenType={"questions"}></MainBody>
      <Footer></Footer>
    </>
  );
};

export default AllQuestionsPage;
