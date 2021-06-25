import { ContextState,ContextAction } from "../contexts/quiz.context.types";

export const quizReducer = (state:ContextState,action:ContextAction) => {
    switch (action.type) {
        case "SETQUIZ":
        return {...state,quiz:action.payload.quiz}
        case "INCREMENT_SCORE":
        return {...state,score:action.payload.score + 1}
        case "NEXT_QUESTION":
        return {...state,currentQuestionNo:action.payload.currentQuestionNo + 1}
        case "RESET_QUIZ":
        return {...state,score:0,currentQuestionNo:0}
        default:
        return state;
    }
}