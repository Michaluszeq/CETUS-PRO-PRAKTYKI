import React from 'react';
import Opinia from '../src/Opinia/Opinia';
import Baner from './baner/baner';
import BottomBaner from './bottomBaner/bottomBaner';

const OpiniaPage = () => {
  const opinie = [
    {
      imie: 'Jan Kowalski',
      ocena: 4,
      komentarz: 'Bardzo dobry nauczyciel, zawsze pomocny i cierpliwy.',
    },
    // Dodaj więcej opinii według potrzeb
  ];

  return (
    <div>
      <Baner></Baner>
      <div className='OpinionContainer'>
        <h1>Opinie o nauczycielach</h1>
        {opinie.map((opinia, index) => (
        <Opinia key={index} {...opinia} />
        ))}
      </div>
      
      <BottomBaner/>
    </div>
  );
};

export default OpiniaPage;
