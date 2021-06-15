import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';
import { QuizContextProvider } from './contexts/quiz.context';

ReactDOM.render(
  <React.StrictMode>
    <QuizContextProvider>
       <Router>
         <App />
      </Router>
     </QuizContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
