const Timer = ({time}:{time:number}) => {
    return (
        <div className="timer__container">
                <span className={time <=10 ? (time % 2 === 0 ? "timer darkRed" : "timer" )  :"timer"}>{time}</span>
        </div>
    );
};

export default Timer;
