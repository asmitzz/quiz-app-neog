import {ToastProps} from "./Toast.types";
import "./Toast.css";

export const Success = ({show,message}:ToastProps) => {
  return show ? (
    <div className="toast-container">
      <div className="toast success">
        <div><i className="fa fa-check-circle"></i>&nbsp;{message}</div>
      </div>
    </div>
  ): <div></div>
}

export const Error = ({show,message}:ToastProps) => {
return show ? (
  <div className="toast-container">
    <div className="toast error">
       <div><i className="fa fa-window-close"></i>&nbsp;{message}</div>
    </div>
  </div>
):<div></div>
}