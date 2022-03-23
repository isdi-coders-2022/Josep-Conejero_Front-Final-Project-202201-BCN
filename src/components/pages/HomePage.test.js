import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

describe("Given a component HomePage", () => {
  describe("When it's rendered", () => {
    test("it should render 5 images", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage></HomePage>
          </Provider>
        </BrowserRouter>
      );

      const logo = screen.getAllByRole("img");

      expect(logo.length).toBe(5);
    });

    test("it should render a title", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage></HomePage>
          </Provider>
        </BrowserRouter>
      );

      const title = screen.getByAltText("Application Icon. Screen and books.");

      expect(title).toBeInTheDocument();
    });
  });
});
