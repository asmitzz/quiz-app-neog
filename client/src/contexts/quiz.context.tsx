import { createContext, useContext, useEffect, useState } from "react";
import {Props,QuizData} from "./quiz.context.types";
import {getQuestions} from "../services/quiz.services";

export const QuizContext = createContext<Partial<QuizData>>({});

export const QuizContextProvider = ({children}:Props) => {
    const [state,setQuiz] = useState<QuizData>({quiz:[]})

    useEffect(() => {
        (async function(){
            const quizData = await getQuestions();
            if("quiz" in quizData){
                setQuiz(quizData);
            }
        })()
    },[])

    return (
      <QuizContext.Provider value={{quiz:state.quiz}}>
          {children}
      </QuizContext.Provider>
    )
}

export const useQuiz = () => {
    return useContext(QuizContext)
}