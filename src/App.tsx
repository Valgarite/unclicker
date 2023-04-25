import React from 'react';
import {
  Link
} from "react-router-dom";
import './App.css';
import Main from './Main';

function App() {
  return (
    <>  
      <div>
        <ul>
          <li><Link to='/'>Let's Play</Link></li>
          <li><Link to='/lucky'>Recruit</Link></li>
        </ul>
        <hr />
        <Main />       
      </div>   
    </>
  );
}

export default App;
