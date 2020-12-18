import React from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      {/* App body */}
      <div className='app__body'>
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}

      </div>

    </div>
  );
}

export default App;
