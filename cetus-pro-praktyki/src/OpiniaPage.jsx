// OpiniaPage.jsx

import React from 'react';
import Opinia from '../src/Opinia/Opinia';

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
      <h1>Opinie nauczycieli</h1>
      {opinie.map((opinia, index) => (
        <Opinia key={index} {...opinia} />
      ))}
    </div>
  );
};

export default OpiniaPage;
