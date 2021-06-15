import { Quiz } from "../../contexts/quiz.context.types";

export type OptionsProps = {
    currentQuiz?:Quiz,
    currentQuestionNo:number,
    isClicked:boolean|number,
    handleOption:(a:boolean,b:number) => void
}