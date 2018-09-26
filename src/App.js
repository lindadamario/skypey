import React from 'react';
import './App.css';
import Sidebar from './Sidebar'
import Main from './Main'

const App = () => {

  const App = {
    height: '100%',
    display: 'flex',
    color: 'rgba(189, 189, 192, 1)'
  }

  return(
    <div className='App' style={App}>
      <Sidebar />
      <Main />
    </div>
  );
}


export default App;
