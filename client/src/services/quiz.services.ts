import {ServerError,LeaderboardData} from "./quiz.services.types";
import {Leaderboard, QuizData} from "../contexts/quiz.context.types";
import axios, { AxiosError } from "axios";

export async function getQuestions():Promise<QuizData|ServerError> {
    try {
        const {data} = await axios.get<QuizData>(`https://quiz-fever.herokuapp.com/questions`);
        return data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            const serverError = (error as AxiosError<ServerError>);
            if(serverError && serverError.response){
                return serverError.response.data;
            }
        }
        return { message:"something went wrong", status:500 }
    }
}

export async function getLeaderboard(quizID:string,user:Leaderboard):Promise<LeaderboardData|ServerError>{
    try {
        const {data} = await axios.post<LeaderboardData>(`https://quiz-fever.herokuapp.com/leaderboard/${quizID}`,user);
        return data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            const serverError = (error as AxiosError<ServerError>);
            if(serverError && serverError.response){
                return serverError.response.data;
            }
        }
        return { message:"something went wrong", status:500 }
    }
}