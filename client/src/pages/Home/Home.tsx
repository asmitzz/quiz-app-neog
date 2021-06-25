import {useState} from "react";
import { useNavigate } from "react-router-dom";
import {State} from "./Home.types";
import LOGO from "../../assets/Images/home.svg";

import "./Home.css";
import { useQuiz } from "../../contexts/quiz.context";

const Home = () => {

    const {quiz} = useQuiz();

    const [state,setState] = useState<State>({name:"",category:"default"});
    const [error,setError] = useState<State>({name:"",category:""});
    
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLSelectElement>): void => {
        const {name,value} = event.target;
        setState( state => ({...state,[name]:value}));
    }

    const validation = (state:State):boolean => {
        let name:string = "",category:string = "";

        if(state.name === ""){
            name = "name is required"
        }
        if(state.category === "default"){
            category = "please select the category"
        }
        setError(() => ({name,category}));

        if(!name && !category) return true;
        return false;
    }

    const handleStart = () => {
        if(validation(state)){
            navigate(`/quiz/${state.category}`,{state:{name:state.name}})
        }
    }

    return (
        <div className="home">
            <div className="logo">
              <img src={LOGO} alt="quiz" width="250px" height="100%"/>
            </div>
            <div>
                <input type="text" name="name" value={state.name} placeholder="Enter Name" className="form__control" onChange={handleChange}/>
                {error.name && <small className="invalid__feedback">{error.name}</small>}
            </div>
            <div>
                <select className="form__control" name="category" defaultValue={state.category} onChange={handleChange}>
                     <option value="default">Select Category</option>
                    {    
                        quiz?.map( (quiz) => (
                            <option value={quiz._id} key={quiz._id}>{quiz.name}</option>
                        ))
                    }
                </select>
                {error.category && <small className="invalid__feedback">{error.category}</small>}
            </div>
            <button className="startBtn" onClick={handleStart}>START QUIZ</button>
        </div>
    );
};

export default Home;
