import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import '../../App.css';

export default function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          </p>
        <Link to='/users' className="App-link">
          Users list
          </Link>
      </header>
    </div>
  );

}