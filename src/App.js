import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./App.css";
import Home from './components/Pages/Home'
import AboutMe from './components/Pages/AboutMe'
import Education from './components/Pages/Education'
import WorkHistory from './components/Pages/WorkHistory'
import ContactMe from './components/Pages/ContactMe'
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Switch>
          <Route path = '/' exact component= {Home}/>
          <Route path = '/about' exact component= {AboutMe}/>
          <Route path = '/education' exact component= {Education}/>
          <Route path = '/work' exact component= {WorkHistory}/>
          <Route path = '/contact' exact component= {ContactMe}/>

        </Switch>
        <Footer />
    </Router>
    
    </>
  );
}

export default App;
