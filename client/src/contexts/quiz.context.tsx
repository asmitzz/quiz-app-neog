import { createContext, useContext, useEffect, useReducer } from "react";
import {ContextState,ContextType, Props} from "./quiz.context.types";
import {getQuestions} from "../services/quiz.services";
import { quizReducer } from "../Reducers/quiz.reducer";

export const QuizContext = createContext<ContextType>({quiz:[],score:0,currentQuestionNo:0});

export const QuizContextProvider = ({children}:Props) => {
    const initialState:ContextState = {
        quiz:[],
        score:0,
        currentQuestionNo:0
    }

    const [{quiz,score,currentQuestionNo},dispatch] = useReducer(quizReducer,initialState);

    useEffect(() => {
        (async function(){
            const data = await getQuestions();
            if("quiz" in data){
                dispatch({ type:"SETQUIZ",payload:{quiz:data.quiz} })
            }
        })()
    },[])

    return (
      <QuizContext.Provider value={{quiz,score,currentQuestionNo,dispatch}}>
          {children}
      </QuizContext.Provider>
    )
}

export const useQuiz = () => {
    return useContext(QuizContext)
}