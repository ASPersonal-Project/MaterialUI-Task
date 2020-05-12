import React from 'react';
import './App.css';

import Header from './component/layout/Header';
import Footer from './component/layout/Footer';
import Home from './component/layout/Home';
import Exersice from './component/exersice/Exersice';
import {exersises,muscles} from './datastore';
const App = () => {
  return (
    <div>
      <Header/>
      <Exersice/>
      <Footer muscles={muscles}/>
     
    </div>
    
  );
}

export default App;
