import { type } from "os"

export type State = {
    score:number;
    currentQuestionNo:number;
}

export type Action = 
| { type:"INCREMENT_SCORE"; payload:{score:number;} }
| { type:"NEXT_QUESTION"; payload:{currentQuestionNo:number;} }
| { type:"RESET";}

export type Params = {
    quizID?:string;
}

export type LocationState = {
    name?:string;
}

export type Location = {
    state:LocationState|null
}