import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

describe("_saveQuestion", () => {
  it("will return all expected fields if correctly formatted data is passed", async () => {
    const question = {
      optionOneText: "ReactJS",
      optionTwoText: "Angular",
      author: "tylermcginnis",
    };

    var result = await _saveQuestion(question);
    expect(result.author).toEqual("tylermcginnis");
    expect(result.optionOne.text).toEqual("ReactJS");
    expect(result.optionTwo.text).toEqual("Angular");
    expect(result.id).not.toBeNull();
    expect(result.timestamp).not.toBeNull();
    expect(result.optionOne.votes.length).toEqual(0);
    expect(result.optionTwo.votes.length).toEqual(0);
  });

  it("will return error if incorrectly data is passes", async () => {
    const question = {
      optionOneText: "ReactJS",
      author: "tylermcginnis",
    };

    await expect(_saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  it("will return all expected fields if correctly formatted data is passed", async () => {
    const questionAsnswer = {
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    };

    var result = await _saveQuestionAnswer(questionAsnswer);
    expect(result).toEqual(true);
  });

  it("will return error if incorrectly data is passed", async () => {
    const questionAsnswer = {
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
    };

    await expect(_saveQuestionAnswer(questionAsnswer)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});

