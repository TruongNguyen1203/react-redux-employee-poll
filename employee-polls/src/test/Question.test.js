import Question from "../components/Question";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

describe("Question", () => {
  it("matches the snapshot when question is passed", () => {
    var question = {
      id: "xj352vofupe1dqz9emx13r",
      author: "mtsamis",
      timestamp: 1493579767190,
    };
    var component = render(
      <MemoryRouter>
        <Question question={question} />
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });

  it("will display all fields when question is passed", () => {
    var question = {
      id: "xj352vofupe1dqz9emx13r",
      author: "mtsamis",
      timestamp: 1493579767190,
    };
    var component = render(
      <MemoryRouter>
        <Question question={question} />
      </MemoryRouter>
    );
    expect(component.getByTestId("question-author")).toBeInTheDocument();
    expect(component.getByTestId("question-date")).toBeInTheDocument();
  });
});
    