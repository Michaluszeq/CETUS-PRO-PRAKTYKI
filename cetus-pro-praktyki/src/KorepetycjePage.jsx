import React from 'react';
import { Link } from "react-router-dom";
import Baner from './baner/baner';
import BottomBaner from './bottomBaner/bottomBaner';

import Korepetycjee from './Korepetycje/korepetycje';

export default function Korepetycje() {  
  return (
    <div className='korepetycje'>
        <Baner/>
      <Korepetycjee />
      <BottomBaner/>
      
    </div>
  );
}