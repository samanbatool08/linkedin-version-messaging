import React from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import Login from './Login.js';
import './App.css';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />

      {!user ? <Login /> 
      : 
      ( <div className='app__body'>
        <Sidebar />
        {/* Feed */} 
        <Feed />
        {/* Widgets */}
      </div> )}

    </div>
  );
}

export default App;
