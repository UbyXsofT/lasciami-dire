import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"; //Middleware

import themeReducer from "./reducers/themeReducer";
import userReducer from "./reducers/userReducer";
import modalReducer from "./reducers/modalReducer";

const rootReducer = combineReducers({
	themeReducer: themeReducer,
	userReducer: userReducer,
	modalReducer: modalReducer,
});

// Crea negozio con i riduttori e
// applica thunk come middleware
const configureStore = () => {
	return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
