import { AGE_DATA, DATE_DATA, NAME_DATA, TIME_DATA } from "../actions/action";

const initialState = [];

export default function(state=initialState,action) {
    switch (action.type){
        case DATE_DATA:
            return {...state, date: action.payload}
        case TIME_DATA:
            return {...state, time: action.payload}
        case NAME_DATA:
            return {...state, name: action.payload}
        case AGE_DATA:
            return {...state, age: action.payload}
        default:
            return state
    }
}