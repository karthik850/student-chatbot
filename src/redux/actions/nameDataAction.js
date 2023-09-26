import { NAME_DATA } from "./action"

export const nameData=(data)=>{
    return {
        type: NAME_DATA,
        payload: data
    }
}