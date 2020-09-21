import React, {useEffect} from 'react';
import './App.css';
import ContentBody from './ContentBody';
import ContentHeader from './ContentHeader';
import Sidebar from './Sidebar';


function App() {
  
  // App Title
  useEffect(() => {
    document.title = "Portfolio - Hongdi LAI"
  }, []);

  return (
    
    <div className="app">
      <div className = "app__body">

      {/* Sidebar - Personal Info */}
      <Sidebar />
      {/* Main Body */}

        <div className = "app__content">
          <ContentHeader />
          <ContentBody />
        </div>
      
      
        {/* Header - Menu */}
        {/* Body */}

      </div>
    </div>
  );
}

export default App;
