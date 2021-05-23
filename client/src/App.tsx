import Header from "./utils/Header/Header";
import Home from "./pages/Home/Home";
import Question from "./pages/Question/Question";
import Result from "./pages/Result/Result";

import {Routes,Route} from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <>
       <Header/>
       <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/quiz/:quizID" element={<Question/>}/>
            <Route path="/result" element={<Result/>}/>
          </Routes>
       </div>
    </>
  );
};

export default App;
