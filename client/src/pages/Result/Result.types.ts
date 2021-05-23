import { Leaderboard } from "../../contexts/quiz.context.types"

export type State = {
    score?: number;
    leaderboard?: Leaderboard[];
}

export type Location = {
    state:State|null;
}