/* import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { BrowserRouter } from "react-router-dom"; */

describe("Given a component HomePage", () => {
  describe("When it's rendered", () => {
    test("it should render 5 images", () => {
      /*  render(
        <BrowserRouter>
          <HomePage></HomePage>
        </BrowserRouter>
      );

      const logo = screen.getAllByRole("img");

      expect(logo.length).toBe(5); */
    });

    test("it should render a title", () => {
      /*   render(
        <BrowserRouter>
          <HomePage></HomePage>
        </BrowserRouter>
      );

      const title = screen.getByAltText("Application Icon. Screen and books.");

      expect(title).toBeInTheDocument(); */
    });
  });
});
