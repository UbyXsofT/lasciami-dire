import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"; //Middleware

import themeReducer from "../reducers/themeReducer";

const rootReducer = combineReducers({
  themeReducer: themeReducer,
});

// Crea negozio con i riduttori e
// applica thunk come middleware
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
