import { Link } from "react-router-dom";
import { useQuiz } from "../../contexts/quiz.context";
import "./Header.css";

const Header = () => {
    const { dispatch } = useQuiz();

    const BackToHome = () => {
        if(dispatch){
           dispatch({type:"RESET_QUIZ"})
        }
    }
    return (
        <div className="header">
            <h1 className="header_heading"><Link to="/" onClick={BackToHome} className="header__link">QuizFever</Link></h1>
        </div>
    );
};

export default Header;
