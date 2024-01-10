// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../mainPageContent/mainPageContent.css"
import MainPageTile from '../MainPageTile/MainPageTile'

export default function App() {

  return (
    <div className="mpc">
     <MainPageTile/>
     <MainPageTile/>
    </div>
  );
}
