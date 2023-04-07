import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';



function QuestionThree(){

  const { q2Result } = useLocation().state;

  const [buttonPressed, setButtonPressed] = useState("");

  let data  = Object.assign({}, q2Result, {q3: buttonPressed});

  const selectButton = (button) => {
    if((buttonPressed === "yes" && button === "yes") || (buttonPressed === "no" && button === "no"))
    {
      setButtonPressed("");
    }
    else
    {
      setButtonPressed(button);
    } 
  }

  return (
    <div>

      <h1 style={{
        textAlign: 'center',
        paddingTop: '20px',
      }}>Do you like older shows?</h1> 

      <button className="TakeQuizButton">
          <Link to="/recommendations/result" state={{result: data}}> Submit</Link>
      </button>


      <div className={buttonPressed === 'yes'? "q3Div1 highlight":'q3Div1'} onClick={() => selectButton('yes')}>
        <h1 style={{
          position: 'relative',
          top: "35%",
          
        }}>
          Yes
        </h1>
      </div>

      <div className={buttonPressed === 'no'? "q3Div2 highlight":'q3Div2'} onClick={() => selectButton('no')}>
        <h1 style={{
          position: 'relative',
          top: "35%",
        }}>
          No
        </h1>
      </div>

    </div>
  );
}


export default QuestionThree;