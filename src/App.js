import React from 'react';
import './App.css';
import Content from './Content';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className="app">
      <div className = "app__body">

      {/* Sidebar - Personal Info */}
      <Sidebar />
      {/* Main Body */}

      <Content />
        {/* Header - Menu */}
        {/* Body */}

      </div>
    </div>
  );
}

export default App;
