import React from 'react';
import "./App.css";

function AnimeBubble(props){
  
  return (
    <div className='AnimeBubble'>
      <h2>{props.name}</h2> 
      <h4 style={{padding:'5px'}}>{props.genre}</h4>
      <h4 style={{padding:'5px'}}>{props.score}</h4>
    </div>
  );
}


export default AnimeBubble;