import styled from "styled-components";
import {
  questionTextColor,
  hoveredListedQuestionColor,
  hoveredQuestionTextColor,
  lineBetweenListedQuestionsColor,
} from "../../variables";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: solid ${lineBetweenListedQuestionsColor} 1px;
  &:hover {
    background-color: ${hoveredListedQuestionColor};
  }
`;

const LeftBox = styled.div`
  width: 88%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RightBox = styled.div`
  width: 12%;
  /* background-color: green; */
  display: flex;
`;

const Text = styled.p`
  color: ${questionTextColor};
  padding: 0;
  width: 85%;
  text-align: left;
  font-size: 25px;
  font-weight: 600;
  margin: 10px;
  transition: 0.25s;
  ${Container}:hover & {
    font-size: 30px;
    color: ${hoveredQuestionTextColor};
    padding-left: 2.5px;
    padding-right: 2.5px;
  }
`;

const IconLeft = styled.img`
  height: 30px;
  width: 30px;
  padding: 5px;
  padding-left: 15px;
  transition: 0.25s;
`;

const IconRight = styled.img`
  height: 30px;
  width: 30px;
  padding: 5px;
  cursor: pointer;
  transition: 0.25s;
  &:hover {
    height: 35px;
    width: 35px;
    padding-left: 2.5px;
    padding-right: 2.5px;
  }
`;

const fitWidthText = (text) => {
  /*esto se tiene que hacer con gestión del estado de react*/
  return text.length > 20 ? text.slice(0, 19) + "..." : text;
};

const ListedQuestion = ({ srcType, srcDelete, questionTitle }) => {
  return (
    <Container>
      <LeftBox>
        <IconLeft alt="Type of list" src={srcType}></IconLeft>
        <Text className="ListedQuestionText">
          {fitWidthText(questionTitle)}
        </Text>
      </LeftBox>
      <RightBox>
        <IconRight alt="Remove Icon" src={srcDelete}></IconRight>
      </RightBox>
    </Container>
  );
};

export default ListedQuestion;
