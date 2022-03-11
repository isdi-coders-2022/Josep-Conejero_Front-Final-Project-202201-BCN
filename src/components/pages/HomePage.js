/* import { Button } from "@nextui-org/react"; */

import React from "react";
import styled from "styled-components";
import ButtonImage from "../ButtonImage/ButtonImage";
import { useNavigate } from "react-router-dom";

/* import React, { useEffect } from "react"; */
/* import { useDispatch, useSelector } from "react-redux"; */

/* import { loadUsersThunk } from "../../redux/thunks/allUsersThunks"; */

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ApplicationName = styled.h1`
  margin: 0px;
  font-size: 30px;
  color: #453;
  padding-bottom: 20px;
`;

const HomePage = () => {
  const navigate = useNavigate();
  const alternativeText = "Application Icon. Screen and books.";
  const iconPath = "img/laptopandbooks.svg";
  const buttonLists = {
    favClass: ".clasebutton1",
    imageAlt: "Icon about several lists",
    image: "img/lists.svg",
    actionOnClick: () => {},
    title: "LISTS",
    bgcolor: "#00E6FF",
  };

  const buttonAllQuestions = {
    favClass: ".clasebutton1",
    imageAlt: "Icon about several lists",
    image: "img/all-questions.svg",
    actionOnClick: () => {
      navigate("/all-questions");
    },
    title: "ALL QUESTIONS",
    bgcolor: "#FFB100",
  };

  const buttonOneQuestion = {
    favClass: ".clasebutton1",
    imageAlt: "Icon about several lists",
    image: "img/a-question.svg",
    actionOnClick: () => {},
    title: "CREATE A QUESTION",
    bgcolor: "#FFFE00",
  };

  const buttonReview = {
    favClass: ".clasebutton1",
    imageAlt: "Icon about several lists",
    image: "img/review 2.svg",
    actionOnClick: () => {},
    title: "CONTINUE LAST REVIEW",
    bgcolor: "#28FF00",
  };

  return (
    <Container>
      <img alt={alternativeText} src={iconPath} />
      <ApplicationName>LEARNING HELPER</ApplicationName>
      <div>
        <ButtonImage
          favClass={buttonLists.favClass}
          imageAlt={buttonLists.imageAlt}
          image={buttonLists.image}
          actionOnClick={buttonLists.actionOnClick}
          title={buttonLists.title}
          inputColor={buttonLists.bgcolor}
        ></ButtonImage>

        <ButtonImage
          favClass={buttonAllQuestions.favClass}
          imageAlt={buttonAllQuestions.imageAlt}
          image={buttonAllQuestions.image}
          actionOnClick={buttonAllQuestions.actionOnClick}
          title={buttonAllQuestions.title}
          inputColor={buttonAllQuestions.bgcolor}
        ></ButtonImage>

        <ButtonImage
          favClass={buttonOneQuestion.favClass}
          imageAlt={buttonOneQuestion.imageAlt}
          image={buttonOneQuestion.image}
          actionOnClick={buttonOneQuestion.actionOnClick}
          title={buttonOneQuestion.title}
          inputColor={buttonOneQuestion.bgcolor}
        ></ButtonImage>

        <ButtonImage
          favClass={buttonReview.favClass}
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
