import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Result from "./pages/Result/Result";
import RouteNotFound from "./utils/RouteNotFound/RouteNotFound";
import { Routes,Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <>
       <Header/>
       <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/quiz/:quizID" element={<Quiz/>}/>
            <Route path="/result" element={<Result/>}/>
            <Route path="*" element={<RouteNotFound/>}/>
          </Routes>
       </div>
    </>
  );
};

export default App;
