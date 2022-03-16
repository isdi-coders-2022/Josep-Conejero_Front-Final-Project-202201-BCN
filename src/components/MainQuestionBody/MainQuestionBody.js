import styled from "styled-components";
import {
  mainBackgroundColor,
  iconDeletePath,
  footerBackgroundColor,
  /* iconLittleListsPath, */
  iconLittleQuestionPath,
} from "../../variables";
import ListedQuestion from "../ListedQuestion/ListedQuestion";

const Container = styled.div`
  width: 100%;
  background-color: ${mainBackgroundColor};
  min-height: 80vh;
  border: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const QuestionBox = styled.div`
wi

`;

const VoidBox = styled.div`
  width: 100%;
  height: 80px;
  /* background-color: transparent; */
  background-color: ${footerBackgroundColor};
`;

const MainQuestionBody = ({ idQuestion }) => {
  return (
    <>
      <VoidBox></VoidBox>
      <Container>
        <QuestionBox></QuestionBox>
        <input></input>
        <input></input>
      </Container>
      <VoidBox></VoidBox>
    </>
  );
};

export default MainQuestionBody;
