import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainBody from "../MainBody/MainBody";

const AllQuestionsPage = () => {
  return (
    <>
      <Header
        title="ALL QUESTIONS"
        picture="img/all-questions.svg"
        backgroundColor="#FFB100"
        alternativeTextImage="text"
      ></Header>
      <MainBody></MainBody>
      <Footer></Footer>
    </>
  );
};

export default AllQuestionsPage;
