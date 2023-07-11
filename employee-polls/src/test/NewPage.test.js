import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import NewPage from "../components/NewPage";
import { MemoryRouter } from "react-router";

describe("NewPage", () => {
  it("will disable button if 1 option is fill", () => {
    var component = render(
      <MemoryRouter>
        <Provider store={store}>
          <NewPage />
        </Provider>
      </MemoryRouter>
    );
    var option1 = component.getByTestId("option-one");
    fireEvent.change(option1, { target: { value: "test 1" } });

    expect(component.getByTestId("submit-new-btn")).toBeDisabled();
  });
  it("will enable button if all option is fill", () => {
    var component = render(
      <MemoryRouter>
        <Provider store={store}>
          <NewPage />
        </Provider>
      </MemoryRouter>
    );
    var option1 = component.getByTestId("option-one");
    fireEvent.change(option1, { target: { value: "test 1" } });

    var option2 = component.getByTestId("option-two");
    fireEvent.change(option2, { target: { value: "test 2" } });

    expect(component.getByTestId("submit-new-btn")).not.toBeDisabled();
  });
});
