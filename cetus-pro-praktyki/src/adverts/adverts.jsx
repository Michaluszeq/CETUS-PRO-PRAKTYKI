import React from 'react'; 
import './adverts.css';
import Search from '../Search/Search';
import Advert from '../advert/Advert';



export default function App() {
  return (
            <div className='advertsContent'>
                <Search/>
                <Advert/>
                 
            </div>
           
  );
}
