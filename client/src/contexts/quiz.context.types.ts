import { Dispatch } from "react"

export type Option = {
    _id:string;
    text: string;
    /**
      * For correct answer make this true 
      */
    isRight:boolean;
 }
 
 export type Question = {
     _id:string;
     question: string;
     options:Option[];
 }

 export type Leaderboard = {
     _id?:string;
     name:string;
     score:number;
 }
 
 export type Quiz = {
     _id:string;
     name: string;
     questions: Question[];
     leaderboard:Leaderboard[];
 }
 
 export type QuizData = {
     quiz:Quiz[]
 }

 export type Props = {
    children?:React.ReactNode
}

export type ContextAction = 
| { type:"SETQUIZ"; payload:{quiz:Quiz[];} }
| { type:"INCREMENT_SCORE"; payload:{score:number;} }
| { type:"NEXT_QUESTION"; payload:{currentQuestionNo:number;} }
| { type:"RESET_QUIZ";}

export type ContextState = {
    quiz:Quiz[];
    score:number;
    currentQuestionNo:number;
}

export type ContextType = {
    quiz:Quiz[];
    score:number;
    currentQuestionNo:number;
    dispatch?:Dispatch<ContextAction>
}



