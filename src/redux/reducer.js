import { CHANGE_LANGUAGE} from "./actions/actionTypes";

const initialState = {
    language: "english",
};

const reducer = (state = initialState, { type, payload }) => {
    switch(type){

        case CHANGE_LANGUAGE:
            return{...state, language: payload}

         default:
            return {...state}
    }
}

export default reducer;