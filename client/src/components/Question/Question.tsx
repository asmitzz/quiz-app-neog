type QuestionProps = {
    question?:string
}

const Question = ({question}:QuestionProps) => {
    return (
        <h3 className="question__heading">{question}</h3>
    )
}

export default Question
