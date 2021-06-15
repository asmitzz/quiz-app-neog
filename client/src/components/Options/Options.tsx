import { Option } from "../../contexts/quiz.context.types";
import { OptionsProps } from "./Options.types";

const Options = ({currentQuiz,currentQuestionNo,isClicked,handleOption}:OptionsProps) => {

    const getClass = (isRight:boolean,i:number):string => {
        if(isClicked !== false){
            if(isClicked === true){
                return isRight ? "option right__answer" : "option"
            }
            return isRight ? "option right__answer" : (i === isClicked ? "option wrong__answer" : "option")
        }
        return "option"
    }

    return (
        <div className="options__container">
            {
                currentQuiz?.questions[currentQuestionNo].options.map( (option:Option,i) => (
                    <button 
                    disabled={isClicked !== false} 
                    className={getClass(option.isRight,i)} 
                    key={option._id} 
                    onClick={() => handleOption(option.isRight,i)}
                    >
                       {option.text}
                    </button>
                ))
              }
        </div>
    );
};

export default Options;
