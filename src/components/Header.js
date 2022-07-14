import React from 'react';
import { render } from 'react-dom';


export default function Header ({name, children}) {
  return (
    <header>
      <h1>{name}</h1>
      {children}
    </header>
  );
}