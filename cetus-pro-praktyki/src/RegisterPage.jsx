import React from 'react';
import { Link } from "react-router-dom";
import './App.css'  // Dodaj Link, jeśli używasz go w komponencie

import RegisterPanel from './registerPanel/registerPanel';  // Popraw ścieżkę

export default function RegisterPage() {  // Zmień nazwę funkcji na RegisterPage
  return (
    <div className='mclrp'>
      <RegisterPanel />
    </div>
  );
}
