import React from 'react';
import AnimeBubble from './AnimeBubble';
import HomeButton from './HomeButton';
import SorButton from './SortButton';
import "./App.css";
import { useLocation } from 'react-router-dom';

function RecommendationsScreen(){
  
  const { result } = useLocation().state; //result now stores the answer from the quiz
  
  return (
    <div className='recommendationsScreen'>
      <h1 style={{color:'yellow'}}>{result.q1} {result.q2} {result.q3}</h1>
      
      <h1 className='titleHeader' style={{
        position: 'absolute',
        top: '50px',
        width: '50%',
      }}>Anime Recommender Final Screen</h1> 

    <HomeButton />   
    <SorButton />
   
   
    <div style={{
        position: 'absolute',
        top: '67%',
        left: '20%',
      }}>    
      <AnimeBubble name="Attack on Titan" genre="Action, Drama, Fantasy ,Mystery" score="9.5/10"/>
    </div>

    <div style={{
        position: 'absolute',
        top: '67%',
        left: '45%',
      }}>    
      <AnimeBubble  name="One Piece" genre="Action, Adventure, Comedy, Drama, Fantasy" score="10/10"/>
    </div>


    <div style={{
        position: 'absolute',
        top: '67%',
        left: '70%',
      }}>    
      <AnimeBubble  name="Fullmetal Alchemist Brotherhood" genre="Action, Adventure, Drama, Fantasy" score="9.5/10"/>
    </div>

    <div style={{
        position: 'absolute',
        top: '40%',
        left: '20%',
      }}>    
      <AnimeBubble name="Death Note" genre="Mystery, Psychological, Supernatural, Thriller" score="8.5/10"/>
    </div>

    <div style={{
        position: 'absolute',
        top: '40%',
        left: '45%',
      }}>    
      <AnimeBubble name="Steins;Gate" genre="Drama, Psychological, Sci-Fi, Thriller" score="8.9/10"/>
    </div>


    <div style={{
        position: 'absolute',
        top: '40%',
        left: '70%',
      }}>    
      <AnimeBubble name="Jujutsu Kaisen" genre="Action, Drama, Supernatural" score="8.6/10"/>
    </div>



    </div>
  );
}


export default RecommendationsScreen;