import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";
const composeEnhancers =
  (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const { createLogger } = require("redux-logger");

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === "development") {
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
}

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
