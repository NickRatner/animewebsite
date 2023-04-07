import React from 'react';
import { Link, useLocation } from 'react-router-dom';


function QuestionTwo(){
  
  const { q1Result } = useLocation().state;

  let data  = { q1: q1Result, q2: "placeholder"};


  return (
    <div>
      <h1 style={{
        textAlign: 'center',
        paddingTop: '20px',
      }}>Which genres do you like?</h1> 

      <button  className="TakeQuizButton">
        <Link to="/q3/value" state={{q2Result: data}}> Next Question</Link>
      </button>


    </div>
  );
}


export default QuestionTwo;