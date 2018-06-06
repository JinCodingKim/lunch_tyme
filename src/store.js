import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import restaurant from "./ducks/restaurant";

export default createStore(restaurant, applyMiddleware(promiseMiddleware()));
