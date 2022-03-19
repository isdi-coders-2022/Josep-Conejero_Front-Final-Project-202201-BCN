/* import { render, screen } from "@testing-library/react";
import QuestionPage from "./QuestionPage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import {
  alternativeTextIconAQuestion,
  alternativeTextBackIcon,
  alternativeTextHomeIcon,
  alternativeTextAddIcon,
} from "../../variables"; */

describe("Given a component QuestionPage", () => {
  describe("When it's rendered", () => {
    test("it should render 3 images", () => {
      /* const mockLocation = { state: { ID: "111" } };
      render(
        <BrowserRouter>
          <Provider store={store}>
            <QuestionPage state={mockLocation}></QuestionPage>
          </Provider>
        </BrowserRouter>
      );

      const logo = screen.getAllByRole("img");

      expect(logo.length).toBe(3); */
    });

    test("it should render 4 alternativeTextIcons", () => {
      /* render(
        <BrowserRouter>
          <Provider store={store}>
            <QuestionPage></QuestionPage>
          </Provider>
        </BrowserRouter>
      );

      const expectedAlternativeTextIconAQuestion = screen.getByAltText(
        alternativeTextIconAQuestion
      );
      const expectedAlternativeTextBackIcon = screen.getByAltText(
        alternativeTextBackIcon
      );
      const expectedAlternativeTextHomeIcon = screen.getByAltText(
        alternativeTextHomeIcon
      );
      const expectedAlternativeTextAddIcon = screen.getByAltText(
        alternativeTextAddIcon
      );
      expect(expectedAlternativeTextIconAQuestion).toBeInTheDocument();
      expect(expectedAlternativeTextBackIcon).toBeInTheDocument();
      expect(expectedAlternativeTextHomeIcon).toBeInTheDocument();
      expect(expectedAlternativeTextAddIcon).toBeInTheDocument(); */
    });
  });
});
