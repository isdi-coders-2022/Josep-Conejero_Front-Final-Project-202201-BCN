import { render, screen } from "@testing-library/react";
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
});
