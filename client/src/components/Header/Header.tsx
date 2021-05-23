import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <h1 className="header_heading"><Link to="/" className="header__link">QuizFever</Link></h1>
        </div>
    );
};

export default Header;
