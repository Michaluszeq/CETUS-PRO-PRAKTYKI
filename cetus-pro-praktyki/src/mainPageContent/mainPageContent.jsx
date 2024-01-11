// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../mainPageContent/mainPageContent.css"
import MainPageTile from '../MainPageTile/MainPageTile';
import Gielda from '../Icons/ksiazka.jpg';
import OpinieLogo from '../Icons/stasiek.png';

export default function App() {
  
  return (
    <div className="mpc">
     <MainPageTile photoloc='l' photo={Gielda} title="Giełda książek" />
     <MainPageTile photo={OpinieLogo} title="Opinie o nauczycielach"/>
    </div>
  );
}
