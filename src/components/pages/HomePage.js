import React from "react";
import styled from "styled-components";
import ButtonImage from "../ButtonImage/ButtonImage";
import { useNavigate } from "react-router-dom";
import {
  homeBackgroundColor,
  applicationNameTextColor,
  iconListsPath,
  iconApplicationPath,
  alternativeTextApplicationIcon,
  applicationName,
  alternativeTextIconLists,
  textIconLists,
  backgroundColorIconLists,
  iconAllQuestionsPath,
  backgroundColorIconAllQuestions,
  textIconAllQuestions,
  alternativeTextIconAllQuestions,
  alternativeTextIconAQuestion,
  iconAQuestionPath,
  textIconAQuestion,
  backgroundColorIconAQuestion,
  alternativeTextIconReview,
  iconReviewPath,
  textIconReview,
  backgroundColorIconReview,
} from "../../variables";

/* import React, { useEffect } from "react"; */
/* import { useDispatch, useSelector } from "react-redux"; */

/* import { loadUsersThunk } from "../../redux/thunks/allUsersThunks"; */

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  background-color: ${homeBackgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ApplicationName = styled.h1`
  margin: 0px;
  font-size: 30px;
  color: ${applicationNameTextColor};
  padding-bottom: 20px;
`;

const HomePage = () => {
  const navigate = useNavigate();
  const buttonLists = {
    imageAlt: alternativeTextIconLists,
    image: iconListsPath,
    actionOnClick: () => {
      navigate("/lists");
    },
    title: textIconLists,
    bgcolor: backgroundColorIconLists,
  };

  const buttonAllQuestions = {
    imageAlt: alternativeTextIconAllQuestions,
    image: iconAllQuestionsPath,
    actionOnClick: () => {
      navigate("/all-questions");
    },
    title: textIconAllQuestions,
    bgcolor: backgroundColorIconAllQuestions,
  };

  const buttonOneQuestion = {
    imageAlt: alternativeTextIconAQuestion,
    image: iconAQuestionPath,
    actionOnClick: () => {
      navigate("/question");
    },
    title: textIconAQuestion,
    bgcolor: backgroundColorIconAQuestion,
  };

  const buttonReview = {
    imageAlt: alternativeTextIconReview,
    image: iconReviewPath,
    actionOnClick: () => {
      navigate("/review");
    },
    title: textIconReview,
    bgcolor: backgroundColorIconReview,
  };

  return (
    <Container>
      <img alt={alternativeTextApplicationIcon} src={iconApplicationPath} />
      <ApplicationName>{applicationName}</ApplicationName>
      <div>
        <ButtonImage
          imageAlt={buttonLists.imageAlt}
          image={buttonLists.image}
          actionOnClick={buttonLists.actionOnClick}
          title={buttonLists.title}
          inputColor={buttonLists.bgcolor}
        ></ButtonImage>

        <ButtonImage
          imageAlt={buttonAllQuestions.imageAlt}
          image={buttonAllQuestions.image}
          actionOnClick={buttonAllQuestions.actionOnClick}
          title={buttonAllQuestions.title}
          inputColor={buttonAllQuestions.bgcolor}
        ></ButtonImage>

        <ButtonImage
          imageAlt={buttonOneQuestion.imageAlt}
          image={buttonOneQuestion.image}
          actionOnClick={buttonOneQuestion.actionOnClick}
          title={buttonOneQuestion.title}
          inputColor={buttonOneQuestion.bgcolor}
        ></ButtonImage>

        <ButtonImage
          imageAlt={buttonReview.imageAlt}
          image={buttonReview.image}
          actionOnClick={buttonReview.actionOnClick}
          title={buttonReview.title}
          inputColor={buttonReview.bgcolor}
        ></ButtonImage>
      </div>
    </Container>
  );
};

export default HomePage;
