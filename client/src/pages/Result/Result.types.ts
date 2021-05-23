import { Leaderboard } from "../../contexts/quiz.context.types"

export type State = {
    score?: number;
    leaderboard?: Leaderboard[];
} | null

export type Location = {
    state:State;
}