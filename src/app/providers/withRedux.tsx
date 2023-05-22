import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from '@redux-devtools/extension';
import reducers from "./storeRedux/reducers";

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
