import React from 'react';
import './global.css';
import Header from './components/Header/header.js';
import Body from './components/Body';
import Footer from './components/Footer';
function App() {
  return (
    <div style={{flex: 1, width: "100%", height: "100%", backgroundColor: "#FFF"}}>

    <Header/>
    <Body/>
    <Footer/>
    </div>
  );
}

export default App;
