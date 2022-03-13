import styled from "styled-components";
import {
  mainBackgroundColor,
  iconListsPath,
  footerBackgroundColor,
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

const MainBody = () => {
  return (
    <>
      <VoidBox></VoidBox>
      <Box>
        <ListedQuestion
          src={iconListsPath}
          questionTitle={apiPrueba[0].question}
        />
        <ListedQuestion
          src={iconListsPath}
          questionTitle={apiPrueba[1].question}
        />
        <ListedQuestion
          src={iconListsPath}
          questionTitle={apiPrueba[2].question}
        />
        <ListedQuestion
          src={iconListsPath}
          questionTitle={apiPrueba[0].question}
        />
        <ListedQuestion
          src={iconListsPath}
          questionTitle={apiPrueba[0].question}
        />
        <ListedQuestion
          src={iconListsPath}
          questionTitle={apiPrueba[0].question}
        />
        <ListedQuestion
          src={iconListsPath}
          questionTitle={apiPrueba[0].question}
        />
        <ListedQuestion
          src={iconListsPath}
          questionTitle={apiPrueba[0].question}
        />
        <ListedQuestion
          src={iconListsPath}
          questionTitle={apiPrueba[0].question}
        />
        <ListedQuestion
          src={iconListsPath}
          questionTitle={apiPrueba[0].question}
        />
        <ListedQuestion
          src={iconListsPath}
          questionTitle={apiPrueba[0].question}
        />{" "}
        <ListedQuestion
          src={iconListsPath}
          questionTitle={apiPrueba[0].question}
        />
        <ListedQuestion
          src={iconListsPath}
          questionTitle={apiPrueba[0].question}
        />
        <ListedQuestion
          src={iconListsPath}
          questionTitle={apiPrueba[0].question}
        />
        <ListedQuestion
          src={iconListsPath}
          questionTitle={apiPrueba[0].question}
        />
        <ListedQuestion
          src={iconListsPath}
          questionTitle={apiPrueba[0].question}
        />
        <ListedQuestion
          src={iconListsPath}
          questionTitle={apiPrueba[1].question}
        />
        <ListedQuestion
          src={iconListsPath}
          questionTitle={apiPrueba[2].question}
        />
      </Box>
      <VoidBox></VoidBox>
    </>
  );
};

export default MainBody;
