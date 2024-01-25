// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './MainPageTile.css'


export default function App(props) {

  return (
    <div className="MainPageTileContainer">
      <img className='TilePhoto' src={props.photo}></img>
            <h2>{props.title}</h2>
            
    </div>
    
  );
}
