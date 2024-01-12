import React from 'react';
import SearchBar from '../src/Search/Search'; // Zmiana ścieżki na odpowiednią
import './App.css';
import Baner from './baner/baner';
import BottomBaner from './bottomBaner/bottomBaner';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPanel from '../src/loginPanel/loginPanel';
import Settings from './TwojeKonto/TwojeKonto';

export default function App() {
  return (
    <div className=''>
        <LoginPanel />
    </div>
    
  );
}
