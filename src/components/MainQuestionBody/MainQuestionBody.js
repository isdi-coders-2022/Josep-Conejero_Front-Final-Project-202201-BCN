import styled from "styled-components";
import {
  mainBackgroundColor,
  /* iconDeletePath, */
  footerBackgroundColor,
  buttonColor,
} from "../../variables";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addQuestionThunk } from "../../redux/thunk/questionsThunk";

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
  width: 90%;
  height: 15vh;
  border-radius: 10px;
  padding: 5px;
  border: solid black 1px;
  margin-top: 25px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AnswerBox = styled.div`
  width: 90%;
  height: 45vh;
  border-radius: 10px;
  padding: 5px;
  border: solid black 1px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VoidBox = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${footerBackgroundColor};
`;

const Buttons = styled.div`
  /* background-color: red; */
  width: 100%;
  height: 10vh;
  position: fixed;
  bottom: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const AddRemoveButton = styled.button`
  background-color: ${buttonColor};
  border: 0px;
  height: 6vh;
  font-size: 20px;
  color: white;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 10px;
  margin-right: 10px;
  transition: 0.25s;
  &:hover {
    height: 7vh;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 22px;
    box-shadow: 10px 10px 10px grey;
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const SaveButton = styled.button`
  background-color: ${buttonColor};
  border: 0px;
  height: 6vh;
  font-size: 20px;
  color: white;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 7px;
  margin-right: 7px;
  transition: 0.25s;
  &:hover {
    height: 7vh;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 25px;
    box-shadow: 10px 10px 10px grey;
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const QuestionInput = styled.textarea`
  /* background-color: green; */
  width: 100%;
  height: 20vh;
  font-size: 20px;
  border: none;
  outline: none;
  resize: none;
  position: relative;
  top: -17px;
`;

const AnswerInput = styled.textarea`
  /* background-color: green; */
  width: 100%;
  height: 50vh;
  font-size: 20px;
  border: none;
  outline: none;
  resize: none;
  position: relative;
  top: -17px;
`;

const LabelText = styled.p`
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
  background-color: white;
  padding-left: 10px;
  padding-right: 10px;
  border: solid black 1px;
  border-radius: 10px;
  position: relative;
  top: -17px;
`;

const MainQuestionBody = ({ questionText, answerText, idQuestion }) => {
  const dispatch = useDispatch();
  const initialFormData = {
    question: questionText ? questionText : "",
    answer: answerText ? answerText : "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const isFilled = formData.questionText !== "" && formData.answerText !== "";

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const addQuestionHandler = (event) => {
    event.preventDefault();
    if (isFilled) {
      dispatch(addQuestionThunk(formData));
    }
  };

  return (
    <>
      <VoidBox></VoidBox>
      <Container>
        <QuestionBox>
          <LabelText>QUESTION</LabelText>
          <QuestionInput
            onChange={handleChange}
            name="question"
            value={questionText}
          ></QuestionInput>
        </QuestionBox>
        <AnswerBox>
          <LabelText>ANSWER</LabelText>
          <AnswerInput
            onChange={handleChange}
            name="answer"
            value={answerText}
          ></AnswerInput>
        </AnswerBox>
        <Buttons>
          <AddRemoveButton>ADD/REMOVE FROM LIST</AddRemoveButton>
          <SaveButton onClick={addQuestionHandler}>SAVE</SaveButton>
        </Buttons>
      </Container>
    </>
  );
};

export default MainQuestionBody;
