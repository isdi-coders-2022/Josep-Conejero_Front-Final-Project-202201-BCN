import styled from "styled-components";
import {
  mainBackgroundColor,
  iconDeletePath,
  footerBackgroundColor,
  iconLittleListsPath,
  iconLittleQuestionPath,
} from "../../variables";
import ListedQuestion from "../ListedQuestion/ListedQuestion";
import apiPrueba from "../../apiPrueba";

const Box = styled.div`
  width: 100%;
  background-color: ${mainBackgroundColor};
  min-height: 80vh;
  border: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const VoidBox = styled.div`
  width: 100%;
  height: 79px;
  /* background-color: transparent; */
  background-color: ${footerBackgroundColor};
`;

const MainBody = ({ list, screen }) => {
  /* console.log(questionsList);
  debugger; */
  /* const questionsList = apiPrueba; */
  const questionsList = list;
  const icono = iconLittleQuestionPath;
  return (
    <>
      <VoidBox></VoidBox>
      <Box>
        {/* {questionsList.length > 0 && */}
        {screen === "questions" &&
          questionsList.length > 0 &&
          questionsList.map((item, index) => {
            return (
              <ListedQuestion
                srcType={icono}
                srcDelete={iconDeletePath}
                questionTitle={item.question}
                key={item.id}
              ></ListedQuestion>
            );
          })}
      </Box>
      <VoidBox></VoidBox>
    </>
  );
};

export default MainBody;
