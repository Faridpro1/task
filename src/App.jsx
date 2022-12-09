import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Card from './components/card';
import {Routes,Route} from "react-router-dom"
import Add from "./pages/addBlog"
import Blog from './pages/Blog';
import Login from './pages/Login';
function App() { 

  return (
    <div className="App">
      <Nav/>
      <div style={{paddingTop: 56}}>

       <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='Add' element={<Add/>}/>
       </Routes>
      </div>
    </div>
  );
}

export default App;
