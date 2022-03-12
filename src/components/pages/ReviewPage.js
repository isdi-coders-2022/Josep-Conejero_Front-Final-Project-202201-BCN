import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainBody from "../MainBody/MainBody";
import {
  alternativeTextIconReview,
  backgroundColorIconReview,
  iconReviewPath,
  textIconReview,
} from "../../variables";

const ReviewPage = () => {
  return (
    <>
      <Header
        title={textIconReview}
        picture={iconReviewPath}
        backgroundColor={backgroundColorIconReview}
        alternativeTextImage={alternativeTextIconReview}
      ></Header>
      <MainBody></MainBody>
      <Footer></Footer>
    </>
  );
};

export default ReviewPage;
