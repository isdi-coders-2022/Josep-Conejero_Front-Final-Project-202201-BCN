import { render, screen } from "@testing-library/react";
import { LoginPage } from "./LoginPage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import userEvent from "@testing-library/user-event";

describe("Given a component LoginPage", () => {
  describe("When it's rendered", () => {
    test("it should render 1 image", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage></LoginPage>
          </Provider>
        </BrowserRouter>
      );

      const logo = screen.getAllByRole("img");

      expect(logo.length).toBe(1);
    });

    test("it should render 1 button", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage></LoginPage>
          </Provider>
        </BrowserRouter>
      );

      const buttonsRendered = screen.getAllByRole("button", { name: "LOG IN" });

      expect(buttonsRendered.length).toBe(1);
    });
  });
});

describe("Given a component LoginPage with a button", () => {
  describe("When it is clicked", () => {
    test("It should do the action given", () => {
      const mockUseDispatch = jest.fn();
      const mockNavigate = jest.fn();
      jest.mock("react-router-dom", () => ({
        ...jest.requireActual("react-router-dom"),
        useNavigate: () => mockNavigate,
      }));

      jest.mock("react-redux", () => {
        return {
          ...jest.requireActual("react-redux"),
          useDispatch: () => mockUseDispatch,
        };
      });

      /* const action = jest.fn(); */

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginPage></LoginPage>
          </Provider>
        </BrowserRouter>
      );

      const expectedButton = screen.getByRole("button", { name: "LOG IN" });
      userEvent.click(expectedButton);

      expect(mockNavigate).toHaveBeenCalled();

      /*  render(<ButtonImage actionOnClick={action} />);*/

      /*  const button = screen.getByRole("button");

      button.userEvent.click(action);

      expect(action).toHaveBeenCalled(); */

      /* const mockFunction = jest.fn();

 render(<Header actionOnClick={mockFunction} />);

 const button = screen.queryByRole("LOG IN");
 userEvent.click(button);
 expect(mockFunction).toHaveBeenCalled(); */
    });
  });
});
