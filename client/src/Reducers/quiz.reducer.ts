import { Action, State } from "../pages/Question/Question.types";

export const quizReducer = (state:State,action:Action) => {
    switch (action.type) {
        case "INCREMENT_SCORE":
        return {...state,score:action.payload.score + 1}
        case "NEXT_QUESTION":
        return {...state,currentQuestionNo:action.payload.currentQuestionNo + 1}
        default:
        return state;
    }
}