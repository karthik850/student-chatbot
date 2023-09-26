import { AGE_DATA } from "./action";


export const ageData=(data)=>{
    return {
        type: AGE_DATA,
        payload: data
    }
}