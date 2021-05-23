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
