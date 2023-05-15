import { CHANGE_LANGUAGE } from "./actionTypes";

const changeLanguage = (language) => {
    return{
        payload: language,
        type: CHANGE_LANGUAGE
    }
}


export {changeLanguage}