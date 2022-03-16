import ListedQuestion from "./ListedQuestion";
import { iconLittleQuestionPath, iconDeletePath } from "../../variables";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Given a ListedQuestion component", () => {
  describe("When it's rendered", () => {
    test("then it should show 2 images and a text", () => {
      /* render(
        <BrowserRouter>
          <ListedQuestion
            srcType={iconLittleQuestionPath}
            srcDelete={iconDeletePath}
            questionTitle={"Pregunta 1"}
            questionID={1}
          ></ListedQuestion>
        </BrowserRouter>
      ); */
      /* const images = screen.queryAllByRole("img");

      expect(images.length).toBe(2); */
      /* render(
        <ListedQuestion
          title={textIconAllQuestions}
          picture={iconAllQuestionsPath}
          backgroundColor={backgroundColorIconAllQuestions}
          alternativeTextImage={alternativeTextIconAllQuestions}
        ></ListedQuestion>
      );
 */
      /* const foundAlternativeText = screen.queryByAltText(
        alternativeTextIconAllQuestions
      ); */
      /* const foundAlternativeText = screen.queryByAltText(
        "A shelving with books"
      );

      expect(foundAlternativeText).toBeInTheDocument(); */
    });
  });
});
