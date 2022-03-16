import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import IconButton from "./IconButton";

describe("Given a IconButton component", () => {
  describe("When it's rendered", () => {
    test("then it should show 1 image", () => {
      render(
        <BrowserRouter>
          <IconButton
            src="img/back.png"
            alternativeText={"CASUNDENA"}
            actionOnClick={() => {}}
          ></IconButton>
        </BrowserRouter>
      );
      const image = screen.queryByRole("img");

      expect(image).toBeInTheDocument();
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
