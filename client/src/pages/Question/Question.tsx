import { useParams,useNavigate, useLocation } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import { State,Action,Params,Location } from "./Question.types";
import { nanoid } from "nanoid";

import "./Question.css";
import { useQuiz } from "../../contexts/quiz.context";
import { getLeaderboard } from "../../services/quiz.services";

const Question = () => {
    const {quizID}:Params = useParams();

    const {quiz} = useQuiz();
    const currentQuiz = quiz?.find( q => q._id === quizID )

    const [time,setTime] = useState<number>(30);
    const [stopTime,setStopTime] = useState<boolean>(false);
    const navigate = useNavigate();

    const location:Location = useLocation();
    const state = location.state;

    useEffect(() => {
       let timer = 30;
       function timeout(){
          setIsClicked(true);
          setStopTime(true)
       }

       let a = setInterval(() => {
          if(timer === 1){
            clearInterval(a)
            timeout();
          }
          setTime(state => state - 1)
          timer = timer - 1;
       },1000)

       if(stopTime){
          clearInterval(a)
       }

       return () => {
          clearInterval(a)
       }
    },[stopTime])

    
    const [isClicked,setIsClicked] = useState<boolean|number>(false);

    const initialState:State = {
       score:0,
       currentQuestionNo:0
    }

    const quizReducer = (state:State,action:Action) => {
        switch (action.type) {
            case "INCREMENT_SCORE":
            return {...state,score:action.payload.score}
            case "NEXT_QUESTION":
            return {...state,currentQuestionNo:action.payload.currentQuestionNo}
            default:
            return state;
        }
    }

    const [{score,currentQuestionNo},dispatch] = useReducer(quizReducer,initialState);

    function handleOption(isRight:boolean,i:number){
        if(isRight){
            setIsClicked(true);
            setStopTime(true);
            dispatch({type:"INCREMENT_SCORE",payload:{score:score + 1}});
        }
        else{
            setIsClicked(i)
            setStopTime(true);
        }
    }

    const handleNextQues = async() => {
        setIsClicked(false);
        setStopTime(false);
        if(currentQuiz?.questions.length === currentQuestionNo + 1){
                if(state?.name){
                    const res = await getLeaderboard(quizID,{name:state?.name,score})
                    if("leaderboard" in res){
                        return navigate("/result",{state:{score,leaderboard:res.leaderboard}})
                    }
                }
                return navigate("/result",{state:{score,leaderboard:[]}})
        }
        dispatch({type:"NEXT_QUESTION",payload:{currentQuestionNo:currentQuestionNo + 1}});
        setTime(30);
    }

    const handleQuit = () => {
        navigate(-1)
    }

    return (
        <div className="question">
            
            <div className="display__question__number">{currentQuestionNo + 1}/10</div>
            <div className="timer__container">
                <span className={time <=10 ? (time % 2 === 0 ? "timer darkRed" : "timer" )  :"timer"}>{time}</span>
            </div>
            <h3 className="question__heading">{currentQuiz?.questions[currentQuestionNo].question}</h3>
            <div className="options__container">
              {
                currentQuiz?.questions[currentQuestionNo].options.map( (option,i) => (
                    <button 
                    disabled={isClicked !== false} 
                    className={
                        isClicked !== false ? 
                        ( isClicked === true ? ( option.isRight ? "option right__answer" : "option" ) : ( option.isRight ? "option right__answer" : (i === isClicked ? "option wrong__answer" : "option") ))  
                        :"option"
                    } 
                    key={nanoid()} 
                    onClick={() => handleOption(option.isRight,i)}
                    >
                       {option.text}
                    </button>
                ))
              }
            </div>
            <h4 className="display__score">Current score : {score}</h4>
            <div className="btn__container">
              <button className="primary__btn" onClick={handleQuit}>QUIT</button> &nbsp;
              <button className="primary__btn" disabled={isClicked === false} onClick={handleNextQues}>NEXT</button>
            </div>
        </div>
    );
};

export default Question;
