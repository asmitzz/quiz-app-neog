import {ToastProps} from "./Toast.types";
import "./Toast.css";

export const Success = ({show,message}:ToastProps) => {
  return show ? (
    <div className="toast-container">
      <div className="toast success">
        <i className="fa fa-check-circle"></i>
        <div>&nbsp;{message}</div>
      </div>
    </div>
  ): <div></div>
}

export const Error = ({show,message}:ToastProps) => {
return show ? (
  <div className="toast-container">
    <div className="toast error">
       <i className="fa fa-window-close"></i>
       <div>&nbsp;{message}</div>
    </div>
  </div>
):<div></div>
}