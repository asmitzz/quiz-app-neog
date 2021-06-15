import {SpinnerProps} from "./Spinner.types";
import "./Spinner.css";

const Spinner = ({show,style}:SpinnerProps) => {
  return show ? (
    <div style={style} className="spinner__container">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
    </div>
  ): (<div></div>)
}

export default Spinner;