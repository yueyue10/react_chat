/*
 * redux 最核心的管理对象模块
 */
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers";

//向外暴露store
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
