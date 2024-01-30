import React from 'react';
import SearchBar from '../src/Search/Search'; 
import './App.css';
import Baner from './baner/baner';
import BottomBaner from './bottomBaner/bottomBaner';
import MainPageContent from './mainPageContent/mainPageContent'


export default function App() {
  const handleSearch = (searchTerm) => {
     console.log('Wyszukiwaniee:', searchTerm);
  };
  

  return (
            <div className='mainCotainer'>
                <Baner/>
                <MainPageContent/>
                {/* <BottomBaner/> */}
            </div>
           
  );
}
