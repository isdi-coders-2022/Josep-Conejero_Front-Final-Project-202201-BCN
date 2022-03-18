/* import { useNavigate } from "react-router-dom"; */
import styled from "styled-components";
import { deleteQuestionsListThunk } from "../../redux/thunk/questionsListsThunk";
import { deleteQuestionThunk } from "../../redux/thunk/questionsThunk";
import {
  mainBackgroundColor,
  iconDeletePath,
  footerBackgroundColor,
  iconLittleListsPath,
  iconLittleQuestionPath,
} from "../../variables";
import ListedQuestion from "../ListedQuestion/ListedQuestion";

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

const MainBody = ({ list, screenType }) => {
  /* const navigate = useNavigate(); */
  let icono;
  let titleItemList;
  let deleteFunction;
  /* let onClickItemFunction; */
  let pageToGoWhenItemClick;
  switch (screenType) {
    case "questions":
      icono = iconLittleQuestionPath;
      titleItemList = "question";
      deleteFunction = deleteQuestionThunk;
      /*  onClickItemFunction = (ID) => {
        navigate(`/question`, {
          state: { ID: ID },
        });
      }; */
      pageToGoWhenItemClick = "/question";
      break;
    case "lists":
      icono = iconLittleListsPath;
      titleItemList = "listName";
      deleteFunction = deleteQuestionsListThunk;
      /* onClickItemFunction = (ID) => {
        navigate(`/questions-list`, {
          state: { ID: ID },
        });
      }; */
      pageToGoWhenItemClick = "/questions-list";
      break;
    default:
      icono = iconLittleListsPath;
  }

  return (
    <>
      <VoidBox></VoidBox>
      <Box>
        {(screenType === "questions" || screenType === "lists") &&
          list.length > 0 &&
          list.map((item) => {
            return (
              <ListedQuestion
                srcType={icono}
                srcDelete={iconDeletePath}
                questionTitle={item[titleItemList]}
                /*  onClickItemFunction={onClickItemFunction(item.id)} */
                pageToGoWhenItemClick={pageToGoWhenItemClick}
                deleteFunction={deleteFunction}
                questionID={item.id}
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
