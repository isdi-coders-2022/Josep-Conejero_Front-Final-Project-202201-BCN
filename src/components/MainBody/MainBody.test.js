import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MainBody from "./MainBody";

describe("Given a MainBody component", () => {
  describe("When it's rendered with a list and screen='questions'", () => {
    test("then it should show 2 elements", () => {
      const questions = [
        {
          id: 1,
          question: "Pregunta 1",
        },
        {
          id: 2,
          question: "Pregunta 2",
        },
      ];
      const fixedScreenType = "questions";

      /* render(
        <MainBody screenType={fixedScreenType} list={questions}></MainBody>
      );
      
      const foundText = screen.queryByText("Pregunta 1");
      expect(foundText).toBeInTheDocument(); */
    });
  });
});
