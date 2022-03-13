import styled from "styled-components";
import {
  questionTextColor,
  hoveredListedQuestionColor,
  hoveredQuestionTextColor,
  lineBetweenListedQuestionsColor,
} from "../../variables";

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-bottom: solid ${lineBetweenListedQuestionsColor} 1px;
  &:hover {
    background-color: ${hoveredListedQuestionColor};
  }
`;

const Image = styled.div`
  height: 30px;
  width: 30px;
  background-color: black;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
`;

const Text = styled.p`
  color: ${questionTextColor};
  padding: 0;
  background-color: transparent;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  margin: 10px;
  cursor: pointer;
  transition: 0.25s;
  ${Box}:hover & {
    font-size: 30px;
    color: ${hoveredQuestionTextColor};
  }
`;

const Icon = styled.img`
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

const ListedQuestion = ({ src, questionTitle }) => {
  return (
    <Box>
      <Image></Image>
      <Text>{questionTitle}</Text>
      <Icon alt="Remove Icon" src={src}></Icon>
    </Box>
  );
};

export default ListedQuestion;
