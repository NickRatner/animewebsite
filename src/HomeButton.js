import React from 'react';
import "./App.css";
import { Link } from 'react-router-dom';

function HomeButton(){
    return(
        <button className="HomeButton">
            <Link to="/"> Home</Link>
        </button>
    );
  }

export default HomeButton;