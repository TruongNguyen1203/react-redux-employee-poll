import Nav from "../components/Nav";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { store } from "../store/store";

describe("Nav", () => {
  it("will display all expected link", () => {
    var authUser = {
      id: "sarahedo",
      password: "password123",
      name: "Sarah Edo",
      avatarURL: "/avt-1.jpeg",
      answers: {
        "8xf0y6ziyjabvozdd253nd": "optionOne",
        "6ni6ok3ym7mf1p33lnez": "optionOne",
        am8ehyc8byjqgar0jgpub9: "optionTwo",
        loxhs1bqm25b708cmbf3g: "optionTwo",
      },
      questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
    };
    var component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Nav authUser={authUser} />
        </Provider>
      </MemoryRouter>
    );

    expect(component.getByText("Home")).toBeInTheDocument();
    expect(component.getByText("Leaderboard")).toBeInTheDocument();
    expect(component.getByText("New")).toBeInTheDocument();
    expect(component.getByText("Logout")).toBeInTheDocument();
  });
});
