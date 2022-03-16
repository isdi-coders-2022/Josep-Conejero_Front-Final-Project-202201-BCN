import ListedQuestion from "./ListedQuestion";
import { iconLittleQuestionPath, iconDeletePath } from "../../variables";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

describe("Given a ListedQuestion component", () => {
  describe("When it's rendered", () => {
    test("then it should show 2 images and a text", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ListedQuestion
              srcType={iconLittleQuestionPath}
              srcDelete={iconDeletePath}
              questionTitle={"Pregunta 1"}
              questionID={1}
            ></ListedQuestion>
          </Provider>
        </BrowserRouter>
      );
      const images = screen.queryAllByRole("img");
      const text = screen.getByText("Pregunta 1");

      expect(images.length).toBe(2);
      expect(text).toBeInTheDocument();
    });
  });
});
