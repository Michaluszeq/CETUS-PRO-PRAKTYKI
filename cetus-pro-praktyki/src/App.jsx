import React from 'react';
import './App.css';
// import Baner from './baner/baner';
// import BottomBaner from './bottomBaner/bottomBaner';


// export default function App() {
//   return (
//     <div className="App">
//       <Baner/>
//       <BottomBaner/>
      
//     </div>
//   );
// }


// import RegisterPanel from './RegisterPanel';

// const App = () => {
//   return (
//     <div>
//       <h1>Moja Aplikacja React</h1>
//       {/* Dodaj panel rejestracji */}
//       <RegisterPanel />
//     </div>
//   );
// };

import LoginPanel from './LoginPanel';

const App = () => {
  return (
    <div>
      <h1>Moja Aplikacja React</h1>
      {/* Dodaj panel Logowania */}
      <LoginPanel />
    </div>
  );
};

export default App;