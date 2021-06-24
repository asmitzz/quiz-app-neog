import { useParams,useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Location } from "./Quiz.types";

import "./Quiz.css";
import { useQuiz } from "../../contexts/quiz.context";
import { getLeaderboard } from "../../services/quiz.services";
import Options from "../../components/Options/Options";
import Question from "../../components/Question/Question";
import Timer from "../../components/Timer/Timer";

const Quiz = () => {
    const quizID:string = useParams()?.quizID;

    const {quiz,score,currentQuestionNo,dispatch} = useQuiz();
    
    const currentQuiz = quiz?.find( q => q._id === quizID );

    const [time,setTime] = useState<number>(30);
    const [stopTime,setStopTime] = useState<boolean>(false);
    const navigate = useNavigate();

    const location:Location = useLocation();
    const state = location.state;

    useEffect(() => {
       let timer = 30;
       function timeout(){
          setIsClicked(true);
          setStopTime(true);
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

    function handleOption(isRight:boolean,i:number){
        if(isRight){
            setIsClicked(true);
            setStopTime(true);
            if(dispatch){
                dispatch({type:"INCREMENT_SCORE",payload:{score}});
            }
        }
        else{
            setIsClicked(i)
            setStopTime(true);
        }
    }

    const gameOver = async() => {
            if(state?.name && score){
                const res = await getLeaderboard(quizID,{name:state?.name,score})
                if("leaderboard" in res){
                    return navigate("/result",{state:{score,leaderboard:res.leaderboard}})
                }
            }
            return navigate("/result",{state:{score,leaderboard:[]}})
    }

    const handleNextQues = async() => {
        setIsClicked(false);
        setStopTime(false);
        if( currentQuestionNo && currentQuiz?.questions.length === currentQuestionNo + 1){
          gameOver();
          return;
        }
        if(dispatch){
            dispatch({type:"NEXT_QUESTION",payload:{currentQuestionNo}});
        }
        setTime(30);
    }

    const handleQuit = () => {
        navigate(-1)
    }

    return (
        <div className="quiz">
             <div className="display__question__number">{currentQuestionNo + 1}/10</div>
             <Timer time={time}/>
             <Question question={currentQuiz?.questions[currentQuestionNo].question}/>
             <Options currentQuiz={currentQuiz} currentQuestionNo={currentQuestionNo} isClicked={isClicked} handleOption={handleOption}/>
             <h4 className="display__score">Current score : {score}</h4>
             <div className="btn__container">
                <button className="primary__btn" onClick={handleQuit}>QUIT</button> &nbsp;
                <button className="primary__btn" disabled={isClicked === false} onClick={handleNextQues}>NEXT</button>
             </div>
        </div>
    );
};

export default Quiz;
