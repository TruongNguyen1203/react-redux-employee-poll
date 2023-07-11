import reducer from "../reducers";
import middleware from "../middleware";
import { createStore } from "redux";

export const store = createStore(reducer, middleware);
