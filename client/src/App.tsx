import { useState } from "react";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Result from "./pages/Result/Result";
import Spinner from "./utils/Spinner/Spinner";

import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { getQuestions } from "./services/quiz.services";
import { useQuiz } from "./contexts/quiz.context";
import {Error} from "./utils/Toast/Toast";

import "./App.css";

const App = () => {
  const { dispatch } = useQuiz();
  const [ spinner,setSpinner ] = useState<boolean>(false);
  const [ error,setError ] = useState<boolean>(false);

  useEffect(() => {
    (async function () {
        setSpinner(true);
        try {
          const data = await getQuestions();
          if ("quiz" in data && dispatch) {
             dispatch({ type: "SETQUIZ", payload: { quiz: data.quiz } });
          }
          setSpinner(false);
        } catch (error) {
          setSpinner(false);
          setError(true);
          setTimeout(() => {
            setError(false);
          },2000)
        }
    })();
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:quizID" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
      <Spinner show={spinner}/>
      <Error show={error} message={"something went wrong!!"}/>
    </>
  );
};

export default App;
