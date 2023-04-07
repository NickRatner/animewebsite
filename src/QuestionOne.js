import React, {useState} from 'react';
import "./App.css";
import { Link } from 'react-router-dom';

function QuestionOne(){
  
  const [buttonPressed, setButtonPressed] = useState("");
  const selectButton = (button) => {
    if((buttonPressed === "great" && button === "great") || (buttonPressed === "meh" && button === "meh") || (buttonPressed === "sad" && button === "sad"))
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
      }}>How are you feeling today?</h1> 

      <button  className="TakeQuizButton">
          <Link to="/q2/value" state={{q1Result: buttonPressed}}> Next Question</Link>
      </button>

      <div className={buttonPressed === 'great'? "q1Div1 highlight":'q1Div1'} onClick={() => selectButton('great')}>    
      
        <div style={{
          paddingTop: '10px',
          height: '80%',
        }}>
          <img src={require('./Images/HappyFace-rbg.png')} alt='HappyFace'></img>
        </div>
        Great!
      </div>

      <div className={buttonPressed === 'meh'? "q1Div2 highlight":'q1Div2'} onClick={() => selectButton('meh')}>    
      
        <div style={{
          paddingTop: '10px',
          height: '80%',
        }}>
          <img src={require('./Images/MehFace-rbg.png')} alt='MehFace'></img>
        </div> 
        Meh
      </div>

      <div className={buttonPressed === 'sad'? "q1Div3 highlight":'q1Div3'} onClick={() => selectButton('sad')}>    
      
        <div style={{
          paddingTop: '10px',
          height: '80%',
        }}>
          <img src={require('./Images/SadFace-rbg.png')} alt='SadFace'></img>
        </div>
        Sad
      </div>


    </div>
  );
}


export default QuestionOne;