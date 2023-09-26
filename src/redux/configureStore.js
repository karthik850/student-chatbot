import { combineReducers, createStore } from "redux";
import studentDataReducer from "./reducers/studentDataReducer";




export default function configureStore(initialState) {
    let reducer = combineReducers({
        studentData : studentDataReducer
    });

    return createStore(reducer, initialState)
}