import React from 'react';
import { Link } from "react-router-dom";  // Dodaj Link, jeśli używasz go w komponencie

import RegisterPanel from './registerPanel/registerPanel';  // Popraw ścieżkę

export default function RegisterPage() {  // Zmień nazwę funkcji na RegisterPage
  return (
    <div>
      <RegisterPanel />
    </div>
  );
}
