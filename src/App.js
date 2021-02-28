//React
import React from 'react'


//Components
import Navbar from './components/Navbar';
import ARoute from './components/ARoute';

//CSS
import './App.css';

function App() {
  return (

    <div>
      <Navbar />

      <div className="container mt-3">
        <ARoute />
      </div>

    </div>
      
  );
}

export default App;
