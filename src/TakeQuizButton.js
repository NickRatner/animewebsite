import React from 'react';
import "./App.css";
import { Link } from 'react-router-dom';

function TakeQuizButton(){
    return(
        <button  className="TakeQuizButton">
            <Link to="/q1"> Take the Quiz</Link>
        </button>
    );
  }

export default TakeQuizButton;