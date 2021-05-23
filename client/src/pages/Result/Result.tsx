import { useLocation, useNavigate } from "react-router-dom";
import { Leaderboard } from "../../contexts/quiz.context.types";

import "./Result.css";
import { Location } from "./Result.types";

const Result = () => {

  const navigate = useNavigate();
  const location:Location = useLocation();
  
  const score = location.state?.score;
  const leaderboard = location.state?.leaderboard;
  const filteredLeaderboard = leaderboard?.sort((a,b) => b.score - a.score);

  return (
    <div className="result">
      <div className="final__score">Final score</div>
      <div className="score"><span>{score||0} / 10</span></div>

      <div className="btn__container">
        <button className="primary__btn" onClick={() => navigate("/")}>
          GO TO HOME
        </button>
        <button className="primary__btn" onClick={() => navigate(-1)}>
          PLAY AGAIN
        </button>
      </div>

      <div className="leaderboard">
          <div className="leaderboard__heading">
            <i className="fas fa-trophy"></i>&nbsp;LEADERBOARD
          </div>
          {filteredLeaderboard?.map((item:Leaderboard,index:number) => (
            <div className="card" key={item._id}>
              <div className="card__content">
                <div className="card__number">{index + 1}.&emsp;</div>
                <div className="card__title">{item.name}</div>
              </div>
              <div>{item.score}</div>
            </div>
          ))}
      </div>
      
    </div>
  );
};

export default Result;
