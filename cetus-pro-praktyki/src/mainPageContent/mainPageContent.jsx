// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../mainPageContent/mainPageContent.css"
import MainPageTile from '../MainPageTile/MainPageTile'

export default function App() {

  return (
    <div className="mpc">
     <h1>SG</h1>
     <MainPageTile/>
     <MainPageTile/>
     <MainPageTile/>
    </div>
  );
}
