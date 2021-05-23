import { Leaderboard } from "../contexts/quiz.context.types"

export type ServerError = {
     message:string;
     status:number;
}

export type LeaderboardData = {
     leaderboard:Leaderboard[]
}