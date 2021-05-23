export type Option = {
   text: string;
   /**
     * For correct answer make this true 
     */
   isRight:boolean;
}

export type Question = {
    question: string;
    options:Option[];
}

export type Questions = {
    quizName: string;
    questions: Question[];
}

export type QuizData = Questions[]