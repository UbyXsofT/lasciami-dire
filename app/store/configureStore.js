import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"; //Middleware

import themeReducer from "../reducers/themeReducer";
import userReducer from "../reducers/userReducer";

const rootReducer = combineReducers({
  themeReducer: themeReducer,
  userReducer: userReducer,
});

// Crea negozio con i riduttori e
// applica thunk come middleware
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
