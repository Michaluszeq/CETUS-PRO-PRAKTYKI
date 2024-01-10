import React from 'react';
import MessageIcon from '../Icons/message-icon.png';
import AccountIcon from '../Icons/account-icon.png';
import "./bottomBaner.css";

export default function BottomBaner() {
  return (
    <footer>
      <p>Creddits</p>
      <hr />
      <div className='rowContainer'>
        <p>FrontEnd</p>
        <p>BackEnd</p>
      </div>

      <div className='rowContainer'>
        <p>Maciej Nowicki</p>
        <p>Kacper Sroczyk</p>
      </div>
      
      <div className='rowContainer'>
        <p>Michał Kociołek</p>
        <p>Kacper Pliś</p>
      </div>


      <hr />
      <p>&copy; 2024 StudyBuddy</p>
    </footer>
  );
}

