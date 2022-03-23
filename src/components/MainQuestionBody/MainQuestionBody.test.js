import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import MainQuestionBody from "./MainQuestionBody";

describe("Given a MainQuestionBody component", () => {
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
      const id = 1;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <MainQuestionBody idQuestion={id}></MainQuestionBody>
          </Provider>
        </BrowserRouter>
      );

      const foundText = screen.queryByText("Pregunta 1");
      expect(foundText).toBeInTheDocument();
    });
  });
});
