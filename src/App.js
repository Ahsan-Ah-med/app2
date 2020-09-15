import React from 'react';
import './App.css';
import medi from './medi.js';
function App() {

  return (
    <div class='App'>
      {/* <medi></medi>*/}
      <medi mediName='this'/>
      <medi mediName='then'/>
    </div>
    
  );
}

export default App;