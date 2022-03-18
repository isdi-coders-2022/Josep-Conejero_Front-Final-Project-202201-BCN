import styled from "styled-components";
import {
  mainBackgroundColor,
  footerBackgroundColor,
  buttonColor,
  disabledColor,
} from "../../variables";
/* import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addQuestionThunk,
  loadOneQuestionThunk,
  updateQuestionThunk,
} from "../../redux/thunk/questionsThunk";
import { useNavigate } from "react-router-dom"; */

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

const NameBox = styled.div`
  width: 70%;
  height: 10vh;
  border-radius: 10px;
  padding: 5px;
  border: solid ${disabledColor} 2px;
  margin-top: 50px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubjectBox = styled.div`
  width: 70%;
  height: 10vh;
  border-radius: 10px;
  padding: 5px;
  border: solid ${disabledColor} 2px;
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

const DisabledSaveButton = styled.button`
  background-color: ${disabledColor};
  border: 0px;
  height: 6vh;
  font-size: 20px;
  color: white;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 7px;
  margin-right: 7px;
`;

const NameInput = styled.textarea`
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

const SubjectInput = styled.textarea`
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
  background-color: ${buttonColor};
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  border: solid ${buttonColor} 1px;
  border-radius: 10px;
  position: relative;
  top: -17px;
`;

const MainCreateListBody = () => {
  /* const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialFormData = {
    id: idQuestion,
    question: "",
    answer: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const isFilled = formData.question !== "" && formData.answer !== "";

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const addQuestionHandler = (event) => {
    event.preventDefault();
    if (isFilled) {
      if (!idQuestion) {
        dispatch(addQuestionThunk(formData));
      } else {
        dispatch(updateQuestionThunk(formData));
      }
      setFormData(initialFormData);
      navigate(-1);
    }
  };

  const question = useSelector((state) => {
    return state.oneQuestionData;
  });

  useEffect(() => {
    if (idQuestion) {
      dispatch(loadOneQuestionThunk(idQuestion));
    }
  }, [dispatch, idQuestion]);

  useEffect(() => {
    if (idQuestion) {
      setFormData({
        id: question.id,
        question: question.question,
        answer: question.answer,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question]); */

  return (
    <>
      <VoidBox></VoidBox>
      <Container>
        <NameBox>
          <LabelText>NAME</LabelText>
          <NameInput
            /* onChange={handleChange} */
            name="question"
            type="text"
            /*  value={formData.question} */
          ></NameInput>
        </NameBox>
        <SubjectBox>
          <LabelText>SUBJECT</LabelText>
          <SubjectInput
            /* onChange={handleChange} */
            name="answer"
            type="text"
            /* value={formData.answer} */
          ></SubjectInput>
        </SubjectBox>
        <Buttons>
          {/* {isFilled && ( */}
          <SaveButton /* onClick={addQuestionHandler} */>SAVE</SaveButton>
          {/*  )}
          {!isFilled && <DisabledSaveButton>SAVE</DisabledSaveButton>} */}
        </Buttons>
      </Container>
    </>
  );
};

export default MainCreateListBody;
