import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { MemoryRouter } from "react-router";
import App from '../App'
import { handleInitData } from "../actions/shared";


describe("LoginPage", () => {
  it("will navigate to login page if not login", () => {
    var component = render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );

    expect(component.getByText("Log In")).toBeInTheDocument();
  });
});
