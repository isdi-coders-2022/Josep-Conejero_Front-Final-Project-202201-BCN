import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainBody from "../MainBody/MainBody";
import {
  textIconLists,
  iconListsPath,
  backgroundColorIconLists,
  alternativeTextIconLists,
} from "../../variables";

const ListsPage = () => {
  return (
    <>
      <Header
        title={textIconLists}
        picture={iconListsPath}
        backgroundColor={backgroundColorIconLists}
        alternativeTextImage={alternativeTextIconLists}
      ></Header>
      <MainBody></MainBody>
      <Footer></Footer>
    </>
  );
};

export default ListsPage;
