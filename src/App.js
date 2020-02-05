import React from 'react';
import './App.css';

import LogoHeader from './components/layout/LogoHeader';
import Header from './components/layout/Header';
import MainTitle from './components/layout/MainTitle';
import Card from './components/layout/Card';
import Cards from './components/layout/Cards';
import Legal from './components/layout/Legal';
import Footer from './components/layout/Footer';
import Form from './components/layout/Form';


function App() {
  return (
    <div className="App">
      <a href="#">
        <LogoHeader/>
       </a>
       <Header/>
       <MainTitle headline="Give yourself peace of mind for when the unexpected happens." subhead = "Talk to us about four ways to protect you and your family."/>
        <Cards />
    

   

        <Form/>
       <Legal/>
       <Footer />
      
     </div>
     
  );
}

export default App;
