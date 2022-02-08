
import './App.css';

import React from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
Route,Routes
} from "react-router-dom";

const  App =()=> {
  const apikey=' '
  
  
  const pagesize=9
 
    return (
      <>
      <Router>
      <Navbar></Navbar><br /><br />
      
      <Routes>
          <Route  exact path="/" element={<News apikey={apikey} key={1} pagesize={pagesize} category="general"/>}></Route>
          <Route exact path="/business" element={<News apikey={apikey} key={2} pagesize={pagesize} category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News apikey={apikey} key={3} pagesize={pagesize} category="entertainment"/>}></Route>
          <Route exact path="/science" element={<News apikey={apikey} key={4} pagesize={pagesize} category="science"/>}></Route>
          <Route exact path="/sports" element={<News apikey={apikey} key={5} pagesize={pagesize} category="sports"/>}></Route>
          
        </Routes>
      </Router>
      </>
    );
  
}
export default App
