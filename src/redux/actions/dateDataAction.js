import { DATE_DATA } from "./action"

export const dateData=(data)=>{
    return {
        type: DATE_DATA,
        payload: data
    }
}