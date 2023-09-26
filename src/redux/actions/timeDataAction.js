import { TIME_DATA } from "./action"

export const timeData=(data)=>{
    return {
        type: TIME_DATA,
        payload: data
    }
}