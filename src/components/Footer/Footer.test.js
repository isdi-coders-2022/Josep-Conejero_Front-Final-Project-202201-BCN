import { render, screen } from "@testing-library/react";
/* import userEvent from "@testing-library/user-event"; */
/* import TestRenderer from "react-test-renderer"; */
import Footer from "./Footer";
import {
  alternativeTextBackIcon,
  alternativeTextHomeIcon,
  alternativeTextAddIcon,
} from "../../variables";
import { BrowserRouter } from "react-router-dom";

describe("Given Footer component", () => {
  describe("When it's rendered", () => {
    test("then it should show 3 images with alternative texts", () => {
      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      );
      const backIcon = screen.getByRole("img", {
        name: alternativeTextBackIcon,
      });
      const homeIcon = screen.getByRole("img", {
        name: alternativeTextHomeIcon,
      });
      const addIcon = screen.getByRole("img", {
        name: alternativeTextAddIcon,
      });
      expect(backIcon).toBeInTheDocument();
      expect(homeIcon).toBeInTheDocument();
      expect(addIcon).toBeInTheDocument();
    });
  });

  describe("When it's instantiated with an action", () => {
    test("Then it should call an action function on click", () => {
      /* const action = jest.fn(); */
      /*  render(<Button text="" className="" actionOnClick={action} />); */
      /*render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      );
      const button = screen.queryByRole("img", {
        name: alternativeTextBackIcon,
      }); /*

      userEvent.click(button);

      expect(action).toHaveBeenCalled(); */
    });
  });
});
