import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <NavBar />
      
      <Outlet />

      <Footer />
    </div>
  );
};

export default App;