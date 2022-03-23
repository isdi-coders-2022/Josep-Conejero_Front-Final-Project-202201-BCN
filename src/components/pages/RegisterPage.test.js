import { render, screen } from "@testing-library/react";
import { RegisterPage } from "./RegisterPage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

describe("Given a component RegisterPage", () => {
  describe("When it's rendered", () => {
    test("it should render 2 images", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage></RegisterPage>
          </Provider>
        </BrowserRouter>
      );

      const logo = screen.getAllByRole("img");

      expect(logo.length).toBe(2);
    });

    test("it should render 1 button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage></RegisterPage>
          </Provider>
        </BrowserRouter>
      );

      const buttonsRendered = screen.getAllByRole("button", {
        name: "REGISTER",
      });

      expect(buttonsRendered.length).toBe(1);
    });
  });
});
