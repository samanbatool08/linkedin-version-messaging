import React from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      {/* App body */}
      <div className='app__body'>
        <Sidebar />
        {/* Feed */} 
        <Feed />
        {/* Widgets */}

      </div>

    </div>
  );
}

export default App;
