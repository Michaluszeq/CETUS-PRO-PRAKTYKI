import React, { useState } from 'react';

export default function App() {

    const option = {
        width: '70%',
        height:'35px',
        radius:'30px'
    };


  return (
    <div className="FormContainer">
        <select style={option} name="" id="przedmiot">
                        <option value="J.Polski">J.Polski</option>
                        <option value="J.Niemiecki">J.Niemiecki</option>
                        <option value="J.Angielski">J.Angielski</option>
                        <option value="WF">WF</option>
                        <option value="Biologia">Biologia</option>
                        <option value="Chemia">Chemia</option>
                        <option value="Fizyka">Fizyka</option>
                        <option value="Geografia">Geografia</option>
                        <option value="Historia">Historia</option>
                        <option value="Matematyka">Matematyka</option>
                        <option value="Religia">Religia</option>
                        <option value="Programowanie">Programowanie</option>
                    </select>
    </div>
  );
}
