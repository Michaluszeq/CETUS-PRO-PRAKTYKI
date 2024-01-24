import React, { useState, useEffect } from 'react';
import Baner from './baner/baner';
import BottomBaner from './bottomBaner/bottomBaner';
import OpionionForm from '../src/OpinionForm/OpinionForm'; 
import './App.css';

const OpiniaPage = () => {
  

  return (
    <div>
      {/* <Baner /> */}
      <div className='OpinionFormContainer'>
        <OpionionForm/>
        
        
      </div>
      {/* <BottomBaner /> */}
    </div>
  );
};

export default OpiniaPage;
