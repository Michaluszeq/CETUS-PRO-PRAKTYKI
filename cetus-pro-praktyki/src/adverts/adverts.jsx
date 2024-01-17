import React from 'react'; 
import './adverts.css';
import Advert from '../advert/Advert'



export default function App() {
  return (
            <div className='advertsContent'>
                <Advert tytul="Tytuł" opis="dsfsadgasdg" nrtel="555 777 999" cena="100" sprzedawca="dd" ocena="1"></Advert>
            </div>
           
  );
}
